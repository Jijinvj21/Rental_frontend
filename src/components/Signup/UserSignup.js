import React, { useEffect, useState } from 'react'
import axios from '../../instance/axios'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validationSchema} from '../../validation/validation';
import UseUserToken from '../../customeHooks/useUserToken';
import UseVendorToken from '../../customeHooks/useVendorToken';




function UserSIgnup(props) {
    const location =useLocation()
console.log(typeof(location.pathname));
    if(location.pathname === "/User/signUp"){
      
        UseUserToken()
    }
    if(location.pathname === "/Vendor/signup"){
       UseVendorToken()
    }

 
    const [user, setUser] = useState({
        name: null,
        mobile: null
    })
    const type = props.type
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            validationSchema.validate(user).then(async () => {
                await axios.post('/signup', {
                    user, type
                }).then(() => {
                    navigate(`/${props.type}/Signup/Otp/Verify`, { state: user })
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
            <div className='flex justify-center items-center h-screen  '>
                <div className='bg-boxColor w-10/12 md:w-3/5   h-[600px] rounded-3xl   shadow-lg grid md:grid-cols-2'>
                    <div className='bg-green-200   hidden md:block rounded-l-3xl' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1678454079/project2/sign_xvfi9n.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}></div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='mt-10 md:rounded-l-none rounded-3xl  w-full flex flex-col items-center ' >
                            <h1 className=' mt-5 text-3xl sm:text-4xl '>SIGNUP</h1>
                            <input className='bg-bgColor rounded-full h-11 w-3/4 shadow-lg mt-12 pt-1 pl-6 focus:outline-none'
                                placeholder='NAME'
                                name='name'
                                
                                onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}

                            />
                            <input className='bg-bgColor  rounded-full h-11 w-3/4 shadow-lg mt-12 pt-1 pl-6 focus:outline-none'
                                placeholder='PHONE'
                                name='mobile'
                                onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                            />
                            <button className='bg-bgColor rounded-full  w-3/5 shadow-lg mt-12 text-center pt-3 pb-2  focus:outline-none'>GENERATE OTP</button>

                            <Link to={`/${props.type}/login`}>
                                <h6 className='text-base text-center mt-10'>ALREDY HAVE AN ACCOUNT </h6>
                                <h6 className='text-base text-center mt-2 '>lOGIN </h6>
                            </Link>

                        </div>
                        <Link to='/'>
                                <h1 className='text-lg text-center mt-5'> BACK TO HOME </h1>
                              </Link>
                    </form>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default UserSIgnup