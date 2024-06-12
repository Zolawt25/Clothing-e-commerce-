import { useState } from 'react'
import Carts from '../components/Carts'
import Footer from '../components/Footer'
import emptyCart from "../../public/img/cart.png"
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom'




const KEY = `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`

const CartPage = ({carts, setCartChange, cartChange}) => {

  let subtotal = 0
  const [totaledArry, setTotaledArry] = useState([])
  const [stripeToken, setStripeToken] = useState({})
  const cartPrice = []
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  for (let i = 0; i < totaledArry.slice(0, carts.length).length; i++) {
    subtotal += totaledArry[i]
    }
    
  let stripeAmount = Number(subtotal.toString() + "00")

  const onToken = async(token) => {
    setStripeToken(token)
    try {
        setIsLoading(true)
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/create-payment-intent/`, {
            amount: stripeAmount, // amount in cents
            currency: 'usd',
            stripe_charge_id: stripeToken.id
        })
        setIsLoading(false)
        navigate("/success")
        return res
    } catch (error) {
        console.log(error)
    }
}
  console.log(cartPrice)
  return (
    <div>
       <div className='text-center bg-[image:url(/img/about/banner.png)] bg-cover bg-center py-14 px-4 sm:px-0'>
            <h3 className='text-gray-50 text-5xl sm:text-6xl  font-[500]'>#cart</h3>
            <p className='sm:text-lg text-gray-300 font-[400]'>Add your coupons code & save up to 70%!</p>
        </div>
        <div className='flex justify-center'>
            <div className='px-8 md:px-16 lg:px-24 mt-11 w-full overflow-x-scroll max-w-[1400px]'>
              <table className='text-center w-full min-w-[650px]'>
                <tr className=' border-y'>
                  <th className=' uppercase font-[480] py-3 text-gray-800'>Remove</th>
                  <th className=' uppercase font-[480] py-3 text-gray-800'>Image</th>
                  <th className=' uppercase font-[480] py-3 text-gray-800'>Product</th>
                  <th className=' uppercase font-[480] py-3 text-gray-800'>Price</th>
                  <th className=' uppercase font-[480] py-3 text-gray-800'>Quantity</th>
                  <th className=' uppercase font-[480] py-3 text-gray-800'>Subtotal</th>
                </tr>
                {
                  carts.map((item, index)=>{
                    return <Carts key={index} {...item} setTotaledArry={setTotaledArry} index={index} cartPrice={cartPrice} setCartChange={setCartChange} cartChange={cartChange}/>
                  })
                }
              </table>
              {carts.length === 0 && <div className='flex flex-col items-center justify-center mt-6'>
                <img src={emptyCart} alt="empty cart image" className='w-[100px] sm:w-[200px]'/>
                <p className='mt-4 text-2xl sm:text-3xl font-semibold text-gray-900'>your cart is empty :(</p>
              </div>}
          </div>
        </div>
      <div className='flex justify-center'>
          <div className='px-8 md:px-16 lg:px-24 mt-11 w-full max-w-[1400px]'>
            <p className=' text-gray-900 font-semibold text-2xl sm:text-3xl mb-2'>Apply Coupon</p>
            <form onSubmit={(e)=> e.preventDefault()}>
              <input type="text" placeholder='enter your coupon code...' className='border py-2 px-2 mr-3 w-[210px] sm:w-72 placeholder:font-normal rounded'/>
              <button className='bg-main text-gray-50 font-semibold px-5 py-2 rounded mt-3 sm:mt-0'>Apply</button>
            </form>
            <div className='mt-5 border w-[100%] sm:w-2/3 md:w-1/2 mb-20 p-4'>
              <p className=' text-gray-900 font-semibold  text-2xl sm:text-3xl mb-2'>Cart Totals</p>
              <div className='flex border mt-2'>
                <p className=' border-r flex-1 p-1 text-gray-600'>Cart Subtotal</p>
                <p className='flex-1 p-1 text-gray-600'>${subtotal}</p>
              </div>
              <div className='flex border mt-2'>
                <p className=' border-r flex-1 p-1 text-gray-600'>Shipping</p>
                <p className='flex-1 p-1 text-gray-600'>Free</p>
              </div>
              <div className='flex border mt-2'>
                <p className=' border-r flex-1 p-1 text-gray-900 font-semibold'>Total</p>
                <p className='flex-1 p-1 text-gray-900 font-semibold'>${subtotal}</p>
              </div>
              <StripeCheckout
                name="Cara"
                description={`Total price is ${subtotal}$`}
                image="https://cdn.dribbble.com/users/8322394/screenshots/16257129/media/52e02c3a2da5974e1f9d0d27de7ae5cb.jpg"
                shippingAddress
                billingAddress={false}
                amount={stripeAmount} //add two zeros
                currency="USD"
                stripeKey={KEY}
                token={onToken}
            >
              <button className='bg-main text-gray-50 font-semibold px-5 py-2 rounded mt-3'>{isLoading ? "Processing..." : "Checkout"}</button>
            </StripeCheckout>
              
            </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default CartPage
