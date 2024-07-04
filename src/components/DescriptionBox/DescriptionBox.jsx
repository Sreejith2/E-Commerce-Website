import React from 'react'

function DescriptionBox() {
  return (
    <div className=' mx-8 my-7 sm:my-28 sm:mx-36 '>
        <div className='flex [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:font-[600] [&>div]:w-40 [&>div]:h-10 sm:[&>div]:h-16 [&>div]:border [&>div]:border-gray-500 [&>div]:text-[12px] sm:[&>div]:text-[16px]'>
            <div>Description</div>
            <div>Reviews (122)</div>
        </div>
        <div className='flex flex-col text-[10px] sm:text-[16px] gap-4 border border-gray-500 p-7 pb-14'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox