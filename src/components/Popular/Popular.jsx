import React from 'react'
import data_product from "../assets/data"
import Item from "../Items/Item"
function Popular() {
  return (
    <div className='flex flex-col items-center gap-2 h-1/3 sm:h-5/6 '>
        <h1 className='text-[20px] sm:text-[30px] font-[600]'>POPULAR IN WOMEN</h1>
        <hr className=' w-52 h-[2px] sm:h-1 bg-black rounded-sm ' />
        <div className=' mt-12 grid grid-cols-2 gap-7 sm:flex sm:flex-row '>
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular