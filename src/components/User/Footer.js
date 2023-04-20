import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-2 gap-4 bg-[#233034] mt-5'>
            <div className=' col-span-4 pt-9'>
                <div className='grid grid-cols-3 gap-4 pr-3 pl-4 '>
                    <div className='flex flex-col justify-center items-center' >
                        <svg class="h-8 mb-2 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <h1 className='text-xs md:text-lg text-center'>24X7 CUSTOMER SERVICE</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center' >
                        <h1 className='text-xs md:text-lg text-center'>THE CIRCULAR COMMERCE PLATFORM</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <svg class="h-8 mb-2 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className='text-xs md:text-lg text-center'> SECURITY PAYMENT</h1>
                    </div>
                </div>
            </div>
            <div className='col-span-4 py-6'>
                <div className='flex flex-col justify-center items-center' >
                    <svg class="h-8 mb-2 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <path d="M14.5 9a3.5 4 0 1 0 0 6" /></svg>
                    <h1 className='text-xs md:text-lg text-center'>2023 RENTAL ALL RIGHTS RESOLVED</h1>
                </div>
            </div>

        </div>
    )
}

export default Footer