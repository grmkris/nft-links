import React from 'react'
import Layout from '../../components/layout/Layout'
import {FilesTable} from '../../components/files/FilesTable'
import {useFiles} from "../../hooks/useFiles";

function Index() {

  const {data, isLoading, isError} = useFiles()

  return (
    <Layout>
      <div className="card card-side m-4 rounded-xl bg-base-300 shadow-xl">
        <figure className={"p-5"}>{isLoading && <p>Loading...</p>}
          {isError && <p>Error...</p>}
          {!isLoading && data.data &&

            <div className="stats shadow justify-end">
              <div className="stat">
                <div className="stat-title">File count</div>
                <div className="stat-value"><span
                  className="font-semibold text-black dark:text-gray-200">{data.data.length}</span></div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          }</figure>
        <div className="card-body">
          <h2 className="card-title">
            Your <span className="text-primary-focus underline underline-offset-2">File</span>{' '}
            Collection
          </h2>
        </div>
      </div>
      <FilesTable/>
    </Layout>
  )
}

export default Index
