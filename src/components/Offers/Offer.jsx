import React from 'react'
import exclusive_image from "../assets/exclusive_image.png";

function Offer() {
  return (
    <div className='flex w-[80%] h-2/3 m-auto px-[20px] sm:px-[140px] my-[150px] bg-gradient-to-b from-pink-200 to-white justify-center '>
      <div className='flex flex-1 flex-col justify-center text-center'>
        <h1 className='text-logo-color text-[15px] sm:text-[60px] font-[600]'>Exclusive</h1>
        <h1 className='text-logo-color text-[15px] sm:text-[60px] font-[600]'>Offers For You</h1>
        <p className='text-logo-color font-[600] text-[16px]'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='bg-btn-color rounded-lg w-[140px] sm:w-[282px] h-[20px] sm:h-[70px] border-none text-white text-[10px] sm:text-[32px] font-[500] mt-4 '>Check Now</button>
      </div>
      <div className='flex flex-1 items-center justify-end pt-50px'>
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  )
}

export default Offer