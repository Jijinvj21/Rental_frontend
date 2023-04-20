import React from 'react'
import { Link } from 'react-router-dom'

function RentalPatner() {
    return (
        <div>
            <div className='h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1680751681/project2/cy2_vucmpk.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
                <h1 className='text-3xl text-center md:text-5xl md:p-3 p-5'>BECOME OUR PARTNER</h1>
                <h1 className='text-2xl text-center md:text-3xl md:p-3 p-5'>EARN REGULAR EARNING WITH YOUR CYCLE</h1>
                <h1 className='text-1xl text-center md:text-2xl md:p-3 p-5'>RENTAL let you ern throught bookings from customers all over india</h1>
                <h1 className='text-1xl text-center md:text-2xl md:p-3 p-5'>  who rent your cycle on basis</h1>
                {

                localStorage.getItem('vendor')?
                <h1 className='bg-bgColor p-2 text-xs  md:p-3 rounded-full tracking-widest md:tracking-widested  m-2 md:m-3'>REGISTER YOUR CYCLE NOW</h1> 
                :
                <Link
                    to="/vendor/signup">

                    <button className='bg-bgColor p-2 text-xs  md:p-3 rounded-full tracking-widest md:tracking-widested  m-2 md:m-3'>REGISTER YOUR CYCLE NOW</button>
                </Link>
                
              
}
            </div>
            <div className='bg-boxColor grid md:grid-cols-2 '>
                <div className='flex justify-center items-center p-3 ' >
                    <img
                        src="https://res.cloudinary.com/dczou8g32/image/upload/v1680755558/project2/pngwing.com_4_sd4g5o.png"
                        alt="new"
                        className=' w-full md:w-3/5 hidden md:block pt-20  '
                    />
                </div  >
                <div className='flex flex-col justify-center items-center p-3'>
                    <h1 className='text-2xl text-center md:text-3xl  md:tracking-widest  ' >Why Rentle exists?</h1>
                    <h1 className='text-xs text-center md:text-xl py-5 ' >The world is drowning in stuff. A fact most consumers are aware of. This is reflected on the changing consumption habits, as consumers are more and more interested to buy access, experiences and convenience, rather than ownership. At Rentle, our mission is to drive the sustainable consumption of durable goods. As a Rentle partner, you can be part of this movement and accelerate it, while growing your business.</h1>
                </div>
                <div className='flex justify-center items-center p-3 md:hidden ' >
                    <img
                        src="https://res.cloudinary.com/dczou8g32/image/upload/v1680755558/project2/pngwing.com_4_sd4g5o.png"
                        alt="new"
                        className=' w-full md:w-3/5 '
                    />
                </div  >
            </div>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='p-8 text-2xl'>HOW DOES IT WORK ?</h1>
                <div className='grid md:grid-cols-3 '>
                    <div className='flex flex-col  items-center p-5 border-2 m-5  rounded-3xl '>
                        <h1 className='p-2 md:py-5'>STEP 1</h1>
                        <svg class="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"></path>  <circle cx="5" cy="18" r="3"></circle>  <circle cx="19" cy="18" r="3"></circle>  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11"></polyline>  <circle cx="17" cy="5" r="1"></circle></svg>
                        <h1 className='text-center p-1 md:py-5'>REGISTER YOUR CYCLE </h1>
                        <h1 className='text-center p-2 md:py-5'>Photos & details of your cycles
                            will be listed on our website</h1>
                    </div>
                    <div className='flex flex-col  items-center p-5 border-2 m-5 rounded-3xl'>
                        <h1 className='p-2 md:py-5'>STEP 2</h1>
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <h1 className='text-center p-1 md:py-5'>YOUR CYCLE GET BOOKED </h1>
                        <h1 className='text-center p-2 md:py-5'>Customer books your cycle for
                            their need</h1>
                    </div>
                    <div className='flex flex-col  items-center p-5 border-2 m-5 rounded-3xl'>
                        <h1 className='p-2 md:py-5'>STEP 3</h1>
                        <svg class="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />  <path d="M12 3v3m0 12v3" /></svg>
                        <h1 className='text-center p-1 md:py-5' >RECIEVE PAYMENT</h1>
                        <h1 className='text-center p-2 md:py-5'>Monthly rent of the cycle is transferred
                            directly into your bank account</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalPatner