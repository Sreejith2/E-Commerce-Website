import React, { useContext } from 'react'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addtoCart}=useContext(ShopContext);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-[1fr,1fr] gap-7 mx-5 sm:gap-16 sm:mx-24'>
        <div className='grid grid-cols-[1fr,3fr] gap-1'>
            <div className='sm:[&>img]:h-24 [&>img]:h-15 flex flex-col gap-3 ml-[1px]'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div>
                <img className=' h-[276px] sm:h-[420px] ' src={product.image} alt='' />
            </div>
        </div>
        <div className='flex flex-col gap-3 sm:gap-4 h-[300px] sm:h-[420px] '>
            <h1 className='font-[600] text-[12px] sm:text-[20px]'>{product.name}</h1>
            <div className='flex h-2 sm:h-auto gap-1'>
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />
                <p className='text-[10px] sm:text-[12px['>(122)</p>
            </div>
            <div className='flex gap-8'>
                <div className='text-red-600 text-[12px] sm:text-[18px] font-[600] line-through'>${product.old_price}</div>
                <div className='text-green-700 text-[12px] sm:text-[18px] font-[600]'>${product.new_price}</div>
            </div>
            <div className='text-[8px] sm:text-[15px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='flex items-center gap-3 sm:gap-8'>
                <h1 className='text-[10px] sm:text-[15px] font-[600]'>Select Size :</h1>
                <div className='flex gap-2 sm:gap-8 [&>div]:cursor-pointer [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:w-5 sm:[&>div]:w-10 [&>div]:text-[8px] sm:[&>div]:text-[12px] [&>div]:border [&>div]:p-1 sm:[&>div]:p-3 [&>div]:bg-slate-200 [&>div]:font-[500]'>
                    <div className='hover:bg-slate-400'>S</div>
                    <div className='hover:bg-slate-400'>M</div>
                    <div className='hover:bg-slate-400'>L</div>
                    <div className='hover:bg-slate-400'>Xl</div>
                    <div className='hover:bg-slate-400'>XXl</div>
                </div>
            </div>
            <button onClick={()=>{addtoCart(product.id)}} className=' bg-red-500 mt-3 p-1 sm:p-3 h-8 sm:h-11 w-32 text-[10px] sm:text-[15px] sm:w-40 font-[500]'>ADD TO CART</button>
            <p className='text-[10px] sm:text-[16px]'><span className='font-[600]'>Category</span> Women , T-Shirt , Crop top</p>
            <p className='text-[10px] sm:text-[16px]'><span className='font-[600]'>Tags</span> Modern , Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay