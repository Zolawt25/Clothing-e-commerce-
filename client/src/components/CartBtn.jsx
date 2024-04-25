import { ShoppingCartOutlined } from '@mui/icons-material'







const CartBtn = ({text}) => {
  return (
    <div>
      {
      text? <div className='border rounded inline-block bg-main text-white cursor-pointer py-[6px] px-6'>Add To Cart</div> 
      :
      <div className='border rounded-full text-main inline-block bg-[#0d7e7327] hover:bg-main hover:text-white cursor-pointer py-[6px] px-[8px]' onClick={()=> console.log("aaaaaa")}>
        <ShoppingCartOutlined style={{fontSize: "20px"}}/>
      </div>
    }
    
    </div>
    
  )
}

export default CartBtn
