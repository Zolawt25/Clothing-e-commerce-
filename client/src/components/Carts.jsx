import { DeleteOutline } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'







const Carts = ({img, title, price, setTotaledArry, index, cartPrice}) => {
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(price)
    
    
    useEffect(()=>{
        setTotal(quantity*price)
    },[quantity])
    cartPrice[index] = total 
    useEffect(()=>{
        setTotaledArry(cartPrice)
    },[total])

    useEffect(()=>{
        cartPrice = [...cartPrice, price]
    },[])
    return (
        <tr className='py-2'>
            <td className=' text-red-500'><DeleteOutline style={{fontSize: "medium", cursor: "pointer"}}/></td>
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
