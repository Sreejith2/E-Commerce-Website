import React from 'react'

function LoginSignup() {
  return (
    <div className='flex flex-col items-center justify-center sm:h-[80%] bg-gradient-to-b from-pink-200 to-white'>
      <div className='flex flex-col justify-center w-[300px] sm:w-[486px] h-[300px] sm:h-[400px] bg-orange-300 py-4 px-3 sm:p-6 shadow-lg my-[100px] sm:mb-0 sm:mt-7 gap-3 sm:gap-4 '>
        <h1 className='text-center font-[600] text-[18px] sm:text-[25px]'>Sign Up</h1>
        <div className='flex flex-col gap-2 text-[10px] sm:text-[15px] [&>input]:h-5 sm:[&>input]:h-9 [&>input]:outline-none [&>input]:shadow-md [&>input]:rounded-sm [&>input]:p-3'>
          <input type='text' placeholder='Your name'/>
          <input type='email' placeholder='Email address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button className=' bg-slate-100 w-[50%] h-6 sm:h-10 rounded-[80px] text-[10px] sm:text-[15px] font-[500] mx-auto hover:bg-orange-500 hover:text-white '>Continue</button>
        <p className='mx-auto text-[10px] sm:text-[15px]  '>Already have an account? <span className=' text-red-600 font-[600] cursor-pointer '>Login here</span></p>
        <div className='grid grid-cols-[auto,1fr] gap-4'>
          <input type='checkbox' name='' id=''/>
          <p className='text-[7px] sm:text-[13px]'>By continuing i agree to the terms of the use & privacy policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup