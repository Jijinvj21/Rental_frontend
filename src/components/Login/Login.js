import React, { useEffect, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import axios from '../../instance/axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './otp.css'
import {loginvalidationSchema} from '../../validation/validation';
import UseUserToken from '../../customeHooks/useUserToken';

import { useLocation } from "react-router-dom";
import UseVendorToken from '../../customeHooks/useVendorToken';




function Login(props) {
const location =useLocation()
console.log(location.pathname);
    if(location.pathname === "/User/login"  ||  location.pathname === "/User/signUp"){
        alert(454)
        UseUserToken()
    }
    if(location.pathname === "/vendor/login"){
       UseVendorToken()
    }

  const type=  props.type
    const navigate = useNavigate()
    const [mobile, setMobile] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            loginvalidationSchema.validate({mobile:mobile}).then(async () => {
                await axios.post('/login', {
                    mobile,type
                 }).then(()=>{
                   navigate(`/${props.type}/Login/Otp/Verify`,{state:{mobile:mobile}})
                 }).catch((err)=>{
                    toast(`${err.response.data.data}`);
                 })
            }).catch((ValidationError => {
                toast(`${ValidationError.message}`);
            }))
        } catch (err) {
            console.log(err)
        }
    }





    
    return (
        <div className=' container-fluid  '>
            <div className='flex flex-col justify-center items-center h-screen  '>
                <div className='bg-boxColor w-10/12 md:w-3/5   h-[600px] rounded-3xl   shadow-lg grid md:grid-cols-2'>
                    <div className='bg-green-200   hidden md:block rounded-l-3xl' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1678511254/project2/ljc_k8qbgk.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}></div>
                    <form method='post' onSubmit={handleLogin}>
                        <div className='mt-10 md:rounded-l-none rounded-3xl  w-full flex flex-col items-center justify-between  ' >
                            <h1 className=' mt-5 text-3xl sm:text-4xl '>LOGIN</h1>
                            <input
                                className='bg-bgColor  rounded-full h-11 w-3/4 shadow-lg mt-12 pt-1 pl-6 focus:outline-none'
                                placeholder='PHONE'
                                type='tel'
                                name='mobile'
                                onChange={(e) => { setMobile(e.target.value)  }}
                            />
                            <button
                                type="submit"
                                className='bg-bgColor rounded-full  w-3/5 shadow-lg mt-12 text-center pt-3 pb-2  focus:outline-none'
                            >GENERATE OTP</button>
                              <Link to={`/${props.type}/signup`}>
                                <h6 className='text-lg text-center mt-12'>CREATE   AN    ACCOUNT   </h6>
                                <h1 className='text-lg text-center '> SIGNUP</h1>
                              </Link>
                        </div>
                        <Link to='/'>
                                <h1 className='text-lg text-center mt-5'> BACK TO HOME </h1>
                              </Link>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}



export default Login