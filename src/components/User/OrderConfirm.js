import React from 'react'
import UseUserToken from '../../customeHooks/useUserToken'

function OrderConfirm() {
  UseUserToken()
  return (
<div className="w-full  max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-boxColor dark:border-gray-700 m-2 ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none  ">Latest Ordes</h5>
      </div>
      <div className="flow-root">
        <ul  className="divide-y divide-gray">
          <li className="pt-3 pb-0 sm:pt-4 mb-3">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-10 h-10 rounded-md" src="https://images.unsplash.com/photo-1681114423407-0ff133035f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80" alt="Thomas" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate ">
                   ljljljljj
                </p>
              </div>
              <div className="inline-flex items-center text-xs md:text-base font-semibold mr-5 ">
                $2367
              </div>
              <div className="inline-flex items-center text-xs md:text-base font-semibold  ">
                <button className='bg-bgColor m-1 p-1 md:m-5 md:p-2  rounded-md md:rounded-xl'>Show more</button>
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4 mb-3">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-10 h-10 rounded-md" src="https://images.unsplash.com/photo-1681114423407-0ff133035f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80" alt="Thomas" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate ">
                   ljljljljj
                </p>
              </div>
              <div className="inline-flex items-center text-xs md:text-base font-semibold mr-5 ">
                $2367
              </div>
              <div className="inline-flex items-center text-xs md:text-base font-semibold  ">
                <button className='bg-bgColor m-1 p-1 md:m-5 md:p-2  rounded-md md:rounded-xl'>Show more</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OrderConfirm