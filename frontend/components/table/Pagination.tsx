import React from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

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
  canNextPage,
}) => {
  return (
    <div className='btn-group w-full'>
      <button
        className={`btn btn-xs sm:btn`}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        <ChevronDoubleLeftIcon className={'h-4 w-4'} />
      </button>
      <button
        className='btn btn-xs sm:btn'
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <ChevronLeftIcon className={'h-4 w-4'} />
      </button>
      <button className='btn btn-xs sm:btn'>
        {pageIndex + 1} / {pageOptions.length}
      </button>
      <button className='btn btn-xs sm:btn ' onClick={() => nextPage()} disabled={!canNextPage}>
        <ChevronRightIcon className={'h-4 w-4'} />
      </button>
      <button
        className='btn btn-xs sm:btn'
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        <ChevronDoubleRightIcon className={'h-4 w-4'} />
      </button>
      <select
        className={'btn-primary btn-xs sm:btn sm:btn-primary'}
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
