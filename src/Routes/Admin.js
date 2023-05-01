import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import AdminLogin from '../pages/admin/AdminLogin'
import UserTable from '../pages/admin/UserTable'
import VendorTable from '../pages/admin/vendorTable'
import AdminOrder from '../pages/admin/AdminOrder'
import Chat from '../components/chat/Chat'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminReview from '../pages/admin/AdminReview'



function Admin() {


    return (
        <>
            <Routes>
                <Route path='/login' element={<AdminLogin />} />

                    <Route path='/' element={<AdminLayout />}>
                        <Route path='/user' element={<UserTable />} />
                        <Route path='/vendor' element={<VendorTable />} />
                        <Route path='admin_order' element={<AdminOrder />} />
                        <Route path='/chat' element={<Chat/>}/>
                        <Route path='/dashboard' element={<AdminDashboard/>}/>
                        <Route path='/review' element={<AdminReview/>}/>
                    </Route>
                    <Route path={"*"} element={'kfif'} />

            </Routes>
        </>
    )
}

export default Admin















