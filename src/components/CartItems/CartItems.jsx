import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from "../assets/cart_cross_icon.png"

function CartItems() {
    const {all_product,cartItems,removefromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='mx-7 my-7 sm:my-16 sm:mx-32 min-h-dvh '>
        <div className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-4 sm:gap-16 p-5 text-gray-700 font-[600] text-[8px] sm:text-[15px]'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[2px] bg-slate-300 '/>
        <div className=' min-h-dvh '>
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div className='m-[100px 170px]'>
                            <div className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-4 sm:gap-20 p-5 text-gray-600 font-[500] text-[8px] sm:text-[14px]'>
                                <img className=' h-8 sm:h-16' src={e.image} alt=''/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className=' w-9 sm:w-16 bg-white h-6 sm:h-12 border border-gray-400 '>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className=' w-2 sm:w-4 cursor-pointer sm:mx-10' onClick={()=>{removefromCart(e.id)}} src={remove_icon} alt=''/>
                            </div>
                            <hr className='h-[2px] bg-slate-300 '/>
                        </div>
                }
                return null
            })}
        </div>
        <div className='grid grid-cols-2 mb-24 '>
            <div className='flex border border-black flex-1 items-center flex-col sm:mr-48 gap-10 '>
                <h1 className='text-[12px] sm:text-[20px]'>Cart Totals</h1>
                <div className='[&>div]:grid [&>div]:grid-cols-2 text-[10px] sm:text-[15px] [&>div]:py-4'>
                    <div>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button className='bg-red-500 font-[500] text-[10px] sm:text-[16px] w-[200px] sm:w-[262px] h-9 sm:h-[58px] my-5 hover:bg-red-600 text-white outline-none border-none'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
            <div className='flex flex-1 items-center text-[10px] sm:text-[16px] flex-col font-[400]'>
                <p className='text-10px text-gray-600'>If you have a promocode,Enter it here</p>
                <div className='w-[180px] sm:w-[400px] mt-4 pl-5 h-10 sm:h-12 items-center bg-slate-200 grid grid-cols-[2fr,1fr]'>
                    <input type="text" className='border-none bg-transparent outline-none text-gray-500 h-10' placeholder='Promo code'></input>
                    <button className=' h-10 sm:h-12 text-[10px] sm:text-[16px]  bg-black text-white '>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems