import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "universal-cookie"
import BtnLoading from '../components/BtnLoading'






const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [emailError, setEmailError] = useState([])
  const [passwordError, setPasswordError] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const cookie = new Cookies()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/registration/`, {name, email, password1, password2})
      cookie.set("user_access_token", res.data.access_token)
      cookie.set("user_refresh_token", res.data.refresh_token)
      setIsLoading(false)
      navigate("/")
      window.location.reload()
    } catch (error) {
      setIsLoading(true)
      error.response.data.email && setEmailError(error.response.data.email)
      error.response.data.password1 && setPasswordError(error.response.data.password1)
      password1 !== password2 && setPasswordError(["password didn't match"])
      setIsLoading(false)
    }
  }
  
  return (
    <div className='flex items-center justify-center h-[88vh] px-4'>
        <div className='w-96 shadow-[0_0_7px_-1px_#597280] pt-4 pb-7 px-6'>
            <p className=' text-gray-800 text-3xl text-center mb-4'>Register</p>
            <form className='flex flex-col' onSubmit={(e)=> handleSubmit(e)}>
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="text" placeholder='enter your name...' required onChange={(e)=>setName(e.target.value)}/>
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="email" placeholder='enter your email...' required onChange={(e)=>setEmail(e.target.value)}/>
                {emailError.map(item =>(<p key={item} className=' text-sm text-red-600 mb-3'>{item}</p>))}
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="password" placeholder='enter your password...' required onChange={(e)=>setPassword1(e.target.value)}/>
                {passwordError.map(item =>(<p key={item} className=' text-sm text-red-600 mb-3'>{item}</p>))}
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="password" placeholder='confirm password...' required onChange={(e)=>setPassword2(e.target.value)}/>
                <button className='bg-main text-gray-50 py-1'>{isLoading ? <BtnLoading/> : "Register"}</button>
            </form>
            <p className='text-sm mt-4'>already have an account? <a href="/login" className='text-semibold text-main'>Login</a></p>
        </div>
    </div>
  )
}

export default Register
