import React from 'react'
import Footer from '../components/Footer'
import SignupBanner from '../components/SignupBanner'







const AboutUsPage = () => {
  return (
    <div>
        <div className='text-center bg-[image:url(/img/about/banner.png)] bg-cover bg-center py-14'>
            <h3 className='text-gray-50 text-6xl font-[500]'>#KnowUs</h3>
            <p className='text-lg text-gray-300 font-[400]'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className='px-24 mt-14'>
            <div className='flex items-center'>
                <img src="/img/about/a4.png" className='w-[440px] mr-10'/>
                <div className='pl-10'>
                    <h3 className='text-4xl font-semibold text-gray-800'>Who We Are?</h3>
                    <p className='mt-3 pr-32 text-gray-700 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad, laborum atque harum quaerat ut ratione dolore aut! Fugit eaque unde aliquid quidem ullam sint pariatur eum amet iure? Esse dolorum recusandae dignissimos perspiciatis.</p>
                </div>
            </div>
            <div className='flex items-center mt-16'>
                <div className='pr-10'>
                        <h3 className='text-4xl font-semibold text-gray-800 text-end'>What We Do?</h3>
                        <p className='mt-3 pl-32 text-gray-700 text-lg text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad, laborum atque harum quaerat ut ratione dolore aut! Fugit eaque unde aliquid quidem ullam sint pariatur eum amet iure? Esse dolorum recusandae dignissimos perspiciatis.</p>
                    </div>
                    <img src="/img/blog/b2.jpg" className='w-[440px] ml-10'/>
            </div>
        </div>
        <br /><br /><br />
        <SignupBanner/>
        <Footer/>
    </div>
  )
}

export default AboutUsPage
