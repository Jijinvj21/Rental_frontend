import React, { useEffect, useState } from 'react'
import User from '../../components/Table/Table'
import axios from '../../instance/axios';
import { ToastContainer, toast } from 'react-toastify';
import Filter from '../../components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { status } from '../../redux/features/dataManagementSlice';
import useAdminToken from '../../customeHooks/useAdminToken';








function UserTable() {
  const [user, setUser] = useState([])
  const tableManagement = useSelector(state => state.dataManagement);
  const token = localStorage.getItem('admin');
  useAdminToken()







  const dispatch = useDispatch();
  const updateStatus = () => {
    dispatch(status(true));
  }

  useEffect(() => {
    setUser(() => tableManagement.data.user)
  }, [tableManagement])

  let table = []








  user?.map((data, index) => {
    let { name, phone, status } = data

    let table_head = {
      Name: name,
      Phone: phone,
      Status: <button className='text-white bg-bgColor hover:bg-[#24292F]/90  focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 '
        onClick={() => {
          axios.post('/admin/vendorStatus_Update', data, {
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            }
          }).then((responce) => {
            toast(`${responce.data}`);

          });
          
          updateStatus()
        }}>{status ? 'Block' : 'Unblock'}</button>
    }
    table.push(table_head)

    return 0



  })



  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    toastClassName: "toast-container",
    bodyClassName: "toast-body",
    theme: 'dark'
  };

  return (
    <div className='overflow-auto h-screen' style={{  width: "100%" }}><User users={table} nodatamsg={ user? '':<div className='flex  min-h-[600px]   justify-center items-center'><p className=' text-center '> NO DATA ARE AVAILABLE</p></div>} />
      <ToastContainer {...toastConfig} />
      <Filter props={'vendor'} />

    </div>
    // 
  )
}
export default UserTable





