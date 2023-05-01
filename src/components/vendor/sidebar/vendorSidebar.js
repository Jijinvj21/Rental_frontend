import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {token} from '../../../redux/features/vendorAuthSlice'

function Navbar() {
  const [expand, setExpand] = useState(false);
  const dispatch=useDispatch()
  function toggleHandler() {
    setExpand((expand) => !expand);
  }

  return (
    <>
      <div className="flex bg-boxColor h-screen  p-3 md:p-5 flex-col w-fit ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white cursor-pointer"
          onClick={() => toggleHandler()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <div className="cursor-pointer">
          <NavLink
          title="Dashboard"
            to="dashboard"
            className={(({ isActive }) => isActive ? 'text-red-600' : 'text-white')}
          >
            <span className=" flex gap-1 mt-6">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />  <path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
              {expand && <span className="text-white ">Dashboard</span>}
            </span>
          </NavLink>
          
          <NavLink
          title="Cycle "
            to="/Vendor/product_table">
          <span className="text-white flex gap-1 mt-6">
            <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="5" cy="18" r="3" />  <circle cx="19" cy="18" r="3" />  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />  <circle cx="17" cy="5" r="1" /></svg>
            {expand && <span className="text-white ">Cycle</span>}
          </span>
          </NavLink>
          <NavLink
                    title="Accessories "

            to="/vendor/accessories_table">
          <span className="text-white flex gap-1 mt-6">
            <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>
            {expand && <span className="text-white ">Accessories</span>}
          </span>
          </NavLink>
          <NavLink
                    title="Order "

            to="order">
          <span className="text-white flex gap-1 mt-6">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            {expand && <span className="text-white ">Order</span>}
          </span>
          </NavLink>
          <NavLink
                    title="Review "

            to="/vendor/review">
          <span className="text-white flex gap-1 mt-6">
          <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
</svg>
            {expand && <span className="text-white ">Review</span>}
          </span>
          </NavLink>
          <NavLink
                    title="Logout "

              onClick={()=>{
              localStorage.removeItem('vendor')
              localStorage.removeItem('vendorData')

              dispatch(token(''));
            }}
            to="/vendor/login">
          <span className="text-white flex gap-1 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            {expand && <span className="text-white ">Logout</span>}
          </span>
          </NavLink>
        </div>
      </div>

    </>
  );
}

export default Navbar;
