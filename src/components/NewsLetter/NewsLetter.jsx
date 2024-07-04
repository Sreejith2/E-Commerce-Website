import React from 'react'

function NewsLetter() {
  return (
    <div className='w-[80%] h-[40%] text-center flex flex-col justify-center items-center m-auto py-[140px] bg-gradient-to-b from-pink-200 to-white gap-7 text-newslet-text '>
        <h1 className=' text-[15px] sm:text-[45px] font-[600]'>Get Exclusive Offers On Your Emails</h1>
        <p className=' text-[15px] sm:text-[24px] fornt-[500]'>Subscribe to our newsletter and stay updated</p>
        <div className='flex mx-2 items-center justify-between bg-white w-[300px] text-[10px] sm:text-[15px] sm:w-[600px] h-6 sm:h-[60px] rounded-[80px] shadow-lg '>
            <input className=' w-[200px] sm:w-[400px] h-6 sm:h-12 outline-none rounded-[80px] p-1' type='email' placeholder='Your Email-Id'></input>
            <button className='bg-black text-white h-6 sm:h-[60px] font-[500] sm:p-2 flex-1 rounded-[80px]'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter