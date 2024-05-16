import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "universal-cookie"
import BtnLoading from '../components/BtnLoading'
import axios from 'axios'








const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState([])
  const cookie = new Cookies()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault(e)
    try {
      setIsLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login/`, {email, password})
      cookie.set("user_access_token", res.data.access_token)
      cookie.set("user_refresh_token", res.data.refresh_token)
      setIsLoading(false)
      navigate("/")
      window.location.reload()
    } catch (error) {
      setIsLoading(false)
      error.response.data.non_field_errors && setError(error.response.data.non_field_errors)
    }
  }
  return (
    <div className='flex items-center justify-center h-[88vh] px-4'>
        <div className='w-96 shadow-[0_0_7px_-1px_#597280] pt-4 pb-7 px-6'>
            <p className=' text-gray-800 text-3xl text-center mb-4'>Login</p>
            <form className='flex flex-col' onSubmit={(e)=>handleSubmit(e)}>
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="email" placeholder='enter your email...' required onChange={(e)=>setEmail(e.target.value)}/>
                {error.map(item =>(<p key={item} className=' text-sm text-red-600 mb-3'>{item}</p>))}
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="password" placeholder='enter your password...' required onChange={(e)=>setPassword(e.target.value)}/>
                <button className='bg-main text-gray-50 py-1'>{isLoading ? <BtnLoading/> : "Login"}</button>
            </form>
            <p className='text-sm mt-4'>Don't have an account? <a href="/register" className='text-semibold text-main'>Register</a></p>
        </div>
    </div>
  )
}

export default Login
