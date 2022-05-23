import 'react-loading-skeleton/dist/skeleton.css';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useGroups } from 'hooks/useGroups';
import { CellProps, HeaderProps, Hooks, usePagination, useRowSelect, useTable } from 'react-table';
import { CogIcon } from '@heroicons/react/solid';
import { GroupMembersTable } from './members/GroupMembersTable';
import { GroupsModal } from './GroupsModal';
import { Pagination } from '@/table/Pagination';

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

export const GroupsTable = () => {
  const { data, isError, isLoading } = useGroups();
  const [selectedGroup, setSelectedGroup] = useState(null);

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
        Header: 'Members',
        accessor: (row) => (
          <label onClick={() => onRowClick(row)} className='btn btn-sm'>
            {row.user_groups.length + ' '}
            <CogIcon className={'h-5 w-5'} />
          </label>
        ),
      },
    ],
    []
  );

  const onRowClick = (row) => {
    console.log(row);
    setSelectedGroup(row);
  };

  if (data?.data) {
    return (
      <>
        <div className='card m-4 rounded-xl bg-base-300 shadow-xl'>
          <div className='card-body'>
            <div className='flex flex-col space-y-8 sm:space-y-2'>
              <GroupsModal group={selectedGroup} />
              <Table columns={columns} data={data.data} />
            </div>
          </div>
        </div>
        {selectedGroup && (
          <div className='card m-4 rounded-xl bg-base-300 shadow-xl'>
            <div className='card-body'>
              <div className='flex flex-col space-y-8 sm:space-y-2'>
                <h2 className='card-title'>
                  Members of{' '}
                  <label className={'text-primary-focus underline underline-offset-2'}>
                    {selectedGroup.name}
                  </label>
                </h2>
                <GroupMembersTable group_id={selectedGroup.id} />
              </div>
            </div>
          </div>
        )}
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
