import axios from '../../instance/axios'
import React, { useEffect, useState } from 'react';
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from 'react-router-dom';
import './otp.css'
import {  toast } from 'react-toastify';
import { otpValidationSchema } from '../../validation/validation';
import { token  } from '../../redux/features/vendorAuthSlice'
import {  token as userToken } from '../../redux/features/userAuthSlice'
import {  userData } from '../../redux/features/userAuthSlice'
import { useDispatch } from 'react-redux';

function OtpVerify() {
  const navigate = useNavigate()
  const location =useLocation()
useEffect(()=>{
 console.log(location.pathname);
 if(localStorage.getItem('user')){
   if(location.pathname ==='/User/Login/Otp/Verify'  || location.pathname ===   '/User/Signup/Otp/Verify'){
     console.log(2010);
    navigate('/');
   }
 }
 if(localStorage.getItem('vendor')){
  if( location.pathname === '/Vendor/Login/Otp/Verify' || location.pathname ===  'Vendor/Signup/Otp/Verify' ){
    navigate('/rentalpatner');
   }
 }
},[])

  
  const user = location
  const [OTP, setOTP] = useState("");
  const [state, setState] = useState(true)
  const dispatch = useDispatch()
  function handleChange(OTP) {
    setOTP(OTP);
  }
  const handleOtp = async (e) => {
    e.preventDefault()
    try {
      otpValidationSchema.validate({ otp: OTP })
        .then(async () => {

          setState(false)
          await axios.post('/VerifyOtp', {
            OTP, user
          }).then((data) => {
            setState(true)
            if (data.data.data === "vendor/signup") {
              navigate("/vendor/login")
            } else if (data.data.data === "user/signup") {
              navigate("/user/signup")
            } else if (data.data.data.from === "vendor/login") {
              const jsonString =  JSON.stringify(data.data.data.vendorData);
              localStorage.setItem('vendorData', jsonString)
              localStorage.setItem('vendor', data.data.data.token)
              dispatch(token(data.data.data.token));
              navigate("/vendor/dashboard")
            } else if (data.data.data.from === "user/login") {
              const jsonString =  JSON.stringify(data.data.data.userData);
              localStorage.setItem('userData', jsonString)
              localStorage.setItem('user', data.data.data.token)
              dispatch(userToken(data.data.data.token));
              dispatch(userData(data.data.data.userData));
              navigate("/")
            }
          }).catch((err) => {
            setState(true)
            toast(`${err.response.data.data}`);
          })
        })
        .catch(error => {
          toast(`${'Invalid OTP:', error.message}`);
        });
    } catch (err) {
    }
  }
  return (
    <div className='container-fluid'>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-boxColor w-10/12 md:w-3/5 h-[600px] rounded-3xl shadow-lg grid md:grid-cols-2'>
          <div className='bg-green-200 hidden md:block rounded-l-3xl' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1678510874/project2/josh-nuttall-pIwu5XNvXpk-unsplash_copy_ia5swd.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
          <form method='post' onSubmit={handleOtp}>
            <div className=' flex flex-col  items-center'>
              <h1 className='mt-20 text-3xl sm:text-4xl text-center'>VERIFY ACCOUNT</h1>
              <h1 className='mt-7 sm:text-xl text-center'>An OTP has been sent to your entered phone number</h1>
              <h1 className='mt-9  sm:text-2xl text-center'>Enter your Code here</h1>
              <div className="  min- mt-12 ml-6 flex flex-row justify-center items-center text-txtColor">
                <OTPInput
                  className='text-txtColor  '
                  required
                  onChange={handleChange}
                  value={OTP}
                  inputStyle="inputStyle"
                  numInputs={6}
                />
              </div>
              {state ?
                <button className="text-white      rounded-full  shadow-lg   mt-12      bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 dark:bg-bgColor dark:hover:bg-[#30444a] dark:focus:ring-bgColor inline-flex items-center">VERIFY</button> :
                <button disabled type="button" className="text-white      rounded-full  shadow-lg    mt-12     bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 dark:bg-bgColor  dark:focus:ring-bgColor inline-flex items-center">
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                  Verifying...
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OtpVerify;
