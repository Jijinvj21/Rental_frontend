import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/vendor/sidebar/vendorSidebar";
import useVendorToken from "../customeHooks/useVendorToken";

function UserLayout() {
  useVendorToken();
  return (
    <div className="flex w-full">
      <div className="h-screen fixed">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
}

export default UserLayout;
