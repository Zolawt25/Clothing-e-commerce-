import React from 'react'






//  bg-[image:url(/img/hero4.png)] 
const Hero = () => {
  return (
    <div className='h-vh90 w-full px-10 sm:px-24 flex items-center bg-[image:url(/img/hero4.png)] bg-hero bg-cover'>
      <div>
        <p className='font-bold text-xl sm:text-2xl text-gray-800 tracking-wider'>Trade-in-offer</p>
        <p className='font-bold text-3xl sm:text-5xl text-gray-950 tracking-wider mt-1'>Super value deals</p>
        <p className='font-bold text-3xl sm:text-5xl text-main mt-1'>On all products</p>
        <p className=' sm:text-lg text-gray-400 mt-1 mb-5'>Save more with coupons & up to 70% off!</p>
        <a href='/shop' className='bg-[image:url(/img/button.png)] bg-center bg-no-repeat px-12 sm:px-14 py-3 text-lg font-semibold text-main'>Shop Now</a>
      </div>
    </div>
  )
}

export default Hero
