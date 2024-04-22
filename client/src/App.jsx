import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';







function App() {
  

  return (
    <div>
      <Navbar/>
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
