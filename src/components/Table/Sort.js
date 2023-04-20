import React from 'react'
import { sort } from '../../redux/features/dataManagementSlice';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../../redux/features/dataManagementSlice';
import { page } from '../../redux/features/dataManagementSlice';

function Sort(props) {
  const tData = useSelector((state) => state.dataManagement.order);
  const dispatch = useDispatch();
  const handleSortSelect = () => {
    if (tData === 'asc') {
      dispatch(order('desc'));
      dispatch(page(1));
    } else {
      dispatch(order('asc'));
      dispatch(page(1));
    }
    dispatch(sort(props.props.toLowerCase()));
  };
  return (
    <div>
      <button onClick={handleSortSelect}><svg class="h-5 w-5 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 9l4-4l4 4m-4 -4v14" />  <path d="M21 15l-4 4l-4-4m4 4v-14" /></svg></button>
    </div>
  )
}

export default Sort