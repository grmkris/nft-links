import React from 'react'
import Layout from '../../components/layout/Layout'
import { FilesTable } from '../../components/files/FilesTable'

function Index() {
  return (
    <Layout>
      <div className="bg-gray-100 py-2 dark:bg-slate-800">
        <div className="my-4 mx-2 flex flex-col items-center justify-between space-y-2 rounded-xl bg-white py-4 shadow-xl shadow-secondary/5 dark:bg-gray-700    md:mx-10 md:flex-row md:px-12">
          <div className="text-center text-lg text-gray-700 dark:text-gray-300 sm:text-left sm:text-2xl md:text-4xl">
            <p>
              Your <span className="text-secondary underline underline-offset-2">File</span>{' '}
              Collection
            </p>
          </div>

          <div className="px-5 text-center text-sm text-gray-400 sm:px-12 ">
            <p>
              File count <span className="font-semibold text-black dark:text-gray-200">11</span>
            </p>
          </div>
        </div>
        <FilesTable />
      </div>
    </Layout>
  )
}

export default Index
