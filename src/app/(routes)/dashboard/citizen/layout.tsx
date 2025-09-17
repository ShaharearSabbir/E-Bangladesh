import React from "react";
import CitizenSidebar from "./CitizenSidebar";
import DashboardNavbar from "../DashboardNavbar";
const layout = ({ children }: { children: React.ReactElement }) => {

  return (
    <div className="flex min-h-screen">
      <CitizenSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
};

export default layout;
