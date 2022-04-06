import React from "react";
import Navbar from "../navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div id="container_dashboard" className="bg-white">
        {children}
      </div>
    </>
  );
}

export default Layout;
