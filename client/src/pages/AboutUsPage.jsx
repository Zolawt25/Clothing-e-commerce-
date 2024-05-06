import React from 'react'
import Footer from '../components/Footer'
import SignupBanner from '../components/SignupBanner'







const AboutUsPage = () => {
  return (
    <div>
        <div className='text-center bg-[image:url(/img/about/banner.png)] bg-cover bg-center py-14 px-4 sm:px-0'>
            <h3 className='text-gray-50 text-5xl sm:text-6xl font-[500]'>#KnowUs</h3>
            <p className='sm:text-lg text-gray-300 font-[400]'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className='flex justify-center'>
            <div className='w-full max-w-[1400px]'>
                <div className='px-10 md:px-16 lg:px-24 mt-14'>
                    <div className='flex items-center flex-col lg:flex-row text-center lg:text-left'>
                        <img src="/img/about/a4.png" className='w-full sm:w-[70%] md:w-1/2 lg:mr-10 mb-5'/>
                        <div className='lg:pl-10'>
                            <h3 className='text-3xl sm:text-4xl font-semibold text-gray-800'>Who We Are?</h3>
                            <p className='mt-3 lg:pr-32 text-gray-700 sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad, laborum atque harum quaerat ut ratione dolore aut! Fugit eaque unde aliquid quidem ullam sint pariatur eum amet iure? Esse dolorum recusandae dignissimos perspiciatis.</p>
                        </div>
                    </div>
                    <div className='flex items-center flex-col-reverse lg:flex-row text-center lg:text-left mt-16'>
                        <div className='lg:pr-10'>
                                <h3 className='text-3xl sm:text-4xl font-semibold text-gray-800 text-center lg:text-end'>What We Do?</h3>
                                <p className='mt-3 lg:pl-32 text-gray-700 sm:text-lg text-center lg:text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad, laborum atque harum quaerat ut ratione dolore aut! Fugit eaque unde aliquid quidem ullam sint pariatur eum amet iure? Esse dolorum recusandae dignissimos perspiciatis.</p>
                            </div>
                            <img src="/img/blog/b2.jpg" className='w-full sm:w-[70%] md:w-1/2 mb-5 lg:ml-10'/>
                    </div>
                </div>
            </div>
        </div>
        
        
        <br /><br /><br />
        <SignupBanner/>
        <Footer/>
    </div>
  )
}

export default AboutUsPage
