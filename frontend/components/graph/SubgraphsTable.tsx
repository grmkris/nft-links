import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { usePagination, useRowSelect, useTable } from 'react-table';
import { Pagination } from '@/table/Pagination';
import { SubgraphModal } from '@/graph/SubgraphModal';
import { useGraphProjects } from 'hooks/useGraphProjects';
import Link from 'next/link';
import { definitions } from 'types/database';
import SubgraphStatus from '@/graph/SubgraphStatus';
import { CHAIN, getGraphQLUrl } from './graph.utils';
import { SubgraphActionsModal } from '@/graph/SubgraphActionsModal';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
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
    useRowSelect
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

export const SubgraphsTable = () => {
  const { data, isError, isLoading } = useGraphProjects();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Workspace',
        accessor: 'workspace', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Chain',
        accessor: 'chain',
      },
      {
        Header: 'Repository',
        accessor: (row: definitions['graph_projects']) => (
          <Link href={row.repository}>
            <a target='_blank' rel='noopener noreferrer' className='link link-primary'>
              {row.repository}
            </a>
          </Link>
        ),
      },
      {
        Header: 'Status',
        accessor: (row: definitions['graph_projects']) => (
          <SubgraphStatus graphQLUrl={getGraphQLUrl(row.workspace, row.name, row.chain as CHAIN)} />
        ),
      },
      {
        Header: 'Actions',
        accessor: (row: definitions['graph_projects']) => <SubgraphActionsModal subgraph={row} />,
      },
      {
        Header: 'Graphql',
        accessor: (row: definitions['graph_projects']) => (
          <Link href={getGraphQLUrl(row.workspace, row.name, row.chain as CHAIN)}>
            <a target='_blank' rel='noopener noreferrer' className='link link-primary'>
              Open
            </a>
          </Link>
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
            <SubgraphModal />
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
