import React from "react";
import Layout from "../../components/layout/Layout";
import {FilesTable} from "../../components/files/FilesTable";

function Index() {
  const renderContent = () => {
    return (
      <>
        <div className="card m-2 max-w-prose bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-current">Manage your files </h2>
            <p className="card-text">You can upload and manage your files on decentralized web.</p>
          </div>
        </div>
        <FilesTable />
      </>
    )
  };

  return <Layout>{renderContent()}</Layout>;
}

export default Index;
