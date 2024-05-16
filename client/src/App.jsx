import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ShopPage from './pages/ShopPage';
import DetailProduct from './pages/DetailProduct';
import SearchPage from './pages/SearchPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie'






function App() {
  const [carts, setCarts] = useState([])
  const [cartChange, setCartChange] = useState(false)
  const cookie = new Cookies()
  const token = cookie.get("user_access_token")
  const decoded = token ? jwtDecode(token) : ""

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/cart/`)
      const filterData = res.data.filter((item)=>{
          if (item.userEmail === decoded.email) {
            return item
          }
        })
      setCarts(filterData)
    }
    fetchData()
  },[cartChange])
  return (
    <div className=''>
      <Navbar carts={carts}/>
       <Router>
        <Routes>
          <Route path='/' element={<HomePage setCartChange={setCartChange} carts={carts}/>}/>
          <Route path='/shop' element={<ShopPage setCartChange={setCartChange} carts={carts}/>}/>
          <Route path='/product/:id' element={<DetailProduct setCartChange={setCartChange} carts={carts}/>}/>
          <Route path='/search' element={<SearchPage setCartChange={setCartChange} carts={carts}/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/cart' element={<CartPage carts={carts} setCartChange={setCartChange} cartChange={cartChange}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
