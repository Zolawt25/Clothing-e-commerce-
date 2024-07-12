import ReactLoading from 'react-loading';






const CartBtnLoading = () => {
  return (
    <div className=' w-full flex items-end justify-center'>
      <ReactLoading type="spin" color="#fff" height={"80%"} width={"80%"} />
    </div>
  )
}

export default CartBtnLoading
