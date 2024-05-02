import React from 'react'







const Footer = () => {
  return (
    <footer>
        <div className='flex flex-wrap justify-between px-10 sm:px-16 md:px-24 py-3'>
            <div className='flex flex-col'>
                <img src="/img/logo.png" alt="" className='w-[60%]'/>
                <p className='py-4 font-semibold text-gray-900'>Contact</p>
                <p className=' text-gray-500 text-sm'><span className=' text-gray-700 font-semibold'>Address:</span> Ethiopia. Addis Ababa</p>
                <p className=' text-gray-500 text-sm'><span className=' text-gray-700 font-semibold'>Phone:</span> +251 909242510</p>
            </div>
            <div className='flex flex-col'>
                <p className='pb-3 font-semibold text-gray-900'>About</p>
                <a href="/" className='text-gray-700 text-sm'>About Us</a>
                <a href="/" className='text-gray-700 text-sm'>Delivery Information</a>
                <a href="/" className='text-gray-700 text-sm'>Privacy Policy</a>
                <a href="/" className='text-gray-700 text-sm'>Terms & Conditions</a>
                <a href="/" className='text-gray-700 text-sm'>Contact Us</a>
            </div>
            <div className='flex flex-col'>
                <p className='pb-3 font-semibold text-gray-900'>My Accout</p>
                <a href="/" className='text-gray-700 text-sm'>Sign Up</a>
                <a href="/" className='text-gray-700 text-sm'>View Cart</a>
                <a href="/" className='text-gray-700 text-sm'>My Wishlist</a>
                <a href="/" className='text-gray-700 text-sm'>Trac My Order</a>
                <a href="/" className='text-gray-700 text-sm'>Help</a>
            </div>
            <div className='flex flex-col'>
                <p className='pb-3 font-semibold text-gray-900'>Install App</p>
                <p className='text-gray-500 text-sm mb-1'>From App Store or Google Play</p>
                <div className='flex'>
                    <img src="/img/pay/app.jpg" alt=""  className='border border-blue-400 w-[40%] rounded mr-1'/>
                    <img src="/img/pay/play.jpg" alt=""  className='border border-blue-400 w-[40%] rounded'/>
                </div>
                <p className='text-gray-500 text-sm mb-2'>Secured Payment Gateways</p>
                <div>   
                    <img src="/img/pay/pay.png" alt="" className='w-[60%]'/>
                </div>
            </div>
        </div>
        <p className='text-center text-gray-500 text-sm mb-3'>&copy; 2024 React & Django Ecommerce Project</p>
    </footer>
  )
}

export default Footer
