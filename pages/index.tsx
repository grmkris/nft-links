import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { RootState } from "../model/storeModel";

function Dashboard() {
  const session = useSelector((state: RootState) => state.auth.session);
  console.log("user123", session);
  return <Layout>dashboard</Layout>;
}

export default Dashboard;
