import React from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
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
