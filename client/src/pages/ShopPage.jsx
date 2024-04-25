import { ArrowBackOutlined, ArrowForwardOutlined, SearchOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { productsList } from '../assets/products'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CartBtn from '../components/CartBtn';
import SignupBanner from '../components/SignupBanner';
import Footer from '../components/Footer';


const ShopPage = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 12
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const totalPages = productsList.length

    let pages = []
    for (let i = 0; i < Math.ceil(totalPages/postPerPage); i++) {
        pages.push(i)
    }

    useEffect(()=>{
        const currentPost = productsList.slice(firstPostIndex, lastPostIndex)
        setProducts(currentPost)
    },[currentPage])

    return (
        <div>
            <div className=' text-center bg-[image:url(/img/banner/b1.jpg)] bg-cover bg-center py-14'>
                <p className=' text-gray-50 text-6xl font-[500]'>#stayhome</p>
                <p className=' text-lg text-gray-300 font-[400]'>Save more with coupons & up to 70% off!</p>
                <div className='flex justify-center'>
                    <form action="/search" className='flex mt-3 bg-gray-50 w-[420px] rounded-full overflow-hidden shadow-2xl'>
                        <input className='w-[350px] pl-4 outline-none text-sm' type="search" name="search" placeholder='Search Products...'/>
                        <button className='text-main font-semibold text-sm px-5 py-3'><SearchOutlined/></button>
                    </form>
                </div>
            </div>
            <div className=' grid grid-cols-4 gap-8 px-24 mt-20'>
                {
                    products.map((item, index)=>{
                        return <div key={index} className='p-2 border rounded-2xl hover:shadow-xl duration-300 hover:scale-105'>
                            <Link to="/product/sdwkfkd">
                                <div className='rounded-xl overflow-hidden'><img src={item.img} alt={item.title}/></div>
                                <div >
                                    <p className=' text-xs font-semibold text-gray-600 capitalize mt-3'>{item.brand}</p>
                                    <h3 className=' font-semibold text-gray-700'>{item.title}</h3>
                                    <span>
                                        <Stack spacing={1}>
                                            <Rating name="size-small" defaultValue={item.rating} size="small"  readOnly/>
                                        </Stack>
                                    </span>
                                </div>
                            </Link>
                            <div className='flex justify-between mt-1 items-center'>
                                <p className=' font-semibold text-lg text-main'>${item.price}</p>
                                <CartBtn/>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className=' text-center my-10'>
            <button className=' bg-main font-semibold text-gray-50 py-1 px-[13px] rounded-sm mr-2' onClick={()=>{
                    if (currentPage !== 1) {
                        setCurrentPage(currentPage - 1)
                    }
                }}><ArrowBackOutlined/></button>
                {
                    pages.map((item)=>{
                        return <button key={item} className=' bg-main font-semibold text-gray-50 py-1 px-[13px] rounded-sm mr-2' onClick={()=>setCurrentPage(item + 1)}>{item + 1}</button>
                    })
                }
                <button className=' bg-main font-semibold text-gray-50 py-1 px-[13px] rounded-sm mr-2' onClick={()=>{
                    if (currentPage !== pages.length) {
                        setCurrentPage(currentPage + 1)
                    }
                }}><ArrowForwardOutlined/></button>
            </div>
            <SignupBanner/>
            <Footer/>
        </div>
    )
}

export default ShopPage
