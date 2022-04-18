import React from "react";
import Layout from "../../components/layout/Layout";
import { GroupsTable } from "../../components/groups/GroupsTable";

function Index() {
  const renderContent = () => {
    return (
      <>
          <div className="card m-4 rounded-xl bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Manage your <span className="text-primary-focus underline underline-offset-2">Groups</span>{' '}
                here.</h2>
            </div>
          </div>

        <GroupsTable />
      </>
    )
  };

  return <Layout>{renderContent()}</Layout>;
}

export default Index;
