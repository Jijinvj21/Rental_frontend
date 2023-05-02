import { useEffect } from "react";
import axios from "../instance/axios";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../redux/features/dataManagementSlice";
import { status } from "../redux/features/dataManagementSlice";
import { useLocation } from "react-router-dom";

function Filter(props) {
  const location = useLocation();
  const from = location.pathname;
  const fromValue = useSelector((state) => state.userDataSlice.from);
  const toValue = useSelector((state) => state.userDataSlice.to);
  const part = from.split("/");
  let token;
  const userToken = props.userToken;
  if (part[1].toLowerCase() === "user_order") {
    token = localStorage.getItem("user");
  } else {
    part[1].toLowerCase() === "cycle"
      ? userToken
        ? (token = userToken)
        : (token = localStorage.getItem("vendor"))
      : (token = localStorage.getItem(part[1].toLowerCase()));
  }
  let partinlowercase = part[1].toLowerCase();
  const dispatch = useDispatch();
  const tableManagement = useSelector((state) => state.dataManagement);
  useEffect(() => {
    const getAllUser = async () => {
      dispatch(data(""));
      try {
        const userDate = localStorage.getItem("userDate");
        const date = JSON.parse(userDate);
        const url = await axios.post(
          `/filter/filter?page=${
            tableManagement.page ? tableManagement.page : ""
          }&sort=${
            props?.limit
              ? props?.limit
              : tableManagement.sort
              ? tableManagement.sort
              : ""
          }&order=${
            tableManagement.order ? tableManagement.order : ""
          }&search=${tableManagement.search}&limit=${
            tableManagement.limit ? tableManagement.limit : ""
          }&tokenOf=${partinlowercase}&state=${
            props?.state ? props?.state : ""
          }&fromDate=${date.from}&toDate=${date.to}`,
          { data: props?.props },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        dispatch(data(url?.data));
        url ? dispatch(status(false)) : dispatch(status(""));
      } catch (error) {
        console.log(error);
      }
    };

    getAllUser();
  }, [
    tableManagement.order,
    tableManagement.sort,
    tableManagement.limit,
    tableManagement.search,
    tableManagement.page,
    tableManagement.status,
    toValue,
    fromValue,
  ]);
}
export default Filter;
