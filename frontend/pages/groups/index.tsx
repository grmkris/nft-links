import React from "react";
import Layout from "../../components/Layout";
import { GroupsTable } from "../../components/groups/GroupsTable";
import { GroupsModal } from "../../components/groups/GroupsModal";

function Index() {
  const renderContent = () => {
    return (
      <>
        <div className="card m-2 max-w-prose bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-current">Manage your groups</h2>
            <p className="card-text">You can create and manage your groups here.</p>
          </div>
        </div>
        <GroupsTable />
      </>
    )
  };

  return <Layout>{renderContent()}</Layout>;
}

export default Index;
