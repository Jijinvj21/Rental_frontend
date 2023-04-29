import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { page } from '../../redux/features/dataManagementSlice';


function Pagination() {
  const dispatch = useDispatch();
  const [counter,setCounter]=useState(1)
  const i = useSelector((state) => state.dataManagement);
  let last = i?.data?.page*i.limit
  if (last > i?.data?.total )
  {
    last =i?.data?.total
  }
  
  let first =last-(i?.limit-1)
  if(first<0){
    first = 1
  }
  if(i?.data?.total ===0){
    first = 0
  }
  const totalPage= parseInt( Math.ceil(i.data?.total/i.data?.limit))
let pre
let next
  counter !==totalPage && counter !==0 && i.data?.total ?next="inline-flex items-center px-4 py-2 text-sm font-medium  bg-boxColor rounded-l hover:bg-boxColor dark:bg-boxColor dark:border-boxColor  dark:hover:bg-[#315a5a] ":next='hidden'
  counter > 1 && first!==0 ?pre="inline-flex items-center px-4 py-2 text-sm font-medium  bg-boxColor rounded-l hover:bg-boxColor dark:bg-boxColor dark:border-boxColor  dark:hover:bg-[#315a5a] ":pre='hidden'
const handleprevious=()=>{
  setCounter(counter-1)
  dispatch(page(counter-1));
}
const handlenext=()=>{
  setCounter(counter+1)
  dispatch(page(counter+1));
}
  return (
    <div className="flex flex-col items-center">
  <span className="text-sm ">
    Showing <span className="font-semibold "></span> to <span className="font-semibold ">{first}</span> of <span className="font-semibold ">{last}</span> Entries {i?.data?.total}</span>
  <div className="inline-flex mt-2 xs:mt-0">
    <button          onClick={handleprevious} className= {pre} >
      <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
      Prev
    </button>
    <button onClick={handlenext} className={next}>
      Next
      <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </div>
</div>
  )
}

export default Pagination





