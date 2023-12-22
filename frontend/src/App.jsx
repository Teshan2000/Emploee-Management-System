import './App.css'
import Header from './components/Header' 
import Sidebar from './components/Sidebar' 
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App
