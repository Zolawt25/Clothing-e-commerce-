import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ShopPage from './pages/ShopPage';
import DetailProduct from './pages/DetailProduct';







function App() {
  

  return (
    <div>
      <Navbar/>
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/product/:id' element={<DetailProduct/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
