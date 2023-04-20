import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Admin/sidebar/Sidebar'
import useAdminToken from '../customeHooks/useAdminToken'


function UserLayout() {
  useAdminToken()
  return (
    <div className="flex w-full ">
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default UserLayout