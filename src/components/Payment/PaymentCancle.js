import React from "react";
import { Link } from "react-router-dom";

function PaymentCancle() {


  return (
    <div className=" ">
      <div className="mx-auto max-w-lg">
        <div className="bg-boxColor p-12 rounded-lg shadow-md">
          <div className="rounded-full h-32 w-32 bg-bgColor flex items-center justify-center mx-auto mb-8">
            <svg
              class="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold  mb-4 text-center md:text-left">
            Cancel
          </h1>
          <p className="text-lg  mb-4 text-center md:text-left">
            Payment cancelled
          </p>
          <p className="text-lg  mb-4 text-center md:text-left">
            Your order has not been processed!
          </p>
          <p className="text-lg ">
            <Link to="/">
              <p className="text-white hover:text-bgColor transition-colors text-xl text-center md:text-left">
                Back to Home
              </p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancle;
