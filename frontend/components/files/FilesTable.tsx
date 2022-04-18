import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useTable, usePagination, useRowSelect, Hooks, HeaderProps, CellProps } from 'react-table'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardCopyIcon
} from '@heroicons/react/solid'
import { useFiles } from '../../hooks/useFiles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FilesModal } from './FilesModal'
import { toast } from 'react-toastify'

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
            type="checkbox"
            id={'toggle-all-groups-selected'}
            className="toggle toggle-xs"
            {...getToggleAllRowsSelectedProps()}
          />
        </div>
      ),
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      Cell: ({ row }: CellProps<object>) => (
        <input type="checkbox" className="toggle toggle-xs" {...row.getToggleRowSelectedProps()} />
      )
    },
    ...columns
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
    selectionHook
  )

  // Render the UI for your table
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-5 md:flex-row">
        <div className="flex w-full justify-between px-5 sm:mt-4 sm:w-1/2 lg:w-36">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <ChevronDoubleLeftIcon
              className={`h-5 w-5 ${canPreviousPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <ChevronLeftIcon
              className={`h-5 w-5 ${canPreviousPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <ChevronRightIcon
              className={`h-5 w-5 ${canNextPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <ChevronDoubleRightIcon
              className={`h-5 w-5 ${canNextPage ? 'text-secondary' : 'text-base'}`}
            />
          </button>
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">
              Page {pageIndex + 1} of {pageOptions.length}
            </span>
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
              prepareRow(row)
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

export const FilesTable = () => {
  const { data, isError, isLoading } = useFiles()

  const columns = React.useMemo(
    () => [
      {
        Header: 'Ipfs',
        accessor: (row) => (
          <CopyToClipboard text={row.id}>
            <div
              className={'btn btn-xs max-w-sm text-xs'}
              onClick={() => toast.info('Copied to clipboard', { autoClose: 500 })}
            >
              {' '}
              <ClipboardCopyIcon className="w-4" /> {row.id}
            </div>
          </CopyToClipboard>
        )
      },
      ,
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Type',
        accessor: 'type'
      },
      {
        Header: 'Size',
        accessor: 'size'
      },
      {
        Header: 'Created',
        accessor: 'created_at'
      }
    ],
    []
  )

  if (data?.data) {
    return (
      <div className={'w-full px-2 py-4 md:px-10'}>
        <div className="rounded-xl bg-white shadow-xl dark:bg-gray-700">
          <div className="flex flex-col space-y-8 p-4 sm:space-y-2">
            <FilesModal />
            <Table columns={columns} data={data.data} />
          </div>
        </div>
      </div>
    )
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
