import React from "react";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

export const Pagination = ({
                             gotoPage,
                             canPreviousPage,
                             previousPage,
                             pageIndex,
                             pageOptions,
                             nextPage,
                             pageCount,
                             pageSize,
                             setPageSize,
                             canNextPage
                           }) => {
  return (
    <div className="btn-group w-full">
      <button className={`btn-xs sm:btn btn`} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        <ChevronDoubleLeftIcon className={"w-4 h-4"}/>
      </button>
      <button className="btn-xs sm:btn btn" onClick={() => previousPage()} disabled={!canPreviousPage}>
        <ChevronLeftIcon className={"w-4 h-4"}/>
      </button>
      <button className="btn-xs sm:btn btn">{pageIndex + 1} / {pageOptions.length}</button>
      <button className="btn-xs sm:btn btn " onClick={() => nextPage()} disabled={!canNextPage}>
        <ChevronRightIcon className={"w-4 h-4"}/>
      </button>
      <button className="btn-xs sm:btn btn" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        <ChevronDoubleRightIcon className={"w-4 h-4"}/>
      </button>
      <select
        className={'btn-xs sm:btn sm:btn-primary btn-primary'}
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}