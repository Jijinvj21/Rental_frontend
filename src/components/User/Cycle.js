// import React from 'react'
import { useNavigate } from "react-router-dom";
import Search from "../Table/Search";
import Pagination from "../Table/Pagination";
import Limit from "../Table/Limit";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { to, from } from "../../redux/features/userDateSlice";
import { toast } from "react-toastify";

function Cycle(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = new Date();
  const fromValue = useSelector((state) => state.userDataSlice.from);
  const toValue = useSelector((state) => state.userDataSlice.to);
  const [formDate, setFromDate] = useState(
    fromValue ? fromValue : today.toISOString().substr(0, 10)
  ); // Set today's date as default value
  const [toDate, setToDate] = useState(
    toValue ? toValue : today.toISOString().substr(0, 10)
  ); // Set today's date as default value
  function handleFromDateChange(event) {
    const today = new Date();
    if (new Date(event.target.value) < today) {
      toast("FROM date must be greater than or equal to TODAYS  date");
    } else {
      if (new Date(event.target.value) > new Date(toValue)) {
        setToDate(event.target.value);
        toast("FROM date must be lesser than or equal to TO  date");
      }
      setFromDate(event.target.value);
    }
  }
  function handleToDateChange(event) {
    if (new Date(formDate) <= new Date(event.target.value)) {
      setToDate(event.target.value);
    } else {
      setToDate(formDate);
      toast("To value must be greater than or equal to From value");
    }
  }
  try {
    dispatch(to(toDate));
    dispatch(from(formDate));
    const date = {
      from: formDate,
      to: toDate,
    };
    const jsonString = JSON.stringify(date);
    localStorage.setItem("userDate", jsonString);
  } catch (error) {
    toast(`${error.message}`);
    dispatch(to(formDate));
  }
  return (
    <div>
      <div className="flex flex-col  ">
        <div className="  flex justify-around   px-6  pt-24 ">
          <div className="  w-2/4 md:w-1/4 pr-5 pt-6 md:pt-3">
            <Search placeholder={"SEARCH"} />
          </div>
          <div className="flex justify-center items-center "></div>
          <div className="w-1/4 pt-3  flex justify-end">
            <Limit drop={true} />
          </div>
        </div>
        <div className="flex justify-center items-center  drop-shadow-2xl   ">
          <input
            onChange={handleFromDateChange}
            type="date"
            value={fromValue}
            className="bg-boxColor  text-sm md:text-xl opacity-70  rounded-l-full mt-2.5   md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none"
          />
          <input
            onChange={handleToDateChange}
            type="date"
            value={toValue}
            className="bg-boxColor  text-sm md:text-xl  opacity-70  rounded-r-full mt-2.5  md:mt-5 pt-1.5 md:p-3 pr-3 md:pr-9 focus:outline-none"
          />
        </div>

        <div className="min-h-[600px] pt-5">
          {props?.data?.data?.user?.[0] ? (
            ""
          ) : (
            <div className="flex  min-h-[600px]   justify-center items-center">
              <p className=" text-center "> NO DATA ARE AVAILABLE</p>
            </div>
          )}

          <div className="grid md:grid-cols-3   justify-items-center   ">
            {props?.data?.data?.user?.map((data) => {
              return (
                <div className=" max-w-sm shadow-lg overflow-hidden rounded-3xl m-5 ">
                  <div className="relative">
                    <div className=" absolute right-1 top-3 ">
                      <p
                        className="  cursor-pointer mr-5  rounded-full bg-bgColor  w-10 h-10 flex items-center justify-center"
                        onClick={() =>
                          navigate(`/singlecycle`, { state: data })
                        }
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <img className=" w-64 h-48" src={data.image} alt="rhcp" />

                  <div className=" w-64 p-4 text-center bg-boxColor">
                    <div className="text-2xl pb-2 ">{data.name}</div>
                    <span className=" text-2xl  mt-4 grid grid-cols-3">
                      <hr />
                      <h1 className="-mt-4 text-center text-[16px]">
                        ${data.price}/day
                      </h1>
                      <hr />
                    </span>
                    <div className="mt-4 ">
                      <ul className="flex justify-center">
                        <li className="mx-1 text-yellow-400">*</li>
                        <li className="mx-1 text-yellow-400">*</li>
                        <li className="mx-1 text-yellow-400">*</li>
                        <li className="mx-1 text-yellow-400">*</li>
                        <li className="mx-1 text-yellow-400">*</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Cycle;
