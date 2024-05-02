import React from 'react'





const DiscountBaner = () => {
  return (
    <div className='mt-24 mb-24 py-20 bg-[image:url(/img/banner/b2.jpg)] bg-cover bg-center text-center'>
      <p className=' text-white sm:text-lg font-semibold mb-1'>Repair Services</p>
      <p className=' text-white text-2xl sm:text-4xl font-semibold'>Up to <span className=' text-red-800'>70% off </span>- All t-Shirts & Accessories</p>
      <button className=' bg-gray-300 mt-4 py-3 px-8 font-semibold rounded hover:bg-main hover:text-white'>Explore More</button>
    </div>
  )
}

export default DiscountBaner
