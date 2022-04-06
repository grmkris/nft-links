import React from "react";
import NavigationBar from "./NavigationBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <NavigationBar />
      <div id="container_dashboard" className="bg-white">
        {children}
      </div>
    </>
  );
}

export default Layout;
