import React from 'react'







const Login = () => {
  return (
    <div className='flex items-center justify-center h-[88vh] px-4'>
        <div className='w-96 shadow-[0_0_7px_-1px_#597280] pt-4 pb-7 px-6'>
            <p className=' text-gray-800 text-3xl text-center mb-4'>Login</p>
            <form className='flex flex-col'>
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="email" placeholder='enter your email...' required/>
                <input className='bg-[#ebf2f7b2] border py-2 px-3 outline-none rounded text-sm mb-4' type="password" placeholder='enter your password...' required/>
                <button className='bg-main text-gray-50 py-1'>Login</button>
            </form>
            <p className='text-sm mt-4'>Don't have an account? <a href="/register" className='text-semibold text-main'>Register</a></p>
        </div>
    </div>
  )
}

export default Login
