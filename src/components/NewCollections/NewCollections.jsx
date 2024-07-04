import React from 'react'
import new_collection from "../assets/new_collections"
import Item from "../Items/Item"

function NewCollections() {
  return (
    <div className='flex flex-col items-center gap-2 h-5/6 '>
        <h1 className=' text-[18px] sm:text-[30px] font-[600]'>NEW COLLECTION</h1>
        <hr className=' w-52 h-[1px] sm:h-1 bg-black rounded-sm ' />
        <div className=' grid grid-cols-2 sm:grid-cols-4 gap-7 items-center '>
            {new_collection.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections