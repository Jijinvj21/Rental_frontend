
import React, { useEffect, useState } from 'react'
import User from '../../components/Table/Table'
import axios from '../../instance/axios';
import { toast } from 'react-toastify';
import Filter from '../../components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { status } from '../../redux/features/dataManagementSlice';
import useVendorToken from '../../customeHooks/useVendorToken';
import Modal from '../../components/Table/Modal';
import { addCycleValidationSchema, imageValidationSchema } from '../../validation/validation';





function UserTable() {
    const [user, setUser] = useState([])
    const tableManagement = useSelector(state => state.dataManagement);
    useVendorToken()
    const token = localStorage.getItem('vendor');


    const [upload, setUplod] = useState(true)
    const [inputData, setInputData] = useState({
        speed: '',
        type: '',
        names: '',
        breake: '',
        tyresize: '',
        quantity: '',
        priceinclude: '',
        securitydeposit: '',
        terms: '',
        price: '',
        id:'',
    });
    const [image, setImage] = useState()
    const dispatch = useDispatch();

    const updateStatus = () => {


        dispatch(status(true));
    }
    function addBtn() {
        return (
            <button className='bg-boxColor p-2 rounded-md'>
                AddCycle
            </button>
        )
    }

    function addCycle() {

        const datas = { image: image, inputData: inputData }
        const handleSubmit = async (e) => {
            e.preventDefault()

            try {


                imageValidationSchema.validate({ image: image })
                    .then(async () => {
                        addCycleValidationSchema.validate(inputData)
                            .then(async () => {
                                updateStatus()

                                setUplod(false)
                                await axios.post('/vendor/insert_cycle', datas, {
                                    headers: {
                                        'Authorization': `Bearer ${token}`,
                                        'Content-Type': 'multipart/form-data'
                                    }

                                }).then((data) => {
                                    toast.success(`${data.data.message}`);
                                    setUplod(true)
                                }).catch((error) => {
                                    toast(`${error.response.data.message}`);
                                    setUplod(true)

                                })



                            }).catch((err) => {
                                toast(`${err}`)
                            })

                    }).catch((err) => {
                        toast(`${err}`)
                    })

            } catch (error) {
                console.log(error.response.data.message);
            }

        }
        return (

            <div className='w-screen '>

                <div className='bg-boxColor      my-auto w-full flex flex-row justify-center items-center rounded-3xl  ' >
                    <form className='flex flex-col justify-center items-center  w-full  '
                        method='post' onSubmit={handleSubmit} >
                        <h1 className=' text-3xl'>SPECIFICATION</h1>

                        <label className=" bg-bgColor  shadow-lg p-2 m-2 w-4/5 rounded-full cursor-pointer">  {image ? image?.name : 'CHOOSE FILE'}
                            <input
                                name='image'
                                type="file"
                                className="hidden"
                                onChange={(e) => setImage(e.target.files[0])} />
                        </label>
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none' type='text'
                            placeholder='NAME'
                            name="name"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, names: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='SPEED'
                            name="speed"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, speed: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='TYPE'
                            name="type"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, type: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='BREAKS'
                            name="breake"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, breake: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='TYRE SIZE'
                            name="tyresize"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, tyresize: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='QUANTITY'
                            name="quantity"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, quantity: e.target.value })} />
                        <h1 className='  text-3xl text-center'> ADDITIONAL ITEMS</h1>
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='PRICE INCLUDE ITEMS'
                            name="priceinclude"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, priceinclude: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='SECURITY DEPOSIT'
                            name="securitydeposit"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, securitydeposit: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='TERMS AND CONDITION'
                            name="terms"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, terms: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='RENT PRICE'
                            name="price"
                            value={inputData.name} onChange={(e) => setInputData({ ...inputData, price: e.target.value })} />
                        {upload ?
                            <button className="text-white      rounded-full  shadow-lg         bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 dark:bg-bgColor dark:hover:bg-[#30444a] dark:focus:ring-bgColor inline-flex items-center">SUBMIT</button> :
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



    function edit() {
        console.log(inputData);

        const datas = { image: image, inputData: inputData }
        const handleSubmit = async (e) => {
            e.preventDefault()

            console.log(image);
            const urlPattern = /^https?:\/\/\S+$/;
if(urlPattern.test(image)){
    addCycleValidationSchema.validate(inputData)
    .then(async () => {
                        updateStatus()

        setUplod(false)
        await axios.post('/vendor/edit_cycle', {datas,image}, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }

        }).then((data) => {
            toast.success(`${data.data.message}`);
            setUplod(true)
        }).catch((error) => {
            toast(`${error.response.data.message}`);
            setUplod(true)

        })



    }).catch((err) => {
        toast(`${err}`)
    })

   
}else {
    imageValidationSchema.validate({ image: image })
    .then(async () => {
        addCycleValidationSchema.validate(inputData)
            .then(async () => {

                setUplod(false)
                await axios.post('/vendor/edit_cycle', datas, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }

                }).then((data) => {
                    toast.success(`${data.data.message}`);
                    setUplod(true)
                }).catch((error) => {
                    toast(`${error.response.data.message}`);
                    setUplod(true)

                })



            }).catch((err) => {
                toast(`${err}`)
            })

    }).catch((err) => {
        toast(`${err}`)
    })
}
        }
        return (

            <div className='w-screen '>

                <div className='bg-boxColor      my-auto w-full flex flex-row justify-center items-center rounded-3xl  ' >
                    <form className='flex flex-col justify-center items-center  w-full  '
                        method='post' onSubmit={handleSubmit} >
                        <h1 className=' text-3xl'>SPECIFICATION</h1>

                        <label className=" bg-bgColor  shadow-lg p-2 m-2 w-4/5 rounded-full cursor-pointer">  {image ? image?.name : 'CHOOSE FILE'}
                            <input
                                name='image'
                                type="file"
                                className="hidden"
                                onChange={(e) => setImage(e.target.files[0])} />
                        </label>
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none' type='text'
                            placeholder='NAME'
                            name="name"
                            value={inputData.names} onChange={(e) => setInputData({ ...inputData, names: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='SPEED'
                            name="speed"
                            value={inputData.speed} onChange={(e) => setInputData({ ...inputData, speed: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='TYPE'
                            name="type"
                            value={inputData.type} onChange={(e) => setInputData({ ...inputData, type: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='BREAKS'
                            name="breake"
                            value={inputData.breake} onChange={(e) => setInputData({ ...inputData, breake: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='TYRE SIZE'
                            name="tyresize"
                            value={inputData.tyresize} onChange={(e) => setInputData({ ...inputData, tyresize: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='QUANTITY'
                            name="quantity"
                            value={inputData.quantity} onChange={(e) => setInputData({ ...inputData, quantity: e.target.value })} />
                        <h1 className='  text-3xl text-center'> ADDITIONAL ITEMS</h1>
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='PRICE INCLUDE ITEMS'
                            name="priceinclude"
                            value={inputData.priceinclude} onChange={(e) => setInputData({ ...inputData, priceinclude: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='SECURITY DEPOSIT'
                            name="securitydeposit"
                            value={inputData.securitydeposit} onChange={(e) => setInputData({ ...inputData, securitydeposit: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='TERMS AND CONDITION'
                            name="terms"
                            value={inputData.terms} onChange={(e) => setInputData({ ...inputData, terms: e.target.value })} />
                        <input className='bg-bgColor  rounded-full   shadow-lg p-2 m-2 w-4/5  focus:outline-none'
                            type='text'
                            placeholder='RENT PRICE'
                            name="price"
                            value={inputData.price} onChange={(e) => setInputData({ ...inputData, price: e.target.value })} />
                        {upload ?
                            <button className="text-white      rounded-full  shadow-lg         bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 dark:bg-bgColor dark:hover:bg-[#30444a] dark:focus:ring-bgColor inline-flex items-center">SUBMIT</button> :
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


  
    useEffect(() => {
        setUser(() => tableManagement.data?.user)
    }, [tableManagement])

    let table = []
    const btn = {
        btn: <Modal addCycleBtn={addBtn} addCycleForm={addCycle()} />
    }
    user?.map((data, index) => {
        let { image, quantity, securityDeposit, price, name,speed,type,breaks,tyreSize,priceinclude,terms,_id } = data

        const setData=()=>{
            setImage(()=>image)
            setInputData({
                ...inputData,
                speed: speed,
                type: type,
                names: name,
                breake: breaks,
                tyresize: tyreSize,
                quantity: quantity,
                priceinclude: priceinclude,
                securitydeposit: securityDeposit,
                terms: terms,
                price: price,
                id:_id
              });}

        let table_head = {
            Image: <div className='flex justify-center'><img src={image} alt="BigCo Inc. logo" className='w-14   ' /></div>,
            Name: name,
            Quantity: quantity,
            Security_Deposit: securityDeposit,
            Rent_Price: price,

            Edit:<Modal addCycleBtn={ ()=> <button onClick={setData}  className=' bg-bgColor hover:bg-[#558081]/90  focus:outline-none focus:ring-[#558081]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#558081]/30 mr-2 mb-2 '>Edit</button>} addCycleForm={edit()} />,

            Status: <button className=' bg-bgColor hover:bg-[#558081]/90  focus:outline-none focus:ring-[#558081]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#558081]/30 mr-2 mb-2 '
                onClick={() => {
                    axios.get(`/vendor/cycleStatus_Update/${data._id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }).then((responce) => {
                        updateStatus()
                    });
                }}>
                {data.status ? 'Block' : 'Unblock'}</button>
        }
        table.push(table_head)

        return 0
    })
   

    return (
        <div className='w-full' >
            <h1 className='text-center pt-10 text-3xl'>PRODUCT LIST</h1>
            <User users={table} btn={btn} nodatamsg={ user? '':
        <div className='flex     justify-center items-center'>
            <p className=' text-center '> NO DATA ARE AVAILABLE</p></div>} />
            
            <Filter props={"cycle"} />

        </div>
        // 
    )
}
export default UserTable





