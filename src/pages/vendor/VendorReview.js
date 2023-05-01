import React, { useEffect, useState } from 'react'
import User from '../../components/Table/Table'
import { useSelector, } from 'react-redux';
import Filter from '../../components/Filter'
import useAdminToken from '../../customeHooks/useAdminToken';

function UserTable() {
  const [user, setUser] = useState([])

  const tableManagement = useSelector(state => state.dataManagement);

  useEffect(() => {
    setUser(() => tableManagement.data.user)

  }, [tableManagement])

  let table = []
  console.log(user);
  user?.map((data, index) => {
    let { name, stars, message, product } = data
console.log(data);
    let table_head = {
      User_Name: name,
      Product: product.name,
      Rating: stars,
      Message: message,
    }
    table.push(table_head)
    return 0
  })
  console.log(table.length);

  return (
    <div className='overflow-auto h-screen' style={{ width: "100%" }}>
      <h1 className='text-center pt-10 text-3xl'>USER REVIEW</h1>
      <Filter props={'review'}  />
      <User users={table}  nodatamsg={table.length !== 0  ? '' : <div className='flex  min-h-[600px]   justify-center items-center'><p className=' text-center '> NO DATA ARE AVAILABLE</p></div>} />
    </div>
    // 
  )
}
export default UserTable





