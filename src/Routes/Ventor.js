import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VendorSidebar from '../layout/VendorLayout'



import VSignup  from '../pages/vendor/Signup'
import VOtp from '../pages/vendor/Otp'
import Vlogin from '../pages/vendor/login'
import ProductTable from '../pages/vendor/ProductTable'
import Accessories from '../pages/vendor/Accessories'
import Order from '../pages/vendor/Order'


function Ventor() {
  return (
    <>
    <Routes>
        <Route>

    <Route path='/Signup' element={<VSignup/>}/>
<Route path='/Signup/Otp/Verify' element={<VOtp/>}/>
<Route path='/login' element={<Vlogin/>}/>
<Route path='/Login/Otp/Verify' element={<VOtp/>} />
<Route path='/' element={<VendorSidebar />}>
<Route path='/product_table' element={<ProductTable/>}/>
<Route path='/accessories_table' element={<Accessories/>}/>
<Route path='/order' element={<Order/>}/>

</Route>
        </Route>
    </Routes>
    </>
  )
}

export default Ventor