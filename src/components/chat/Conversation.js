import React from 'react'

function Conversation({ userList,close }) {
  return (
    <div>
      {
        <div onClick={()=>close(userList?._id,false)} className='flex  bg-bgColor p-3 rounded-2xl w-7/8 m-5 hover:opacity-70' >
          <img className='rounded-full w-8 h-8 md:w-14 md:h-14 ' src={userList?.image} alt='user Img' />
          <span className='p-1  md:p-4'>{userList?.name}</span>
        </div>
      }
    </div>
  )
}

export default Conversation