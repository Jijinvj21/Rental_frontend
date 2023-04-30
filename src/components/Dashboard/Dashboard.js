import React from 'react'
import Chart from './PieChart'

function Dashboard(props) {
    console.log(props.data?.data?.data);
    return (
        <div className='w-full  pt-20 overflow-auto  h-[1000] md:h-[900px] '>
            <div className='grid md:grid-cols-3 w-3/4  mx-auto '>
                <div className='w-full p-5  '>
                    <div className='bg-boxColor w-full h-20 rounded-md flex flex-col  justify-center items-center p-1'>
                        <h1 className='text-sm md:text-xl text-center'>TOTAL NUMBER OF USERS</h1>
                        <h1 className='text-sm md:text-xl text-center'>{props?.data?.data?.data?.cycleCount}</h1>
                    </div>
                </div>
                <div className='w-full p-5'>
                    <div className='bg-boxColor w-full h-20 rounded-md flex flex-col justify-center items-center p-1'>
                        <h1 className='text-sm md:text-xl  text-center'>TOTAL REVENUE</h1>
                        <h1 className='text-sm md:text-xl text-center'>${props?.data?.data?.data?.totalRevinew}</h1>

                    </div>
                </div>
                <div className='w-full p-5'>
                    <div className='bg-boxColor w-full h-20 rounded-md flex flex-col justify-center items-center p-1'>
                        <h1 className='text-sm md:text-xl text-center'>TOTAL NUMBER OF CYCLES</h1>
                        <h1 className='text-sm md:text-xl text-center'>{props?.data?.data?.data?.userCount}</h1>

                    </div>
                </div>
            </div>
            <div className='w-full p-5 ' >
                <h1 className='text-md md:text-xl text-center'>BOOKING STATUS</h1>
                <div className='mt-5 p-2 flex justify-center'>
                    <div className='bg-boxColor w-4/5 md:w-1/2   rounded-md  py-5 px-3  '>
                        <Chart data={props?.data?.data}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard