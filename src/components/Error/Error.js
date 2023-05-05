
import React from 'react'

function Error() {
  return (
    <div className=' bg-bgColor flex flex-col justify-center items-center h-screen'>
      
       <h3 className="text-4xl text-center  text-white tracking-widested">
                  OOPS!... Something Went Wrong
                </h3>
                <p className='text-center text-white pt-2'>
                  try refreshing the page or contact our support team if the
                  problem persists
                </p>
    </div>
  )
}

export default Error

