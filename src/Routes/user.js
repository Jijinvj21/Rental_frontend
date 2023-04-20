import React from 'react'
import { Route, Routes } from 'react-router-dom'



import UserLayout from '../layout/UserLayout'

import Login from '../pages/User/login'
import Otp from '../pages/User/Otp'
import Signup from '../pages/User/Signup'
import UserHome from '../pages/User/UserHome'
import Cycle from '../pages/User/CyclePage'
import SingleCyclePage from '../pages/User/SingleCyclePage'
import ProfilePage from '../pages/User/ProfilePage'
import RentalPatnerPage from '../pages/User/RentalPatnerPage'
import OrderConfirmPage from '../pages/User/OrderConfirmPage'


function user() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path='/User/login' element={<Login />} />
                    <Route path='/User/Login/Otp/Verify' element={<Otp />} />
                    <Route path='/User/signUp' element={<Signup />} />
                    <Route path='/User/Signup/Otp/Verify' element={<Otp />} />



                    <Route path='/' element={<UserLayout />}>
                        <Route path='/' element={<UserHome />} />
                        <Route path='/cycle' element={<Cycle />} />
                        <Route path='/singleCycle' element={<SingleCyclePage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/rentalpatner' element={<RentalPatnerPage />} />
                        <Route path='/user_order' element={<OrderConfirmPage />} />
                        


                        


                    </Route>


                    
                </Route>
            </Routes>
        </>
    )
}

export default user
