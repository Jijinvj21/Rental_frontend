import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import AdminLogin from '../pages/admin/AdminLogin'
import UserTable from '../pages/admin/UserTable'
import VendorTable from '../pages/admin/vendorTable'
import AdminOrder from '../pages/admin/AdminOrder'


function Admin() {


    return (
        <>
            <Routes>
                <Route path='/login' element={<AdminLogin />} />

                    <Route path='/' element={<AdminLayout />}>
                        <Route path='/user' element={<UserTable />} />
                        <Route path='/vendor' element={<VendorTable />} />
                        <Route path='admin_order' element={<AdminOrder />} />



                    </Route>

            </Routes>
        </>
    )
}

export default Admin















