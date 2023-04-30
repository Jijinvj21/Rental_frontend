import React, { useEffect, useState } from 'react'
import User from '../../components/Table/Table'
import { useSelector,  } from 'react-redux';
import Filter from '../../components/Filter'
import useAdminToken from '../../customeHooks/useAdminToken';

function  UserTable() {
  const [user, setUser] = useState([])
  useAdminToken()

  const tableManagement = useSelector(state => state.dataManagement);

  useEffect(() => {
    setUser(() => tableManagement.data.user)

  }, [tableManagement])

  let table = []
  user?.map((data, index) => {
    let { name,stars,message,product } = data

    let table_head = {
      User_Name: name,
      Product:product.name,
      Rating:stars,
      Message:message,
    }
    table.push(table_head)
    return 0
  })
  return (
    <div className='overflow-auto h-screen' style={{  width: "100%" }}>
       <h1 className='text-center text-2xl pt-10'>USER REVIEW</h1>
      <Filter props={'review'} />
      <User users={table}  nodatamsg={ user? '':<div className='flex  min-h-[600px]   justify-center items-center'><p className=' text-center '> NO DATA ARE AVAILABLE</p></div>} />
    </div>
    // 
  )
}
export default UserTable





