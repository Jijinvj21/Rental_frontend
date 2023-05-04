import React from "react";
import { Route, Routes } from "react-router-dom";

import UserLayout from "../layout/UserLayout";

import Login from "../pages/User/login";
import Otp from "../pages/User/Otp";
import Signup from "../pages/User/Signup";
import UserHome from "../pages/User/UserHome";
import Cycle from "../pages/User/CyclePage";
import SingleCyclePage from "../pages/User/SingleCyclePage";
import ProfilePage from "../pages/User/ProfilePage";
import RentalPatnerPage from "../pages/User/RentalPatnerPage";
import OrderConfirmPage from "../pages/User/OrderConfirmPage";
import ReviewPage from "../pages/User/ReviewPage";
import PaymentSucessPage from "../pages/User/PaymentSucessPage";
import PaymentCancle from "../pages/User/PaymentCanclePage";
import PaymentErrors from "../pages/User/PaymentError";
import PageNotFound from '../components/Error/pageNotFound'
function user() {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <Routes>
        <Route>
          <Route path="/User/login" element={<Login />} />
          <Route path="/User/Login/Otp/Verify" element={<Otp />} />
          <Route path="/User/signUp" element={<Signup />} />
          <Route path="/User/Signup/Otp/Verify" element={<Otp />} />

          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<UserHome />} />
            <Route path="/cycle" element={<Cycle />} />
            <Route path="/singleCycle" element={<SingleCyclePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/rentalpatner" element={<RentalPatnerPage />} />
            <Route path="/user_order" element={<OrderConfirmPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/sucess/:sucess" element={<PaymentSucessPage />} />
            <Route path="/cancel/:cancle" element={<PaymentCancle />} />
            <Route path="/error/:errors" element={<PaymentErrors />} />
          </Route>
          <Route path={"*"} element={<PageNotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default user;
