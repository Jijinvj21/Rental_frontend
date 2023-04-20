import React from 'react'
import Cycle from '../../components/User/Cycle'
import Filter from '../../components/Filter'
import { useSelector } from 'react-redux';


function Cycles() {
  const userCycleShow = useSelector(state => state.dataManagement);

const user =localStorage.getItem("user")
  return (
<>
<Cycle data={userCycleShow}/>
<Filter props={'cycle'}  userToken={user} state={"true"} />
</>
    )
}

export default Cycles








