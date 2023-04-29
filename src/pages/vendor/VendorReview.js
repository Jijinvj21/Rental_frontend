import React, { useEffect, useState } from 'react'
import User from '../../components/Table/Table'
import { useSelector, } from 'react-redux';
import Filter from '../../components/Filter'
import useAdminToken from '../../customeHooks/useAdminToken';

function UserTable() {
  const [user, setUser] = useState([])
  useAdminToken()

  const tableManagement = useSelector(state => state.dataManagement);

  useEffect(() => {
    setUser(() => tableManagement.data.user)

  }, [tableManagement])

  let table = []
  console.log(user);
  user?.map((data, index) => {
    let { name, stars, message, vendor } = data

    let table_head = {
      User_Name: name,
      Product: vendor[0]?.name,
      Rating: stars,
      Message: message,
    }
    table.push(table_head)
    return 0
  })
  return (
    <div className='overflow-auto h-screen' style={{ width: "100%" }}>
      <Filter props={'review'} />
      <User users={table} nodatamsg={user ? '' : <div className='flex  min-h-[600px]   justify-center items-center'><p className=' text-center '> NO DATA ARE AVAILABLE</p></div>} />
    </div>
    // 
  )
}
export default UserTable




