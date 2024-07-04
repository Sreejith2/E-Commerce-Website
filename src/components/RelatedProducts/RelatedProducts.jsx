import React from 'react'
import data_product from "../assets/data"
import Item from "../Items/Item"
function RelatedProducts() {
  return (
    <div className='flex flex-col items-center gap-2 sm:h-[90vh]'>
        <h1 className=' text-slate-800 text-[15px] sm:text-[25px] font-[600] '>Related Products</h1>
        <hr className=' w-48 h-[1px] sm:h-1 rounded-md bg-slate-700 '/>
        <div className='grid grid-cols-3 sm:grid-cols-4'>
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts