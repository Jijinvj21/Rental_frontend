import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { to,from } from '../../redux/features/userDateSlice';
import { toast } from 'react-toastify';



function Home() {
  const dispatch = useDispatch();
  const today = new Date();
  const [formDate, setFromDate] = useState(today.toISOString().substr(0, 10)); // Set today's date as default value
  const [toDate, setToDate] = useState(today.toISOString().substr(0, 10)); // Set today's date as default value
  const fromValue = useSelector((state) => state.userDataSlice.from);
  const toValue = useSelector((state) => state.userDataSlice.to);
  function handleFromDateChange(event) {
    const today = new Date();
    if (new Date(event.target.value)  < today  ) {
        toast('FROM date must be greater than or equal to TODAYS  date');
    } else {
      if( new Date(event.target.value)>new Date(toValue)){
        setToDate (event.target.value)
        toast('FROM date must be lesser than or equal to TO  date');

      }
      setFromDate(event.target.value);
    }
  }
  function handleToDateChange(event) {

    if (new Date(formDate) <= new Date(event.target.value ) ) {
      setToDate(event.target.value);
  } else {
    setToDate (formDate) 
      toast('To value must be greater than or equal to From value');
      
  }
  }
  try {
    dispatch(to(toDate));
  dispatch(from(formDate));
const date={
  from:formDate,
  to:toDate
}
const jsonString =  JSON.stringify(date);
  localStorage.setItem('userDate',jsonString)


} catch (error) {
  toast(`${error.message}`);
    dispatch(to(formDate));
}

  return (
    <div className='h-full container-fluid  '>
      <div className='h-screen flex flex-col justify-center items-center ' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1678511871/project2/hom_bmrsnd.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className='bg-boxColor  w-11/12 md:w-4/5 lg:w-2/3  rounded-full h-14 md:h-24 opacity-70 drop-shadow-2xl'>
          <h1 className='opacity-100 mt-3 md:mt-7 lg:mt-6 text-center text-3xl md:text-5xl lg:text-6xl'>BOOK YOUR RIDE NOW</h1>
        </div>
        <div className='bg-boxColor  w-8/12  md:w-1/2 lg:w-1/4 rounded-full h-9 md:h-14 opacity-70 mt-12 md:mt-24 drop-shadow-2xl'>
          <h1 className='opacity-100 text-lg md:text-2xl mt-1.5 md:mt-3 text-center '>ROUND TRIP</h1>
        </div>
        <div className="flex flex-row w-4/6  md:w-1/2 lg:w-1/4 drop-shadow-2xl  ">
          <input onChange={handleFromDateChange} type="date" value={fromValue} className='bg-boxColor w-full text-sm md:text-xl opacity-70  rounded-l-full mt-2.5   md:mt-5 pt-1.5 md:p-3 pl-3 md:pl-9 focus:outline-none'
          />
          <input onChange={handleToDateChange} type="date" value={toValue} className='bg-boxColor w-full text-sm md:text-xl  opacity-70  rounded-r-full mt-2.5  md:mt-5 pt-1.5 md:p-3 pr-3 md:pr-9 focus:outline-none' />
        </div>
        <div className='bg-boxColor w-8/12 md:w-1/2 lg:w-1/4 h-9 md:h-14 text-center  rounded-full  mt-2.5 md:mt-5 drop-shadow-2xl'>
          <NavLink to='/cycle'>
            <button className='opacity-100 mt-1.5 md:mt-3   text-lg md:text-2xl'>FIND YOUR CYCLE</button>
          </NavLink>
        </div>
      </div>
      <h1 className='text-center my-12 md:my-24 text-2xl md:text-4xl'>WE HAVE A WIDE RANGE OF CYCLE</h1>
      <div className="flex items-center justify-center p-5 ">
        <div className="grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className=" bg-boxColor rounded-2xl  group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="pt-14 w-96  ">
              <img className="   object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://res.cloudinary.com/dczou8g32/image/upload/v1678528034/project2/pngwing.com_3_z3mnie.png" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">PREMIUM</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 max-h-[150px] transition-opacity duration-300 group-hover:opacity-100">Cycling is more than just a sport. It's a way of life. It's a journey that takes you to new places</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className=" bg-boxColor rounded-2xl  group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="pt-14 w-96">
              <img className="h-full  w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://res.cloudinary.com/dczou8g32/image/upload/v1678528023/project2/pngwing.com_enlxsl.png" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">GEAR</h1>
              <p className="mb-3 text-lg italic text-white max-h-[150px]  opacity-0 transition-opacity duration-300 group-hover:opacity-100">bicycle with gear provides a variety of gear ratios to choose from. This gear ratio makes cycling easy</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className=" bg-boxColor rounded-2xl   group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="pt-14 w-96">
              <img className="h-full  w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://res.cloudinary.com/dczou8g32/image/upload/v1678528022/project2/pngwing.com_2_buetue.png" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">ELECTRIC</h1>
              <p className="mb-3 text-lg italic text-white max-h-[150px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">An electric bicycle  is a motorized bicycle with an integrated electric motor used to assist propulsion</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className=" bg-boxColor rounded-2xl  group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="pt-14 w-96">
              <img className="h-full  w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://res.cloudinary.com/dczou8g32/image/upload/v1678528510/project2/cu_q0h8vj.png" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">NON GEAR</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 max-h-[150px] transition-opacity duration-300 group-hover:opacity-100">The speed that you can reach on such bikes depends completely on how fast or slow you pedal</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' h-3/6 md:h-[300px]  lg:h-[500px] mt-20    flex flex-col justify-center items-center ' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1678605023/project2/opacity_ndaiel.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <h1 className='text-center mt-5 md:mt-10 lg:-mt-32   lg:text-4xl'>WHY CHOOSE RENTAL</h1>
        <div className=' col-span-4 pt-9'>
          <div className='grid grid-cols-3 gap-4 pr-3 pl-3 mb-10 '>
            <div className='flex flex-col  items-center' >
              <svg className="h-8 mb-2 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className='mb-1 text-sm  md:text-lg lg:text-xl text-center'>Quality Assured Cycles on Rent</h1>
              <h1 className='text-xs  md:text-md lg:text-lg text-center'>Our cycles are sent to the workshop before each delivery. We religiously follow a no-quality-compromise policy.</h1>
            </div>
            <div className='flex flex-col  items-center' >
              <svg className="h-8 mb-2 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>
              <h1 className='mb-1 text-sm  md:text-lg lg:text-xl text-center'>24x7 Availability</h1>
              <h1 className='text-xs  md:text-md lg:text-lg text-center'>We like being on our toes! Our proactive service & 24x7 assistance makes sure you have the bestexperience with us.</h1>
            </div>
            <div className='flex flex-col  items-center ' >
              <svg className="h-8 mb-2 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />  <polyline points="12 8 7 3 3 7 8 12" />  <line x1="7" y1="8" x2="5.5" y2="9.5" />  <polyline points="16 12 21 17 17 21 12 16" />  <line x1="16" y1="17" x2="14.5" y2="18.5" /></svg>
              <h1 className='mb-1 text-sm  md:text-lg lg:text-xl text-center'>Maintenance on Demand</h1>
              <h1 className='text-xs  md:text-md lg:text-lg text-center'>With Rental Cycles, your worry of maintaining it is out of the picture. We take care of it on your behalf.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home




















