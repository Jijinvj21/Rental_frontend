import React from 'react'

function Conversation(props) {
  console.log(props.close);
  return (
    <div>
      {
        <div onClick={()=>props?.close(props?.userList?.member?._id,false)} className='flex  bg-bgColor p-3 rounded-2xl w-7/8 m-5 hover:opacity-70' >
          <img className='rounded-full w-8 h-8 md:w-14 md:h-14 ' src={props?.userList?.member?.image} alt='user Img' />
          <span className='p-1  md:p-4'>{props?.userList?.member?.name}</span>
        </div>
      }
    </div>
  )
}

export default Conversation