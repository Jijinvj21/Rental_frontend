import React from "react";
import { limit } from "../../redux/features/dataManagementSlice";
import { page } from "../../redux/features/dataManagementSlice";

import { useDispatch, useSelector } from "react-redux";

function Limit(props) {
  const i = useSelector((state) => state.dataManagement.limit);
  const dispatch = useDispatch();
  if (props.drop) {
    dispatch(limit(6));
  }

  const handleLimitSelect = (event) => {
    dispatch(limit(event.target.value));
    dispatch(page(1));
  };
  return props.drop ? (
    <div className="pt-4 md:pt-[50px] ">
      <select
        value={i}
        className={
          props.color
            ? `bg-${props.color}  border-r-8 border-r-boxColor   opacity-70 peer-focus:outline-none   md:p-3 m-1 rounded-lg`
            : " text-xs md:text-2xl border-r-4 md:border-r-4 border-r-boxColor  bg-boxColor peer-focus:outline-none  opacity-70 p-1 md:p-2 m-1 rounded-lg "
        }
        onChange={handleLimitSelect}
      >
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="21">21</option>
        <option value="30">30</option>
      </select>
    </div>
  ) : (
    <div className="pt-4 md:pt-[50px] ">
      <select
        value={i}
        className={
          props.color
            ? `bg-${props.color}  border-r-8 border-r-boxColor   opacity-70 peer-focus:outline-none   md:p-3 m-1 rounded-lg`
            : " text-xs md:text-2xl border-r-4 md:border-r-4 border-r-boxColor  bg-boxColor peer-focus:outline-none  opacity-70 p-1 md:p-2 m-1 rounded-lg "
        }
        onChange={handleLimitSelect}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
}

export default Limit;
