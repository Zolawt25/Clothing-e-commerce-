import ReactLoading from 'react-loading';






const BtnLoading = () => {
  return (
    <div className=' w-full flex justify-center items-center'>
      <ReactLoading type="spin" color="#ffff" height={"5%"} width={"5%"} />
    </div>
  )
}

export default BtnLoading
