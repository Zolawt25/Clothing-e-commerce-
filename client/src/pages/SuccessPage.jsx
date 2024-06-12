import { CheckCircle } from '@mui/icons-material'
import React from 'react'








const SuccessPage = () => {
  return (
      <div className='w-full h-[88vh] flex flex-col items-center justify-center'>
        <CheckCircle style={{fontSize: "60px", color: "#0D7E73"}}/>
        <h2 className='my-2 text-4xl font-semibold text-gray-800'>Your Payment Is Successfull!</h2>
        <p className='text-2xl font-semibold text-gray-800'>Thank You For Shopping With As!</p>
        <a href="/" className='bg-main text-white px-6 py-2 mt-3 rounded'>Back To Home</a>
      </div>
  )
}

export default SuccessPage
