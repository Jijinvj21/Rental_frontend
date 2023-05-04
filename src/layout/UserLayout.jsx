import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/User/Header";
import Footer from "../components/User/Footer";
import Userchat from "../components/User/Userchat";

function UserLayout() {
  const location = useLocation();

  const [chat, setChat] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("user") && location.pathname !== "/rentalpatner") {
      setChat(true);
    } else {
      setChat(false);
    }
  }, [location]);

  return (
    <>
      <Header />
      {chat ? <Userchat /> : ""}
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
