import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { productsList } from '../assets/products'
import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CartBtn from '../components/CartBtn';
import SignupBanner from '../components/SignupBanner';
import Footer from '../components/Footer';






const SearchPage = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 9
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
        <SearchBar/>
        <div>
            <div className='flex justify-center'>
                <div className=' sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 md:px-16 lg:px-20 gap-9 w-full max-w-[1400px]'>
                    <div className=' col-span-1 bg-[#EBF2F7] mt-20 h-[90vh] shadow-xl rounded overflow-hidden'>
                        <p className='py-1 text-center bg-main font-semibold text-gray-50'>Select Category:</p>
                        <div className='mt-3 ml-3'>
                            <p className=' font-semibold text-gray-800'>Clothing Type:</p>
                            <select className=' w-36 py-1 mt-1 rounded outline-none border-none'>
                                <option value="">All</option>
                                <option value="shirts">Shirts</option>
                                <option value="t-shirts">T-shirts</option>
                                <option value="pants">Pants</option>
                                <option value="shorts">Shorts</option>
                            </select>
                        </div>
                        <div className='mt-3 ml-3'>
                            <p className=' font-semibold text-gray-800'>Brand Type:</p>
                            <select className=' w-36 py-1 mt-1 rounded outline-none border-none'>
                                <option value="">All</option>
                                <option value="adidas">Adidas</option>
                                <option value="nike">Nike</option>
                                <option value="hermès">Hermès</option>
                                <option value="cartier">Cartier</option>
                                <option value="dior">Dior</option>
                                <option value="gucci">Gucci</option>
                            </select>
                        </div>
                        <div className='flex flex-col mt-3 px-4 gap-2'>
                        <p className=' font-semibold text-gray-800'>Filter price:</p>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>All</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>$10 - $100</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>$100 - $250</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>$250 - $400</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>$400 - $600</button>
                            <form className='flex flex-col gap-2'>
                                <input type="number" min={0} placeholder='min price...' className='pl-2 placeholder:text-sm rounded'/>
                                <input type="number" min={0} placeholder='max price...' className='pl-2 placeholder:text-sm rounded'/>
                                <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>Filter</button>
                            </form>
                        </div>
                    </div>
                    <div className=' col-span-1 md:col-span-2 lg:col-span-3'>
                        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
                        {
                            products.map((item, index)=>{
                                return <div key={index} className='p-2 border rounded-2xl hover:shadow-xl duration-300 hover:scale-105'>
                                    <Link to="/product/sdwkfkd">
                                        <div className='rounded-xl overflow-hidden relative'>
                                            <img src={item.img} alt={item.title}/>
                                            {item.featured && <p className=' absolute bottom-0 right-0 bg-[#FAAF00] px-3 py-1'>Featured</p>}
                                        </div>
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
                    
                    </div>
                    </div>
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
                <div className='mt-14'>
                    <SignupBanner/>
                    <Footer/>
                </div>
            </div>
            
        </div>
    )
}

export default SearchPage
