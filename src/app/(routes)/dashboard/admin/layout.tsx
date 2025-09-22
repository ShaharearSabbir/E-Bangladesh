import React from "react";

import DashboardNavbar from "../DashboardNavbar";
import AdminSidebar from "./AdminSidebar"
const layout = ({ children }: { children: React.ReactElement }) => {

  return (
    <div className="flex min-h-screen ">
      <div className="fixed z-50 ">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
};

export default layout;
