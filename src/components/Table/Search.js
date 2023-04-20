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
<div class="flex flex-row  w-full  md:w-full lg:w-full drop-shadow-2xl    ">
          <input  onChange={(e)=>setSearchVal(e.target.value)}         placeholder={props.placeholder?`${props.placeholder}`:'search'}
 type="text"  className='bg-boxColor w-full text-sm md:text-xl opacity-70  rounded-l-full mt-2.5   md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none'
          />
          <button onClick={handleSearch}  placeholder='find' className='bg-boxColor w-18 text-sm md:text-xl  opacity-70 flex justify-center  rounded-r-full mt-2.5 pb-1  md:mt-5 pt-2 md:p-3 pr-3 md:pr-9 focus:outline-none' ><svg class="h-6 w-6  text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
        </div>
      {/* <input
        className={props.style?`${props.style}shadow-lg m-5 px-3    focus:outline-none bg-boxColor rounded-full `:'bg-boxColor rounded-full h-10 w-1/2 shadow-lg m-5 pl-6 focus:outline-none'}
        placeholder={props.placeholder?`${props.placeholder}`:'search'}
        type='text'
        name='search'
      />
      <button >submit</button> */}
    </div>
  );
}

export default Search;
