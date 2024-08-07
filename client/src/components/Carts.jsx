import { DeleteOutline } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import DeleteLoading from './DeleteLoading';






const Carts = ({id, img, title, price, setTotaledArry, index, cartPrice, setCartChange, cartChange}) => {
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(price)
    const [isLoading, setIsLoading] = useState(false)
    
    
    useEffect(()=>{
        setTotal(quantity*price)
    },[quantity, cartChange])
    cartPrice[index] = total 
    useEffect(()=>{
        setTotaledArry(cartPrice)
    },[total, cartChange])

    useEffect(()=>{
        cartPrice = [...cartPrice, price]
    },[])

    const removeCart = async(id)=>{
        setIsLoading(true)
        !isLoading && await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/v1/cart/${id}/`)
        setCartChange(prev => !prev)
        // window.location.reload()
        setQuantity(1)
        setTotal(price)
        setIsLoading(false)
    }
    return (
        <tr className='py-2'>
            <td className=' text-red-500 cursor-pointer' onClick={()=> removeCart(id)}>{isLoading ? <DeleteLoading/> : <DeleteOutline style={{fontSize: "medium", cursor: "pointer"}}/>}</td>
            <td className='flex justify-center'><img src={img} className='w-[60px] py-3'/></td>
            <td className=' text-gray-700'>{title}</td>
            <td className=' text-gray-700'>${price}</td>
            <td className=' text-gray-700'><input className='w-[60px] text-center border rounded' type="number" name="" id=""  defaultValue={1} onChange={(e)=> {
                setQuantity(e.target.value)
                }} min={1}/></td>
            <td className=' text-gray-700'>${total}</td>
        </tr>
    )
}

export default Carts
