import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/features/dataManagementSlice';
import { page } from '../../redux/features/dataManagementSlice';

function Search(props) {
  const [searchVal,setSearchVal]=useState('')
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(search(searchVal));
    dispatch(page(1));
  };

  return (
    <div className='w-full'>
<div className="flex flex-row  w-full  md:w-full lg:w-full drop-shadow-2xl    ">
          <input  onChange={(e)=>setSearchVal(e.target.value)}         placeholder={props.placeholder?`${props.placeholder}`:'search'}
 type="text"  className={props.color?`bg-${props.color}  w-full text-sm md:text-xl opacity-70  rounded-l-full mt-2.5   md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none`:' bg-boxColor w-full text-sm md:text-xl opacity-70  rounded-l-full mt-2.5   md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none'}
          />
          <button onClick={handleSearch}  placeholder='find' className={props.color?`bg-${props.color}  w-18 text-sm md:text-xl  opacity-70 flex justify-center  rounded-r-full mt-2.5 pb-1  md:mt-5 pt-2 md:p-3 pr-3 md:pr-9 focus:outline-none`: 'bg-boxColor w-18 text-sm md:text-xl  opacity-70 flex justify-center  rounded-r-full mt-2.5 pb-1  md:mt-5 pt-2 md:p-3 pr-3 md:pr-9 focus:outline-none' }><svg className="h-6 w-6  text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
        </div>
      
    </div>
  );
}

export default Search;
