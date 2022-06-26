import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { CellProps, HeaderProps, Hooks, usePagination, useRowSelect, useTable } from 'react-table';
import { Pagination } from '@/table/Pagination';
import { GraphProjectModal } from '@/graph/GraphProjectModal';
import { useGraphProjects } from 'hooks/useGraphProjects';
import { toast } from 'react-toastify';
import { ClipboardCopyIcon } from '@heroicons/react/solid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useUser } from '@supabase/supabase-auth-helpers/react';

const selectionHook = (hooks: Hooks<object>) => {
  hooks.allColumns.push((columns) => [
    // Let's make a column for selection
    {
      id: '_selector',
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 45,
      width: 45,
      maxWidth: 45,
      Aggregated: undefined,
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<object>) => (
        <div>
          <input
            type='checkbox'
            id={'toggle-all-groups-selected'}
            className='checkbox checkbox-xs'
            {...getToggleAllRowsSelectedProps()}
          />
        </div>
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }: CellProps<object>) => (
        <input
          type='checkbox'
          className='checkbox checkbox-xs'
          {...row.getToggleRowSelectedProps()}
        />
      ),
    },
    ...columns,
  ]);
  hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    // fix the parent group of the selection button to not be resizable
    const selectionGroupHeader = headerGroups[0].headers[0];
    selectionGroupHeader.canResize = false;
  });
};

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    selectionHook
  );

  // Render the UI for your table
  return (
    <>
      <Pagination
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        nextPage={nextPage}
        pageCount={pageCount}
        pageSize={pageSize}
        setPageSize={setPageSize}
        canNextPage={canNextPage}
      />
      <div className='overflow-x-auto'>
        <table {...getTableProps()} className={'table-compact table w-full'}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th key={index} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  {...row.getRowProps()}
                  className={`hover cursor-pointer ${row.isSelected ? 'active' : ''}`}
                  onClick={() => row.toggleRowSelected()}
                >
                  {row.cells.map((cell, id) => {
                    return (
                      <td key={id} {...cell.getCellProps()} className={'max-w-xs truncate'}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export const GraphProjectList = () => {
  const { data, isError, isLoading } = useGraphProjects();
  const { user } = useUser();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Repository',
        accessor: 'repository',
      },
      {
        Header: 'Graph init',
        accessor: (row) => (
          <CopyToClipboard
            text={`graph init --node https://graph-admin.htg.smuu.dev/ ${
              user.email.split('@')[0]
            }/${row.name}`}
          >
            <button
              className={'btn btn-sm'}
              onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
            >
              <ClipboardCopyIcon className='inline w-4' /> Init
            </button>
          </CopyToClipboard>
        ),
      },
      {
        Header: 'Graph create',
        accessor: (row) => (
          <CopyToClipboard
            text={`graph create --node https://graph-admin.htg.smuu.dev/ ${
              user.email.split('@')[0]
            }/${row.name}`}
          >
            <button
              className={'btn btn-sm'}
              onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
            >
              <ClipboardCopyIcon className='inline w-4' /> Create
            </button>
          </CopyToClipboard>
        ),
      },
      {
        Header: 'Graph deploy',
        accessor: (row) => (
          <CopyToClipboard
            text={`graph deploy --node https://graph-admin.htg.smuu.dev/ ${
              user.email.split('@')[0]
            }/${row.name}`}
          >
            <button
              className={'btn btn-sm'}
              onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
            >
              <ClipboardCopyIcon className='inline w-4' />
              Deploy
            </button>
          </CopyToClipboard>
        ),
      },
    ],
    []
  );

  if (data?.data) {
    return (
      <>
        <div className='card w-full rounded-xl bg-base-300 shadow-xl'>
          <div className='card-body'>
            <GraphProjectModal />
            <div className='flex flex-col space-y-8 sm:space-y-2'>
              <Table columns={columns} data={data.data} />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <div className='flex h-full flex-col items-center justify-center'>
        <Skeleton count={10} />
      </div>
    );
  }
  if (isError) {
    return (
      <div className='flex h-full flex-col items-center justify-center'>
        <p>Something went wrong</p>
      </div>
    );
  }
};
