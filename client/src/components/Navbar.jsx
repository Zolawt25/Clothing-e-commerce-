import { useState } from 'react'
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';






const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const changBackground = ()=>{

        if(window.scrollY >= 40){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changBackground)
    return (
        <div className={`flex justify-between items-center px-24 py-4 sticky top-0 bg-navbg z-50 ${navbar && "shadow-lg"}`}>
        <div><a href="/"><img src="/img/logo.png" alt="logo" /></a></div>
        <div className='flex items-center w-1/3'>
            <a href="/" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Home</a>
            <a href="/shop" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Shop</a>
            {/* <a href="/" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Blog</a> */}
            <a href="/" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>About</a>
            <a href="/" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Contact</a>
            <a href="/" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>
                <Badge badgeContent={1} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </a>
            <a href="/" className=' bg-main px-6 py-2 rounded-full text-white'>Login</a>
        </div>
        </div>
    )
}

export default Navbar
