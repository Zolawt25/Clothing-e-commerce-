import { ShoppingCartOutlined } from '@mui/icons-material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie'
import BtnLoading from "./CartBtnLoading"







const CartBtn = ({text, id, img, title, price, setCartChange, carts, notification}) => {
  const [alreadyIn, setAlreadyIn] = useState(false)
  const cookie = new Cookies()
  const token = cookie.get("user_access_token")
  const decoded = token ? jwtDecode(token) : ""
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    carts.forEach(item => {
      if (id === item.productId) {
        setAlreadyIn(true)
      }
    });
  })

  const addToCart = async()=>{
    if (alreadyIn) {
      return notification ? notification("info", "It's already in the cart!") : alert("aaaaa")
    }
    if (!decoded) {
      return notification("error", "You must login first!")
    }
    setIsLoading(true)
    await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/cart/`, {productId: id, userEmail: decoded.email, img, title, price})
    setCartChange(prev => !prev)
    setIsLoading(false)
  }
  return (
    <div>
      {
      isLoading ? <div className='z-50 w-[35px] flex justify-center items-center border rounded-full bg-main p-1'>
        
        <BtnLoading/>
      </div> 
      :
      text? <div className='border rounded inline-block bg-main text-white cursor-pointer py-[6px] px-6'  onClick={()=> addToCart()}>Add To Cart</div> 
      :
      <div className='border rounded-full text-main inline-block bg-[#0d7e7327] hover:bg-main hover:text-white cursor-pointer py-[6px] px-[8px]' onClick={()=> addToCart()}>
        <ShoppingCartOutlined style={{fontSize: "20px"}}/>
      </div>
      // <div className='bg-black text-gray-50 py-1 h-16'>
        
      // </div>
    }
    
    </div>
    
  )
}

export default CartBtn
