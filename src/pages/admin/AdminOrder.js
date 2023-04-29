import React, { useEffect, useState } from 'react'
import User from '../../components/Table/Table'
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter'
import Modal from '../../components/Table/Modal';

function Order() {
  const [user, setUser] = useState([])

  const tableManagement = useSelector(state => state.dataManagement);

  useEffect(() => {
    setUser(() => tableManagement.data.user)


  }, [tableManagement])
  function accessoriesButton() {

    return (
      <button className='text-white mx-auto bg-bgColor hover:bg-[#24292F]/90  focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2  ' >
        Accessories
      </button>
    )
  }



  function accessoriesModal(accessories) {

    return (
      < div className='flex flex-col  gap-4 py-5 '>
        <div className='grid grid-cols-2 '>
          {accessories?.map((data) => {
            return (
              <>
                <img
                  src={data.image}
                  alt="new"
                  className='w-3/4 m-5  rounded-2xl'
                />
                <div className='text-left m-5 flex-row '>
                  <h1 className='mt-1' >Name:{data.name}</h1>
                  <h1 className='mt-1' >Size:{data.size}</h1>
                  <h1 className='mt-1'>RentPrice:{data.price}</h1>

                </div>
              </>
            )
          })}
        </div>
      </div>
    )
  }



  let table = []
  user?.map((data, index) => {
    let { cycle, user, accessories, amount, bookedFromDate, bookedToDate, } = data
    const date = new Date(bookedFromDate);
    const formattedBookedFromDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    const date2 = new Date(bookedToDate);
    const formattedBookedToDate = date2.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });


    let table_head = {
      Cycle_Image: <div className='flex justify-center'><img src={cycle?.image} alt="BigCo Inc. logo" className='w-14   ' /></div>,
      Cycle_Name: cycle?.name,
      User_Name: user?.name,
      Amount: amount,
      From_Date: formattedBookedFromDate,
      To_Date: formattedBookedToDate,
      Accessories: <Modal modal={accessoriesModal(accessories)} button={accessoriesButton()} />,


    }
    table.push(table_head)
    return 0
  })

  return (
    <div className='overflow-auto h-screen  w-screen ' >
      <Filter props={'booking'} />
      <User users={table} />

    </div>
    // 
  )
}
export default Order





