import { SearchOutlined } from '@mui/icons-material'







const SearchBar = () => {
  return (
    <div className=' text-center bg-[image:url(/img/banner/b1.jpg)] bg-cover bg-center py-14'>
        <p className=' text-gray-50 text-6xl font-[500]'>#stayhome</p>
        <p className=' text-lg text-gray-300 font-[400]'>Save more with coupons & up to 70% off!</p>
       <div className='flex justify-center'>
            <form action="/search" className='flex mt-3 bg-gray-50 w-[420px] rounded-full overflow-hidden shadow-2xl'>
                <input className='w-[350px] pl-4 outline-none text-sm' type="search" name="search" placeholder='Search Products...'/>
                <button className='text-main font-semibold text-sm px-5 py-3'><SearchOutlined/></button>
            </form>
        </div>
    </div>
  )
}

export default SearchBar
