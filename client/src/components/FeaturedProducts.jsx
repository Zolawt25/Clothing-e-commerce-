import { useEffect, useState } from 'react'
import { productsList } from '../assets/products'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CartBtn from './CartBtn';
import axios from 'axios';
import Loading from './Loading';


const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setIsLoading(true)
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/products/`)
                const featuredProducts = res.data.filter((item)=>{
                        if (item.featured === true) {
                            return item
                        }
                    })
                setProducts(featuredProducts)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return (
        <div className='flex justify-center'>
            <div className=' px-10 sm:px-24 w-full max-w-[1400px]'>
                <h2 className=' text-center text-5xl font-bold text-gray-900 tracking-normal'>Featured Products</h2>
                <p className=' text-lg text-gray-400 text-center font-semibold mt-4'>Summer Collection New Modern Design</p>
                {isLoading && <div><Loading/></div>}
                <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-14'>
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
                                        <CartBtn/>
                                    </div>
                            </div>
                         })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default FeaturedProducts
