import { ShoppingCartOutlined } from '@mui/icons-material'







const CartBtn = () => {
  return (
    <div className='border rounded-full text-main bg-[#0d7e7327] hover:bg-main hover:text-white cursor-pointer py-[6px] px-[8px]' onClick={()=> console.log("aaaaaa")}>
        <ShoppingCartOutlined style={{fontSize: "20px"}}/>
    </div>
  )
}

export default CartBtn
