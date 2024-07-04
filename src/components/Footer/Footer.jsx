import React from 'react'
import logo from "../assets/logo.png"
import ig_icon from "../assets/instagram_icon.png"
import pint_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex mt-3 sm:mt-16 flex-col justify-center items-center gap-2'>
        <Link to='/'>
            <div className='flex items-center justify-center gap-5'>
                <img className=' h-7 sm:h-auto ' src={logo} alt='' />
                <span className='text-logo-color text-[14px] sm:text-[20px] font-[600]'>SHOPPER</span>
            </div>
        </Link>
        <ul className='flex justify-center gap-6 sm:gap-12 text-[12px] sm:text-[15px] font-[500] [&>li]:cursor-pointer'>
            <Link><li>Company</li></Link>
            <Link><li>Products</li></Link>
            <Link><li>Offices</li></Link>
            <Link><li>About</li></Link>
            <Link></Link><li>Contact</li>
        </ul>
        <div className='flex justify-center gap-5 [&>div]:p-1 sm:[&>div]:p-3 [&>div]:bg-slate-100 [&>div]:border-[1px] [&>div>img]:h-4'>
            <div>
                <img src={ig_icon} alt='' />
            </div>
            <div>
                <img src={pint_icon} alt='' />
            </div>
            <div>
                <img src={whatsapp_icon} alt='' />
            </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-7 w-full mb-7'>
            <hr className=' w-[80%] border-none rounded-[10px] h-[1px] bg-slate-700 m-2 '/>
            <p className='text-[12px]'>Copyright@{new Date().getFullYear()}-All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer