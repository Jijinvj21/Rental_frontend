
import React from 'react'
import { Link } from 'react-router-dom';


function Error() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='w-64 h-64 ' style={{
          backgroundImage: `url("https://res.cloudinary.com/dczou8g32/image/upload/v1683202574/josh-nuttall-pIwu5XNvXpk-unsplash_rbnv8x.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
      </div>
      <h1 className='text-4xl mt-10 tracking-widested'> 
        PAGE NOT FOUND
      </h1>
      <h1 className='mt-3 text-xl'>
        Return to home
      </h1>
      
      <Link to="/"><button className='bg-boxColor p-2 rounded-lg mt-3 text-2xl'>Home</button></Link>
      

    </div>
  )
}

export default Error