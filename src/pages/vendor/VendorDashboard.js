import React, { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import axios from "../../instance/axios";

function AdminDashboard() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/vendor/vendorDashboard", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("vendor"),
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="max-w-[340px] mx-auto md:max-w-full w-full ">
      <h1 className="text-center pt-10 text-3xl">DASHBOARD</h1>
      <Dashboard data={data} />
    </div>
  );
}

export default AdminDashboard;
