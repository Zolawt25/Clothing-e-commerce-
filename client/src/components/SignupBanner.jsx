import React from 'react'







const SignupBanner = () => {
  return (
    <div className='flex justify-center bg-[#041D44] mb-12'>
      <div className='bg-[image:url(/img/banner/b14.png)] bg-no-repeat bg-[left_10rem_bottom_-10rem] bg-[#041D44] px-10 sm:px-16 md:px-24 py-10 flex items-center flex-col lg:flex-row text-center lg:text-left w-full max-w-[1400px]'>
        <div className='flex-1'>
          <p className=' text-gray-50 text-2xl sm:text-4xl lg:text-2xl font-semibold'>Sign Up For Newsletters</p>
          <p className='text-[#667B9C] font-semibold mt-1 mb-2 lg:mb-0 text-sm sm:text-[15px]'>Get email updates about our latest shop and <span className='text-[#D1A465]'>special offers</span></p>
        </div>
          <div className='flex'>
              <input className='w-[180px] sm:w-[350px] pl-4 placeholder:text-sm outline-none rounded-[4px_0_0_4px] text-sm' type="text" placeholder='Your email address'/>
              <button className=' bg-main text-gray-50 font-semibold text-xs px-2 sm:px-5 py-1 sm:py-3 rounded-[0_4px_4px_0]'>Sign Up</button>
          </div>
      </div>
    </div>
    
  )
}

export default SignupBanner
