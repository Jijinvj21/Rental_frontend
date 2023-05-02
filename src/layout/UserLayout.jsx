import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/User/Header";
import Footer from "../components/User/Footer";
import Userchat from "../components/User/Userchat";

function UserLayout() {
  return (
    <>
      <Header />
      <Userchat />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
