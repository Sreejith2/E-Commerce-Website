import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
function NavBar() {

  const [menu,setMenu]=useState('shop')
  const {getTotalItemsCount} = useContext(ShopContext);
  return (
    <div className='navbar flex flex-row items-center justify-around gap-4 shadow-md p-2 sm:p-4'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
              <img className=' w-5 sm:w-auto ' src={logo} alt='' />
              <span className='text-logo-color text-[10px] sm:text-[25px] font-[600]'>SHOPPER</span>
          </div>
        </Link>
        <ul className='flex items-center gap-2 sm:gap-12 text-nav-list text-[8px] sm:text-[18px] font-[500] [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:justify-center [&>li]:gap-1 [&>li:hover]:cursor-pointer'>
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu==="shop"?<hr className=' bg-orange-400 h-1 w-3/6 border-none '/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men'>Men</Link>{menu==="men"?<hr className=' bg-orange-400 h-1 w-3/6 border-none '/>:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link to='/women'>Women</Link>{menu==="women"?<hr className=' bg-orange-400 h-1 w-3/6 border-none '/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr className=' bg-orange-400 h-1 w-3/6 border-none '/>:<></>}</li>
        </ul>
        <div className='flex items-center gap-11'>
            <Link to='/login'><button className=' h-8 sm:h-12 hover:bg-orange-500 hover:text-white w-12 sm:w-36 rounded-[75px] outline-none border-[1px] border-nav-btn-bord text-gray-500 sm:font-[500] text-[8px] sm:text-[18px] cursor-pointer active:bg-gray-200 '>Login</button></Link>
            <Link to='/cart'><img className=' w-6 sm:w-auto ' src={cart_icon} alt='' /></Link>
            <div className=' w-3 h-3 sm:w-5 sm:h-5 flex justify-center items-center sm:mt-[-35px] ml-[-55px] rounded-[11px] text-[10px] sm:text-[14px] bg-red-600 text-white ' >{getTotalItemsCount()}</div>
        </div>
    </div>
  )
}

export default NavBar