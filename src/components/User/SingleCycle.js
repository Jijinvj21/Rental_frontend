import React, {  useState } from 'react'

import ReactStar from 'react-rating-stars-component'
import Modal from '../Table/Modal'
import { useLocation } from 'react-router-dom';
import Accessories from './Accessories';
import { toast } from 'react-toastify';
import axios from '../../instance/axios'
import UseUserToken from '../../customeHooks/useUserToken';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';





function SingleCycle() {
  let date = localStorage.getItem('userDate')
  let jsonData = JSON.parse(date)
  const location = useLocation()

  const [totalprice, setTotalprice] = useState(location.state.price + location.state?.securityDeposit)



  UseUserToken()
  localStorage.getItem('user');
  const [rating, setRating] = useState({
    starRating: '',
    review: ''
  })
  const handleSubmit = ((e) => {
    e.preventDefault()
  })

  function accessories() {

    return (
      <button className='m-2 bg-boxColor p-2 rounded-full w-full ' >
        Add accessories
      </button>
    )
  }
  function terms() {
    return (
      <button className='m-2 bg-boxColor p-2 rounded-full w-full  ' >
        Terms and condition
      </button>
    )
  }
  function starReview() {
    return (
      <>
        <form onSubmit={handleSubmit} className='bg-boxColor flex flex-col w-full  justify-center items-center'>
          <h1 className="text-center -pt-10">POST YOUR REVIEW</h1>
          <div className='flex justify-center p-5'>
            <ReactStar
              activeColor='#27363b'
              size={40}
              count={5}
              onChange={(e) => setRating({ ...rating, starRating: e.target.value })}
            />
          </div>
          <h1 className=" -pt-10">Share more about your Expreance</h1>
          <textarea type='text' placeholder='Review' className=' w=full m-5 bg-bgColor p-2 rounded-lg' onChange={(e) => setRating({ ...rating, review: e.target.value })} />
          <button class="text-white      rounded-lg  shadow-lg      mt-6   bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-bgColor dark:hover:bg-[#30444a] dark:focus:ring-bgColor inline-flex items-center">SUBMIT</button>
        </form>
      </>
    )
  }
  const rentHandler = (data) => {
    data.forEach((data) => {
      let storedData = JSON.parse(localStorage.getItem('accessories'))
      if (!storedData){  storedData = []}
      
       storedData.push(data._id)
       const filteredArray = storedData.filter((value, index) => {
        return storedData.indexOf(value) === index;
      });
      const jsonString = JSON.stringify(filteredArray);
      localStorage.setItem('accessories', jsonString)
    })
    if (data) {
      let price = 0
      price = data?.reduce((sum, element) => {
        // sum += +element.price
        return sum = +sum + +element.price
      }, 0);
      const date1 = new Date(jsonData.to);
      const date2 = new Date(jsonData.from);
      
      const timestamp1 = date1.getTime();
      const timestamp2 = date2.getTime();
      
      const difference = timestamp2 - timestamp1;
      
      const result = difference / 86400000;
      let adddate
      if(result ===0 ){
         adddate=result+1
      }else{
        adddate=result
      }
      
      setTotalprice(price + location.state.price + location.state?.securityDeposit * adddate )
    }


   











  }



  const handlePaymentSuccess = () => {
    const token = localStorage.getItem('user');
    axios.post(`/booked`, { data:bookedData }, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    },).then(() => {
      localStorage.removeItem(accessories);

    })
  }
  let data = localStorage.getItem('accessories')
  let accessorieData = JSON.parse(data)
  let bookedData = {
    cycle: location.state,
    accessories: accessorieData,
    fromDate: jsonData.from,
    toDate: jsonData.to,
    totalPrice: totalprice

  }

  return (
    <div className='mt-24'>

      <div className='grid  grid-col md:grid-cols-2 text-center '>
        <div className='w-4/6  md:w-1/2 lg:w-full mx-auto p-5'>
          <img
            src={location?.state?.image}
            alt="new"
            className='w-4/6  md:w-1/2 lg:w-full rounded-2xl'
          />
        </div>
        <div className='pl-5 text-left w-4/6 pt-16  md:w-1/2 lg:w-full'>

          <div class="flex flex-row  justify-center  py-2 drop-shadow-2xl  rounded-full w-4/6  md:w-1/2 lg:w-full  ">
            <input type="date" value={jsonData.from} readOnly className='bg-boxColor rounded-l-full w-30  px-5 py-1 focus:outline-none'
            />
            <input type="date" value={jsonData.to} readOnly className='bg-boxColor rounded-r-full w-30  px-5 py-1 focus:outline-none' />
          </div>
          <div className='grid grid-cols-2 py-2 pr-5'>
            <div>
              <h1 className='pb-2'>Name :{location.state?.name}</h1>

              <h1 className='pb-2'>Price : {location.state?.price}</h1>
              <h1 className='pb-2'>Priceinclude items :{location.state?.priceinclude}</h1>
              <h1 className='pb-2'>Security deposit :{location.state?.securityDeposit}</h1>
            </div>
            <div className=' flex flex-col ml-auto '>
              <h1 className='pb-2'>Speed :{location.state?.speed}</h1>
              <h1 className='pb-2'>Type :{location.state?.type}</h1>
              <h1 className='pb-2'>Break :{location.state?.breaks}</h1>
              <h1 className='pb-2'>Tyre size :{location.state?.tyreSize}</h1>
            </div>
          </div>

          <div className='flex justify-center  p-5'>
            <h1 className='flex text-2xl '> Total Price :
              <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />  <path d="M12 3v3m0 12v3" /></svg>
              {totalprice}
            </h1>
          </div>

          <div className='flex flex-row p-5 justify-between '>
            <div className='w-1/2 pr-3'>

              {<Modal modal={<Accessories rentHandler={rentHandler} data={location.state} />} button={accessories()} />}

              {<Modal modal={location.state?.terms} button={terms()} />}
            </div>

            <div className='z-0 w-1/2 pt-2'>

              <PayPalScriptProvider options={{ "client-id": "AUph16OQlgs0Af8jR_YZyxgY88VLPyPVk_qU_MJUZ1O0b9y4VZ0Zxb7wFcxDd3n5YufGHhRTbSuFytNW" }}>
                <PayPalButtons
                  style={{
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'rect',
                    label: 'pay',
                    zIndex: 2,
                    height: 40

                  }}
                  createOrder={(data, actions) => { return actions.order.create({ purchase_units: [{ amount: { value: String(totalprice)} }] }) }}
                  onApprove={async (data, actions) => {
                    await actions.order.capture()
                    handlePaymentSuccess()
                    
                  }}
                  onCancel={() => {
                    toast('payment cancle')
                  }}
                  on
                  onError={() => {
                    toast('payment failed')

                  }} />
                
              </PayPalScriptProvider>
            </div>
          </div>

        </div>
      </div>
      <div className='p-10'>
        <div className='flex justify-between'>
          <h1 className='pt-5'>Reviews</h1>
          <Modal modal={starReview()} button={"ADD REVIEW"} />
        </div>
        <hr class="  my-2  bg-gray-200 border-1 dark:bg-gray-700" />

        <div className='grid md:grid-cols-3 grid-row   mx-auto '>
          <div className='p-5' >JIJIN VJ</div>
          <div className='flex p-5 '>
            <svg className="h-5 w-5 ml-1  text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          </div>
          <div className='p-5'>Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.</div>
        </div>
        <hr class="  my-2  bg-gray-200 border-1 dark:bg-gray-700" />

        <div className='grid md:grid-cols-3 grid-row   mx-auto '>
          <div className='p-5' >JIJIN VJ</div>
          <div className='flex p-5 '>
            <svg className="h-5 w-5 ml-1  text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <svg className="h-5 w-5 ml-1 text-white" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"  >  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          </div>
          <div className='p-5'>Though it helps many people, this medication may sometimes cause addiction. This risk may be higher if you have a substance use disorder (such as overuse of or addiction to drugs/alcohol). Take this medication exactly as prescribed to lower the risk of addiction. Ask your doctor or pharmacist for more details.</div>
        </div>



      </div>
    </div>
  )
}




export default SingleCycle


