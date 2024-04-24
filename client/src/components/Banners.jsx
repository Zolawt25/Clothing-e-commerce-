import React from 'react'







const Banners = () => {
  return (
    <div className='mt-24 mb-16 px-24 '>
      <div className='flex gap-8'>
        <div className='flex-1 bg-[image:url(/img/banner/b17.jpg)] bg-cover bg-center pl-7 py-28'>
            <p className=' text-gray-50 text-xl font-[330]'>crazy deals</p>
            <p className=' text-white text-4xl font-semibold'>buy 1 get 1 free</p>
            <p className=' font-semibold mt-2 text-gray-50'>The best classic dress is on sale at cara</p>
            <button className=' border px-5 py-1 text-gray-50 font-[500] mt-3'>Learn More</button>
        </div>
        <div className='flex-1 bg-[image:url(/img/banner/b10.jpg)] bg-cover bg-center pl-7 py-28'>
            <p className=' text-gray-50 text-xl font-[330]'>spring/summer</p>
            <p className=' text-white text-4xl font-semibold'>upcomming season</p>
            <p className=' font-semibold mt-2 text-gray-50'>The best classic dress is on sale at cara</p>
            <button className=' border px-5 py-1 text-gray-50 font-[500] mt-3'>Collection</button>
        </div>
      </div>
      <div className='flex mt-8'>
        <div className='flex-1 bg-[image:url(/img/banner/b7.jpg)] bg-cover bg-center mr-8 px-5 py-20'>
            <p className=' text-white text-2xl font-bold'>SEASON SALE</p>
            <p className=' text-lg text-red-500 font-semibold'>Winter Collection -50% off</p>
        </div>
        <div className=' bg-[image:url(/img/banner/b4.jpg)] bg-cover bg-center mr-8 px-5 py-20'>
            <p className=' text-white text-2xl font-bold'>NEW FOOTWARE COLLACTION</p>
            <p className=' text-lg text-red-500 font-semibold'>Spring/Summer 2022</p>
        </div>
        <div className='flex-1 bg-[image:url(/img/banner/b18.jpg)] bg-cover bg-center px-5 py-20'>
            <p className=' text-white text-2xl font-bold'>T-SHIRTS</p>
            <p className=' text-lg text-red-500 font-semibold'>New Trandy Prints</p>
        </div>
      </div>
    </div>
  )
}

export default Banners
