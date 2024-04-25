import { useEffect, useState } from 'react'
import { productsList } from '../assets/products'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CartBtn from './CartBtn';





const NewProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchData = ()=>{
            const res = productsList.filter((item)=>{
                if (item.featured === false) {
                   return item
                }
            })
            setProducts(res)
        }
        fetchData()
    },[])
    return (
        <div className='px-24'>
            <h2 className=' text-center text-5xl font-bold text-gray-900 tracking-normal'>New Arrivals</h2>
            <p className=' text-lg text-gray-400 text-center font-semibold mt-4 mb-14'>Summer Collection New Modern Design</p>
            <div className=' grid grid-cols-4 gap-8'>
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
        </div>
    )
}

export default NewProducts
