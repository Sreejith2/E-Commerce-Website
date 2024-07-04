import React from 'react'
import { Link } from 'react-router-dom'

function item(props) {
  return (
    <div className='w-[120px] ml-1 flex flex-col justify-center items-center sm:w-[270px] hover:scale-105 my-2 sm:my-9 transition-transform duration-500 text-center'>
        <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} className=' h-32 sm:h-64 ' src={props.img} alt='' /></Link>
        <span className='sm:mt-[6px] text-[8px] sm:text-[15px] '>{props.name}</span>
        <div className='flex gap-5'>
            <div className='text-gray-400 text-[12px] sm:text-[18px] font-[600]'>{props.new_price}</div>
            <div className='text-gray-400 text-[12px] sm:text-[18px] font-[500] line-through '>{props.old_price}</div>
        </div>
    </div>
  )
}

export default item