import React, { useState } from 'react'
import UseUserToken from '../../customeHooks/useUserToken'
import { imageValidationSchema , profileNameSchema } from '../../validation/validation';
import axios from '../../instance/axios';
import {  toast } from 'react-toastify';



function Profile() {
    const [upload, setUplod] = useState(true)
    const userData = localStorage.getItem('userData');
    const data = JSON.parse(userData);
    UseUserToken()
   
    const [user, setUser] = useState(data?.name)
    const [image, setImage] = useState(data?.image)
    const [preview,setPreview] =useState()
const userProfile ={
    name:user,
    image:image
}
const token = localStorage.getItem('user');
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const urlPattern = /^https?:\/\/\S+$/;
if(urlPattern.test(image)){
    setUplod(false)
    console.log(user);
    profileNameSchema.validate({ name: user })
    .then(async () => { 
   await axios.post('/profileUpdate', userProfile, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    }).then((data) => {
        toast.success(`${data.data.message}`);
        const jsonString =  JSON.stringify(data.data.userData[0]);
        localStorage.setItem('userData', jsonString)
        //set data in to local storage
        setUplod(true)
    }).catch((error)=>{
        toast(`${error.response.data.message}`);
        
        setUplod(true)
    })

    }).catch((err) => { 
        toast(`${err}`);
    })

 
    
}else{
    imageValidationSchema.validate({ image: image })
    .then(async () => {
        profileNameSchema.validate({ name: user })
        .then(async () => { 


            setUplod(false)

                await axios.post('/profileUpdate', userProfile, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((data) => {
                    toast.success(`${data.data.message}`);
                    const jsonString =  JSON.stringify(data.data.userData[0]);
                    localStorage.setItem('userData', jsonString)
                    //set data in to local storage
                    setUplod(true)
                }).catch((error)=>{
                    toast(`${error.response.data.message}`);
                    setUplod(true)
                })

        }).catch((err) => { 
            toast(`${err}`);
        })
               


    }).catch((err) => { 
        toast(`${err}`);
    })
}
       
        } catch (error) {
        console.log(error.response.data.message);
    }
}
    return (
        <div className=' my-10  md;pt-10'>
            <div className='w-1/2 bg-boxColor p-5   mx-auto m-10 rounded-3xl '>
                <h1 className='p-5 text-center text-3xl'>USER PROFIE</h1>
                <form className='flex flex-col justify-center items-center  w-full  '
                        method='post' onSubmit={handleSubmit} >
                <div className='flex justify-center items-center'>
                        <label  className='cursor-pointer'>
                    <div className='rounded-full  bg-bgColor w-32 h-32 p-2 md:w-64 md:h-64 flex justify-center text-center items-center'
                     style={{ backgroundImage: `url(${data?.image?data?.image:preview})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition :'center' }}
                    >
                            Upload image

                        <input className='hidden' type="file" onChange={(e) => {setImage(e.target.files[0]);setPreview(URL.createObjectURL(e.target.files[0]));}} />
                    </div>
                        </label>
                </div>
                <div className='flex md:flex-row flex-col justify-center mt-5 mb-1 md:mb-3   '>
                    <input type="text" className='outline-none rounded-full text-center text-sm md:text-lg bg-bgColor p-2 w-full md:w-44 mb-2 md:m-1 ' value={user} onChange={(e) => { setUser(e.target.value); }} />
                    <input type="text" readOnly className='outline-none rounded-full text-center cursor-default text-sm md:text-lg bg-bgColor p-2 mb-2 md:m-1   md:w-44' value={"4789633214"} />
                </div>
                {upload ?
                            <button className="text-white      rounded-full  shadow-lg   mx-2    bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2 text-center mr-2 dark:bg-bgColor dark:hover:bg-[#30444a] dark:focus:ring-bgColor inline-flex items-center">SUBMIT</button> :
                            <button disabled type="button" className="text-white      rounded-full  shadow-lg         bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 dark:bg-bgColor  dark:focus:ring-bgColor inline-flex items-center">
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Uploding...
                            </button>
                        }
                        </form>
            </div>
        </div>
    )
}

export default Profile