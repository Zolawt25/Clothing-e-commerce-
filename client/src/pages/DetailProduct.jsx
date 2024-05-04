import React, { useState } from 'react'
import { productsList } from '../assets/products'
import CartBtn from '../components/CartBtn'
import FeaturedProducts from '../components/FeaturedProducts'
import SignupBanner from '../components/SignupBanner'
import Footer from '../components/Footer'







const DetailProduct = () => {
    const [product, setProduct] = useState(productsList[0])
    const [cartBtnText, setCartBtnText] = useState(true)

    return (
        <div>
                <div className='flex md:px-12 lg:px-24 items-center mt-12 flex-col md:flex-row'>
                <div className='flex justify-center'>
                    <img src={product.img} alt="" className='w-[80%] sm:w-[60%] md:w-[2000px] lg:w-full'/>    
                </div>
                <div className='mt-8 md:mt-0 px-9 sm:px-16 md:px-0 md:ml-8'>
                    <p className=' text-2xl sm:text-3xl font-semibold text-gray-900'>{product.title}</p>
                    <p className=' text-3xl font-semibold text-gray-900 mt-6'>${product.price}.00</p>
                    <label htmlFor="size" className='text-lg font-semibold text-gray-900'>Select Size:</label>
                    <select id='size' className='mt-3 ml-2 w-20 text-center py-1 text-gray-700 font-semibold outline-none mb-3'>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <div>
                        <CartBtn text={cartBtnText}/>
                    </div>
                    <p className=' text-2xl font-semibold text-gray-800 mt-3'>Product Details</p>
                    <div className='mt-3 lg:pr-32 text-gray-700 sm:text-lg'>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <div className='mt-24'>
                <FeaturedProducts/>
                <br /><br />
                <SignupBanner/>
                <Footer/>
            </div>
        </div>
        
    )
}

export default DetailProduct
