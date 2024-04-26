import React from 'react'
import SignupBanner from '../components/SignupBanner'
import Footer from '../components/Footer'







const ContactUsPage = () => {
  return (
    <div>
         <div className='text-center bg-[image:url(/img/about/banner.png)] bg-cover bg-center py-14'>
            <h3 className='text-gray-50 text-6xl font-[500]'>#Let's_talk</h3>
            <p className='text-lg text-gray-300 font-[400]'>LEAVE A MESSAGE, We love to hear from you!</p>
        </div>
        <div className="text-center mt-10">
            <h2 className=' text-gray-800 text-4xl font-semibold'>Contact Us</h2>
            <p className='mt-1 text-[17px] text-gray-700'>Clothing support team is always ready to answer your questions and provide all the necessary assistance.</p>
            <p className='mt-1 text-[17px] text-gray-700'>If you found any bugs or have security-related questions, please get in touch with our team at <b className=' text-gray-900'>zelalemt538@gmail.com</b></p>
            <p className='mt-1 text-[17px] text-gray-700'>you can email your questions, suggestions, and comments at <b className=' text-gray-900'>zelalemt538@gmail.com</b></p>
            <p className='mt-1 text-[17px] text-gray-700'><b className=' text-gray-900'>Address: </b>Addis Abeba/ Ethiopia</p>
            <p className='mt-1 text-[17px] text-gray-700'><b className=' text-gray-900'>Email: </b>zelalemt538@gmail.com</p>
            <p className='mt-1 text-[17px] text-gray-700'><b className=' text-gray-900'>Phone: </b>+251-909242510</p>
        </div>
        <br /><br />
        <SignupBanner/>
        <Footer/>
    </div>
  )
}

export default ContactUsPage
