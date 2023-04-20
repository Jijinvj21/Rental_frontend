import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from '../../instance/axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { token } from '../../redux/features/adminAuthSlice'
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import UseAdminToken from '../../customeHooks/useAdminToken';



function AdminSignup() {
    const location =useLocation()
    if(location.pathname === "/admin/login"){
        UseAdminToken()
    }
    const [admin, setAdmin] = useState({
        email: null,
        password: null
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/admin/adminLogin', {
                admin
            }).then((data) => {
                navigate('/admin/user')
                localStorage.setItem('admin', data.data.token)
                dispatch(token(data.data.token));
                
            })
        } catch (error) {
            toast(`${error.response.data}`);
        }
       
    }
    return (
        <div className=' container-fluid  '>
            <div className='flex justify-center items-center h-screen  '>
                <div className='bg-boxColor w-10/12 md:w-3/5   h-[600px] rounded-3xl   shadow-lg grid md:grid-cols-2'>
                    <div className='bg-green-200   hidden md:block rounded-l-3xl' style={{ backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1678510444/project2/otp_d4dg2c.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}></div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='mt-10 md:rounded-l-none rounded-3xl  w-full flex flex-col items-center ' >
                            <h1 className=' mt-5 text-3xl sm:text-4xl text-center '>ADMIN LOGIN</h1>
                            <input className='bg-bgColor rounded-full h-11 w-3/4 shadow-lg mt-12 pt-1 pl-6 focus:outline-none'
                                placeholder='EMAIL'
                                name='email'
                                type='email'
                                onChange={(e) => { setAdmin({ ...admin, [e.target.name]: e.target.value }) }}
                            />
                            <input className='bg-bgColor  rounded-full h-11 w-3/4 shadow-lg mt-12 pt-1 pl-6 focus:outline-none'
                                placeholder='PASSWORD'
                                name='password'
                                type='password'
                                onChange={(e) => { setAdmin({ ...admin, [e.target.name]: e.target.value }) }}
                            />
                            <button className='bg-bgColor rounded-full  w-3/5 shadow-lg mt-12 text-center pt-3 pb-2  focus:outline-none'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminSignup