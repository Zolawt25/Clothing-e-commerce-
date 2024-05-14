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







function App() {
  
  // console.log(import.meta.env.VITE_SERVER_URL)
  return (
    <div className=''>
      <Navbar/>
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
