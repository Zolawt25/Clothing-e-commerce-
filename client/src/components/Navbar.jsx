import { useState } from 'react'
import Badge from '@mui/material/Badge';
import { Menu, ShoppingCartOutlined } from '@mui/icons-material';
// import { Menu } from '@mui/material';






const Navbar = ({carts}) => {
    const [navbar, setNavbar] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    const changBackground = ()=>{

        if(window.scrollY >= 40){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changBackground)
    return (
        <div className={`${navbar && "shadow-lg"} flex justify-center bg-navbg sticky top-0 z-50`}>
                <div className={`flex justify-between items-center px-10 py-3 sm:px-16 md:px-24 md:py-4  bg-navbg z-50 relative ${!isOpen && "overflow-hidden"} w-full max-w-[1400px]`}>
            <div><a href="/"><img src="/img/logo.png" alt="logo" /></a></div>
            <div className='flex items-center'>
                <div className={`flex items-center flex-col border-l duration-300 absolute top-0 ${isOpen ? "right-0" : "right-[-1000px]"} bg-navbg h-screen w-[90vw] sm:w-[60vw] justify-center text-xl gap-10 md:relative md:flex-row md:bg-transparent md:w-auto md:h-auto z-30 md:text-[15px] md:justify-normal md:gap-0 md:right-0`}>
                    <a href="/" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Home</a>
                    <a href="/shop" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Shop</a>
                    <a href="/about" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>About</a>
                    <a href="/contact" className=' hover:text-main text-md font-medium mr-7 text-gray-800'>Contact</a>
                    <button className='md:hidden absolute top-7 left-10 text-4xl text-gray-800' onClick={()=> setIsOpen(false)}>x</button>
                </div>
                <a href="/cart" className=' hover:text-main text-sm font-medium mr-4 md:mr-7 text-gray-800'>
                        <Badge badgeContent={carts.length} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </a>
                <a href="/login" className=' bg-main px-4 py-1 text-sm sm:text-[15px] sm:px-6 sm:py-2 rounded-full text-white'>Login</a>
                <button className='ml-4 md:hidden' onClick={()=> setIsOpen(true)}><Menu/></button>
            </div>
            
            </div>
        </div>
        
    )
}

export default Navbar
