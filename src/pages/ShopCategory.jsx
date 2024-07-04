import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../components/assets/dropdown_icon.png"
import Item from "../components/Items/Item"


function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
        <img className=' block my-[15px] mx-auto w-[85%] ' src={props.banner} alt=''/>

        <div className='flex mx-[20px] sm:mx-[170px] text-[10px] sm:text-[15px] gap-2 justify-between items-center'>
          <p>
            <span className='font-[600]'>Showing 1-12</span> out of 36 products
          </p>
          <div className=' py-[2px] px-[2px] sm:py-2 grid grid-cols-2 items-center sm:px-5 border-[1px] border-slate-500 '>
            Sort by <img src={dropdown_icon} alt='' />
          </div>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-4 justify-center sm:px-10'>
          {all_product.map((item,index)=>{
            if(props.category===item.category){
              return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
            }else{
              return null
            }
          })}
        </div>
        <div className='flex items-center w-[150px] sm:w-[233px] justify-center my-[50px] sm:my-[100px] mx-auto h-6 sm:h-16 rounded-[75px] bg-slate-300 text-gray-600 font-[600] text-[12px] sm:text-[20px] cursor-pointer '>
          Explore more
        </div>
    </div>
  )
}

export default ShopCategory