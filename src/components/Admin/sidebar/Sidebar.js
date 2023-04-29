import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { token } from '../../../redux/features/adminAuthSlice'
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch()
  const [expand, setExpand] = useState(false);
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
            to="dashboard"
            className={(({ isActive }) => isActive ? 'text-red-600' : 'text-white')}
          >
            <span className=" flex gap-1 mt-6">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />  <path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
              {expand && <span className="text-white ">Dashboard</span>}
            </span>
          </NavLink>
          <NavLink
            to="/admin/user">
            <span className="text-white flex gap-1 mt-6">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {expand && <span className="text-white ">Customers</span>}
            </span>
          </NavLink>
          <NavLink
            to="admin_order">
            <span className="text-white flex gap-1 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              {expand && <span className="text-white ">Booking</span>}
            </span>
          </NavLink>
          <NavLink
            to="/admin/vendor">
            <span className="text-white flex gap-1 mt-6">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {expand && <span className="text-white ">Vendors</span>}
            </span>
          </NavLink>
          <NavLink

            to="/admin/review">
            <span className="text-white flex gap-1 mt-6">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
</svg>

              {expand && <button className="text-white "   >Review</button>}
            </span>
          </NavLink>
          <NavLink

            to="/admin/chat">
            <span className="text-white flex gap-1 mt-6">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
</svg>


              {expand && <button className="text-white "   >Review</button>}
            </span>
          </NavLink>
          
          <NavLink
            onClick={() => {
              localStorage.removeItem('admin')
              dispatch(token(''));
            }}
            to="/admin/login">
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
              {expand && <button className="text-white "   >Logout</button>}
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
