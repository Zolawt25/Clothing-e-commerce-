import React from 'react'
import ReactLoading from 'react-loading';






const Loading = () => {
  return (
    <div className=' w-full flex justify-center items-center h-[50vh]'>
      <ReactLoading type="bubbles" color="#0D7E73" height={"12%"} width={"12%"} />
    </div>
  )
}

export default Loading
