import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ShopPage from './pages/ShopPage';
import DetailProduct from './pages/DetailProduct';
import SearchPage from './pages/SearchPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';







function App() {
  

  return (
    <div>
      <Navbar/>
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
