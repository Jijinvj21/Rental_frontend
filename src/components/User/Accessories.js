import React, { useEffect, useState } from "react";
import axios from "../../instance/axios";
import UseUserToken from "../../customeHooks/useUserToken";
import { toast } from "react-toastify";

function Accessories(props) {
  UseUserToken();
  const [accessories, setAccessories] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  let data = {
    vendor: props?.data?.vendor,
    accessories: selectedItems,
  };
  useEffect(() => {
    const token = localStorage.getItem("vendor");
    axios
      .post(
        `/vendorAccessories`,
        { data },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        setAccessories(data?.data?.accessories);
      });
  }, []);
  const handleChange = (data) => {
    let flag = 0;
    selectedItems.forEach((item) => {
      if (item === data) flag++;
    });
    if (flag === 0) {
      toast("Item Added");
      setSelectedItems((prevData) => [...prevData, data]);
    }
    if (flag === 1) toast("Item already Added");
  };
  useEffect(() => {
    if (selectedItems) props?.rentHandler?.(selectedItems);
  }, [selectedItems]);
  return accessories.length === 0 ? (
    <div className=" w-full ">
      <h1 className="text-center">ON ACCESSORIES</h1>
    </div>
  ) : (
    <div className="flex flex-col overflow-auto h-[650px] gap-4 py-5">
      <div className="grid grid-cols-2 ">
        {accessories.map((data) => {
          return (
            <>
              <img src={data.image} alt="new" className="w-3/4 p-3  rounded-2xl" />
              <div className="text-left flex-row">
                <h1 className="mt-1">Name:{data.name}</h1>
                <h1 className="mt-1">Size:{data.size}</h1>
                <h1 className="mt-1">RentPrice:{data.price}</h1>
                <button
                  onClick={(e) => {
                    handleChange(data);
                  }}
                  className="w-1/2 mt-2 bg-bgColor p-2 rounded-full  "
                >
                  SELECT
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Accessories;
