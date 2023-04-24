import React, { useState } from 'react'
import { Transition } from "@headlessui/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";




function Header() {
    const location = useLocation()
    const userData = localStorage.getItem('userData');
    const data = JSON.parse(userData);
    const vendorData = localStorage.getItem('vendorData');
    const vendordata = JSON.parse(vendorData);
    const [dropdown, setDropdown] = useState(false)
    const [vendordropdown, setVendorDropdown] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const handieLogout = (() => {
        localStorage.removeItem("user");
        localStorage.removeItem("userData");
        navigate("/user/login")
    })
    return (
        <div>
            <nav className="bg-HeaderFooter absolute top-0 w-full z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className=" md:mt-3 h-10 w-16"
                                    src="./img/logo.png"
                                    alt="logo"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink
                                        to="/">
                                        <h1
                                            className=" hover:bg-boxColor text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            HOME
                                        </h1>
                                    </NavLink>
                                   

                                    <NavLink
                                        to="/rentalpatner">
                                        <h1
                                            className="text-gray-300 hover:bg-boxColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            RENT YOUR CYCLES
                                        </h1>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        {location.pathname === '/rentalpatner' ? <>
                        {vendordata?.name ?
<div className='relative flex justify-center' >
    <span className='flex border-1' onClick={() => {
        isOpen && setIsOpen(false)
        setVendorDropdown(prev => !prev)
    }}>
        
        {vendordata.name.split(' ')[0]}</span>
    <div className={`${!vendordropdown && 'hidden'} absolute top-9 bg-bgColor p-5 shadow-md  rounded`}>
        <ul className='flex flex-col gap-2 text-sm'>
            <NavLink to='/vendor/product_table'>
                <li>DASHBOARD</li>
            </NavLink>
        </ul>
    </div>
</div> :
<NavLink
                            to="/vendor/login">
                            <h1
                                className="text-gray-300 hidden md:block  hover:bg-boxColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                LOGIN
                            </h1>
                        </NavLink>
}                        
                                </>
                            :
                            <div className={data?.name ? "" : '  bg-[#27363b] p-1 rounded-md'}>
                                {data?.name ?
                                    <div className='relative flex justify-center' >
                                        <span className='flex border-1' onClick={() => {
                                            isOpen && setIsOpen(false)
                                            setDropdown(prev => !prev)
                                        }}>
                                            {
                                                data?.image ? <img className='h-8 w-8 rounded-full  mr-1' src={data?.image} alt="example" /> :
                                                    <svg class="h-5 w-5 my-1 mr-1 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
                                            }
                                            {data?.name}</span>
                                        <div className={`${!dropdown && 'hidden'} absolute top-9 bg-bgColor p-5 shadow-md  rounded`}>
                                            <ul className='flex flex-col gap-2 text-sm'>
                                                <NavLink to='/profile'>
                                                    <li>PROFILE</li>
                                                </NavLink>
                                                <NavLink to='/user_order'>
                                                    <li>BOOKED</li>
                                                </NavLink>
                                                <NavLink to='/review'>
                                                    <li>REVIEWS</li>
                                                </NavLink>
                                                <li onClick={handieLogout}>LOGOUT</li>
                                            </ul>
                                        </div>
                                    </div> :
                                    <div className='flex'>
                                        <NavLink
                                            to="/user/login">
                                            <h1
                                                className="text-gray-300 hidden md:block  hover:bg-boxColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                LOGIN
                                            </h1>
                                        </NavLink>
                                        <h1
                                            className="text-gray-300 hidden md:block  px-1  py-2 rounded-md text-sm font-medium"
                                        >
                                            /
                                        </h1>
                                        <NavLink
                                            to="/User/signUp">
                                            <h1
                                                className="text-gray-300 hidden md:block  hover:bg-boxColor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                SIGNUP
                                            </h1>
                                        </NavLink>
                                    </div>}
                            </div>}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => {
                                    dropdown && setDropdown(false)
                                    vendordropdown && setVendorDropdown(false)
                                    setIsOpen(!isOpen)
                                }}
                                type="button"
                                className="bg-bgColor inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-bgColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bgColor focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                <NavLink
                                    to="/">
                                    <h1
                                        className="hover:bg-bg-boxColor text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        HOME
                                    </h1>
                                </NavLink>
                                <NavLink
                                    to="/cycle">
                                    <h1
                                        className="text-gray-300 hover:bg-bg-boxColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        CYCLES ON RENT
                                    </h1>
                                </NavLink>

                                <NavLink
                                    to="/rentalpatner">
                                    <h1
                                        className="text-gray-300 hover:bg-bg-boxColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        RENT YOUR CYCLES
                                    </h1>
                                </NavLink>
                                {location.pathname === '/rentalpatner' ? <>
                                    <NavLink
                                        to="/vendor/login">
                                        <h1
                                            className="text-gray-300 hover:bg-bg-boxColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            LOGIN
                                        </h1>
                                    </NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink
                                            to="/user/login">
                                            <h1
                                                className="text-gray-300 hover:bg-bg-boxColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                LOGIN
                                            </h1>
                                        </NavLink>
                                        <NavLink
                                            to="/User/signUp">
                                            <h1
                                                className="text-gray-300 hover:bg-bg-boxColor hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                SIGNUP
                                            </h1>
                                        </NavLink>
                                    </>}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}

export default Header



