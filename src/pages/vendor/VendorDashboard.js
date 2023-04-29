import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import axios from '../../instance/axios'


function AdminDashboard() {
  const [data,setData]=useState()
useEffect(()=>{
  axios.get('/admin/adminDashnoard', {
  }).then((data) => {
      console.log(data.data);
      setData(data) 
  })
},[])

  return (
    <div className='max-w-[340px] mx-auto md:max-w-full w-full '><Dashboard data={data}/></div>
  )
}

export default AdminDashboard