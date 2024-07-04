import React from 'react'
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"

function Hero() {
  return (
    <div className='w-dvw h-[400px] sm:h-screen bg-gradient-to-b from-pink-200 to-white flex '>
        <div className='flex flex-col justify-center gap-[1px] pl-5 sm:pl-44 '>
            <h2 className='text-[15px] sm:text-[26px] font-[600]'>NEW ARRIVALS ONLY</h2>
          
            <div className='flex items-center gap-5'>
                <span className=' text-[18px] sm:text-[60px] font-[600]'>new</span>
                <img className=' w-[18px] sm:w-[105px]' src={hand_icon} alt='' />
            </div>
            <span className=' text-[18px] sm:text-[50px] font-[600]'>collection</span>
            <span className=' text-[18px] sm:text-[50px] font-[600]'>for everyone</span>
           
            <div className='flex justify-center items-center gap-4  w-[150px] sm:w-[310px] h-9 sm:h-[50px] rounded-[75px] mt-2 bg-red-500 text-white text-[10px] sm:text-[20px] font-[500] '>
                <div>Latest Collection</div>
                <img className=' w-3 sm:w-auto ' src={arrow_icon} alt=''/>
            </div>
        </div>
        <div className='flex flex-1 items-center justify-center '>
            <img className=' h-[200px] sm:h-[430px]' src={hero_image} alt='' />
        </div>
    </div>
  )
}

export default Hero