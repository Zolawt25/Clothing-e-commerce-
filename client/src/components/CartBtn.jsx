import { ShoppingCartOutlined } from '@mui/icons-material'
import axios from 'axios'







const CartBtn = ({text, id, img, title, price, setCartChange}) => {

  const addToCart = async()=>{
    await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/cart/`, {productId: id, userEmail: "zelalem@gmail.com", img, title, price})
    setCartChange(prev => !prev)
  }
  return (
    <div>
      {
      text? <div className='border rounded inline-block bg-main text-white cursor-pointer py-[6px] px-6'  onClick={()=> addToCart()}>Add To Cart</div> 
      :
      <div className='border rounded-full text-main inline-block bg-[#0d7e7327] hover:bg-main hover:text-white cursor-pointer py-[6px] px-[8px]' onClick={()=> addToCart()}>
        <ShoppingCartOutlined style={{fontSize: "20px"}}/>
      </div>
    }
    
    </div>
    
  )
}

export default CartBtn
