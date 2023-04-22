import React from 'react'
import { limit } from '../../redux/features/dataManagementSlice';
import { page } from '../../redux/features/dataManagementSlice';

import { useDispatch,useSelector } from 'react-redux';

function Limit(props) {


    const i = useSelector((state) => state.dataManagement.limit);
    const dispatch = useDispatch();
  const handleLimitSelect = (event) => {
    dispatch(limit(event.target.value));
    dispatch(page(1));
  };
  return (
    <div className='p-5 '>
    <select value={i} className={props.color?`bg-${props.color} opacity-70 peer-focus:outline-none  p-1 md:p-3 m-1 rounded-lg`:'bg-boxColor peer-focus:outline-none  opacity-70 p-1 md:p-3 m-1 rounded-lg '} onChange={handleLimitSelect}>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
</select>
    </div>
  )
}

export default Limit