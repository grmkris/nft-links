import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useGroups } from '../../hooks/useGroups'
import { useTable, usePagination, useRowSelect, Hooks, HeaderProps, CellProps } from "react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/solid'

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
          <input type="checkbox" id={"my-toggle"} className="toggle toggle-xs" {...getToggleAllRowsSelectedProps()} />
        </div>
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }: CellProps<object>) => <input type="checkbox" className="toggle toggle-xs" {...row.getToggleRowSelectedProps()} />,
    },
    ...columns,
  ])
  hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    // fix the parent group of the selection button to not be resizable
    const selectionGroupHeader = headerGroups[0].headers[0]
    selectionGroupHeader.canResize = false
  })
}

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
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data
    },
    usePagination,
    useRowSelect,
    selectionHook,
  )

  // Render the UI for your table
  return (
    <>
      <div className="flex items-center space-x-1">
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <ChevronDoubleLeftIcon
              className={`h-6 w-6 ${canPreviousPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <ChevronLeftIcon
              className={`h-6 w-6 ${canPreviousPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <ChevronRightIcon className={`h-6 w-6 ${canNextPage ? 'text-secondary' : 'text-base'}`} />
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <ChevronDoubleRightIcon
              className={`h-6 w-6 ${canNextPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Page {pageIndex + 1} of {pageOptions.length}
            </span>
          </label>
          <label className="input-group">
            <span>Page</span>
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              className="input-bordered input-xs"
            />
          </label>
        </div>
        <div>
          <select
            className={'select-xs'}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table {...getTableProps()} className={'table w-full'}>
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
              prepareRow(row)
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, id) => {
                    return (
                      <td key={id} {...cell.getCellProps()} className={'max-w-xs truncate'}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export const GroupsTable = () => {
  const { data, isError, isLoading } = useGroups()

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name' // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description'
      }
    ],
    []
  )

  if (data?.data) {
    return <Table columns={columns} data={data.data} />
  }

  if (isLoading) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Skeleton count={10} />
      </div>
    )
  }
  if (isError) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <p>Something went wrong</p>
      </div>
    )
  }
}
