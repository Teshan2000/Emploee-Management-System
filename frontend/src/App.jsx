import './App.css'
import Header from './components/Header' 
import Sidebar from './components/Sidebar' 
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <div className='grid-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Header/>
        <Sidebar/>
        <Home/>
      </div> 
  )
}

export default App
