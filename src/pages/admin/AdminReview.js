import React, { useEffect, useState } from "react";
import User from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter";
import useAdminToken from "../../customeHooks/useAdminToken";
import axios from "../../instance/axios";
import { status } from "../../redux/features/dataManagementSlice";




function UserTable() {
  const [user, setUser] = useState([]);
  useAdminToken();
  const dispatch = useDispatch();

  const updateStatus = () => {
    dispatch(status(true));
  };

  const tableManagement = useSelector((state) => state.dataManagement);

  useEffect(() => {
    setUser(() => tableManagement.data.user);
  }, [tableManagement]);

  let table = [];
  user?.map((data, index) => {
    let {_id, name, stars, message, product,status } = data;

    let table_head = {
      User_Name: name,
      Product: product.name,
      Rating: stars,
      Message: message,
      Status: (
        <button  className="text-white bg-bgColor hover:bg-[#24292F]/90  focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 "
        onClick={() => {
          axios
                          .post(`/review/blockReview`, { id:_id })
                          .then((responce) => {
                            updateStatus();

                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      
        }}>
          {status ? "Block" : "Unblock"}
        </button>
      ),
    };
    table.push(table_head);
    return 0;
  });
  return (
    <div className="overflow-auto h-screen" style={{ width: "100%" }}>
      <h1 className="text-center text-2xl pt-10">USER REVIEW</h1>
      <Filter props={"review"} />
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
export default UserTable;
