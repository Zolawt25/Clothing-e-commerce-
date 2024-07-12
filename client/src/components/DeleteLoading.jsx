import ReactLoading from 'react-loading';






const DeleteLoading = () => {
  return (
    <div className=' w-full flex items-end justify-center'>
      <ReactLoading type="spin" color="#EF4444" height={"10%"} width={"10%"} />
    </div>
  )
}

export default DeleteLoading
