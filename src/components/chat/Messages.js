import React from 'react'

function Messages({ own }) {
    // let aon = false
    // let aon=true
    return (
        <div className={own ? " flex justify-end  " : 'flex '}>


            <div className='bg-bgColor m-5 rounded-2xl w-1/2 md:w-1/3 p-1'>
                <div className='flex flex-col md:flex-row w-fit pr-1 md:pt-2 md:pl-2'>
                    <div className='min-w-fit'>
                        <img className='rounded-full mt-1 w-6 h-6 md:w-10 md:h-10 ' src='https://images.unsplash.com/photo-1681052027179-5471edd589c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='user Img' />
                    </div>
                    <p className='bg-boxColor m-1 py-1 pl-2 pr-1 rounded-xl break-words md:text-lg  text-xs'>hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hh hh hhhhh hhhhh  </p>
                </div>
                <p className=' md:pl-6 md:p-2 md:text-sm  text-xs'>1hour ago</p>

            </div>
        </div>
    )
}

export default Messages