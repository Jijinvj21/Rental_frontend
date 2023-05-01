import React, { useState } from 'react';

function ServerError() {
    const [clicked, setClicked] = useState(false);
  
    const handleButtonClick = () => {
      setClicked(true);
    };
  
    return (
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center bg-bgColor p-5">
        <div className="text-center">
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="Images" class="w-full object-cover h-auto"/>

          <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">500 - Server error</h1>
          <p className="mt-5 text-slate-600 lg:text-lg">
            Oops something went wrong. Try to refresh this page or <br />
            feel free to contact us if the problem persists.
          </p>
          <button className="link_404 mt-8 inline-block rounded-full bg-green-500 px-4 py-2 text-white" onClick={handleButtonClick}>Go to Home</button>
          {clicked && <p>You clicked the button!</p>}
        </div>
      </div>
    );
  }
  
  export default ServerError;
  