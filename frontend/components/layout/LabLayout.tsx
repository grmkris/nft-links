import React from 'react'
import Layout from './Layout'
import {useRouter} from "next/router";
import Link from "next/link";

function LabLayout({children}) {
  const router = useRouter()
  return (
    <>
      <Layout>
        <div className="bg-base-100 p-4">
            <div className="card bg-base-200 shadow-xl text-accent breadcrumbs p-4">
              <ul>
                {
                  router.pathname.split('/').map((path, index) => {
                    if (index === 0) {
                      return null
                    }
                    return (
                      <li key={index} className={"capitalize"}>
                        <Link href={`${router.pathname.split("/").slice(0, index + 1).join("/")}`}>{path}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {
              // <CreateNFTHeader />
            }
            {children}
        </div>
      </Layout>
    </>
  )
}

export default LabLayout
