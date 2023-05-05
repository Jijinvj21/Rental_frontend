import React, { useEffect, useState } from "react";
import User from "../../components/Table/Table";
import axios from "../../instance/axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/Filter";
import { status } from "../../redux/features/dataManagementSlice";
import Modal from "../../components/Table/Modal";
import UseVendorToken from "../../customeHooks/useVendorToken";

function Order() {
  const [user, setUser] = useState([]);
  UseVendorToken();
  const dispatch = useDispatch();
  const token = localStorage.getItem("vendor");

  const tableManagement = useSelector((state) => state.dataManagement);
  const updateStatus = () => {
    dispatch(status(true));
  };
  useEffect(() => {
    setUser(() => tableManagement.data.user);
  }, [tableManagement]);
  function accessoriesButton() {
    return (
      <button className="text-white mx-auto bg-bgColor hover:bg-[#24292F]/90  focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2  ">
        Accessories
      </button>
    );
  }

  function accessoriesModal(accessories) {
    return (
      <div className="flex flex-col  gap-4 py-5 ">
        <div className="grid grid-cols-2 ">
          {accessories?.map((data) => {
            return (
              <>
                <img
                  src={data.image}
                  alt="new"
                  className="w-3/4 m-5  rounded-2xl"
                />
                <div className="text-left m-5 flex-row ">
                  <h1 className="mt-1">Name:{data.name}</h1>
                  <h1 className="mt-1">Size:{data.size}</h1>
                  <h1 className="mt-1">RentPrice:{data.price}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }

  let table = [];
  user?.map((data, index) => {
    let {
      product,
      userDetails,
      accessories,
      amount,
      bookedFromDate,
      bookedToDate,
      status,
    } = data;
    const date = new Date(bookedFromDate);
    const formattedBookedFromDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const date2 = new Date(bookedToDate);
    const formattedBookedToDate = date2.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    let table_head = {
      Cycle_Image: (
        <div className="flex justify-center">
          <img src={product?.image} alt="BigCo Inc. logo" className="w-14   " />
        </div>
      ),
      Cycle_Name: product?.name,
      User_Name: userDetails?.name,
      Amount: amount,
      From_Date: formattedBookedFromDate,
      To_Date: formattedBookedToDate,
      Accessories: (
        <Modal
          modal={accessoriesModal(accessories)}
          button={accessoriesButton()}
        />
      ),

      Status: (
        <button
          className="text-white bg-bgColor hover:bg-[#24292F]/90  focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 "
          onClick={() => {
            axios
              .post(
                "/vendor/cycleReturnStatus",
                { data: data._id },
                {
                  headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((responce) => {
                toast(`${responce.data}`);
              });
            updateStatus();
          }}
        >
          {status ? "On Rent" : "Return"}
        </button>
      ),
    };
    table.push(table_head);
    return 0;
  });

  return (
    <div className="overflow-auto h-screen  max-w-[350px] md:min-w-full">
      <h1 className="text-center pt-10 text-3xl">BOOKING LIST</h1>
      <Filter props={"booking"} />
      <User
        users={table}
        nodatamsg={
          table.length !== 0 ? (
            ""
          ) : (
            <div className="flex  min-h-[600px]   justify-center items-center">
              <p className=" text-center "> NO DATA ARE AVAILABLE</p>
            </div>
          )
        }
      />
    </div>
    //
  );
}
export default Order;
