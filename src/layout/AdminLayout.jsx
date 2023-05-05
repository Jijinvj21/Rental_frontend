import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/sidebar/Sidebar";
import useAdminToken from "../customeHooks/useAdminToken";

function UserLayout() {
  useAdminToken();
  return (
    <div className="flex w-full">
      <div className="h-screen fixed ">
        <Sidebar />
      </div>
      <div className="ml-10 md:ml-0 grow">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
