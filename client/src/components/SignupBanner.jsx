import React from 'react'







const SignupBanner = () => {
  return (
    <div className='bg-[image:url(/img/banner/b14.png)] bg-no-repeat bg-[left_10rem_bottom_-10rem] bg-[#041D44] px-24 py-10 flex items-center mb-12'>
      <div className='flex-1'>
        <p className=' text-gray-50 text-2xl font-semibold'>Sign Up For Newsletters</p>
        <p className='text-[#667B9C] font-semibold mt-1'>Get email updates about our latest shop and <span className='text-[#D1A465]'>special offers</span></p>
      </div>
        <div className='flex'>
            <input className=' w-[350px] pl-4 placeholder:text-sm outline-none rounded-[4px_0_0_4px] text-sm' type="text" placeholder='Your email address'/>
            <button className=' bg-main text-gray-50 font-semibold text-xs px-5 py-3 rounded-[0_4px_4px_0]'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignupBanner
