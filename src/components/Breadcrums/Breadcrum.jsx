import React from 'react'
import arrow_icon from "../assets/breadcrum_arrow.png"

function Breadcrum(props) {
  const {product}=props
  return (
    <div className='flex items-center gap-2 text-[8px] sm:text-[16px] font-[500] my-5 mx-4 sm:mx-28 capitalize'>
        HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrum