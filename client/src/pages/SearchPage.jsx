import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material'
import { Link, useSearchParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CartBtn from '../components/CartBtn';
import SignupBanner from '../components/SignupBanner';
import Footer from '../components/Footer';
import axios from 'axios'
import Loading from '../components/Loading'






const SearchPage = ({setCartChange, carts, notification}) => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useSearchParams()
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const search = query.get("search")
    const postPerPage = 9
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const [totalPages, setTotalPages] = useState(0)
    // console.log(totalPages)
    let pages = []
    for (let i = 0; i < Math.ceil(totalPages/postPerPage); i++) {
        pages.push(i)
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                setIsLoading(true)
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/products/?min_price=${minPrice}&max_price=${maxPrice}&search=${search}&category=${category}&brand=${brand}`)
                setTotalPages(res.data.length)
                const currentPost = res.data.slice(firstPostIndex, lastPostIndex)
                setProducts(currentPost)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
           
        }
        fetchData()
    },[currentPage, category, brand, search, minPrice, maxPrice])

    const handlePriceForm = (e) =>{
        e.preventDefault()
        setMinPrice(e.target[0].value)
        setMaxPrice(e.target[1].value)
    }

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
                            <select className=' w-36 py-1 mt-1 rounded outline-none border-none' onChange={(e)=> setCategory(e.target.value)}>
                                <option value="">All</option>
                                <option value="shirt">Shirts</option>
                                <option value="t-shirt">T-shirts</option>
                                <option value="pants">Pants</option>
                                <option value="shorts">Shorts</option>
                            </select>
                        </div>
                        <div className='mt-3 ml-3'>
                            <p className=' font-semibold text-gray-800'>Brand Type:</p>
                            <select className=' w-36 py-1 mt-1 rounded outline-none border-none' onChange={(e)=> setBrand(e.target.value)}>
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
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50' onClick={()=>{setMinPrice(""), setMaxPrice("")}}>All</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50' onClick={()=>{setMinPrice(10), setMaxPrice(100)}}>$10 - $100</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50' onClick={()=>{setMinPrice(100), setMaxPrice(250)}}>$100 - $250</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50' onClick={()=>{setMinPrice(250), setMaxPrice(400)}}>$250 - $400</button>
                            <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50' onClick={()=>{setMinPrice(400), setMaxPrice(500)}}>$400 - $600</button>
                            <form className='flex flex-col gap-2' onSubmit={(e)=> handlePriceForm(e)}>
                                <input type="number" min={0} placeholder='min price...' className='pl-2 placeholder:text-sm rounded'/>
                                <input type="number" min={0} placeholder='max price...' className='pl-2 placeholder:text-sm rounded'/>
                                <button className=' rounded py-1 text-center bg-main font-semibold text-gray-50'>Filter</button>
                            </form>
                        </div>
                    </div>
                    <div className=' col-span-1 md:col-span-2 lg:col-span-3 text-gray-800'>
                        <div className=' mt-20'>
                            <p className=' text-xl font-semibold '>Search results for <span className=' font-bold text-main'>{search}</span></p>
                            {products.length === 0 && <p className='text-3xl font-semibold text-gray-800 mt-10'>sorry nothing found</p>}
                        </div>
                        {isLoading && <div><Loading/></div>}
                        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                        {
                            products.map((item, index)=>{
                                return <div key={index} className='p-2 border rounded-2xl hover:shadow-xl duration-300 hover:scale-105'>
                                    <Link to={`/product/${item.id}`}>
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
                                        <CartBtn {...item} setCartChange={setCartChange} carts={carts} notification={notification}/>
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
