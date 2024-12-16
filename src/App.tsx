
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ProductSelection from './Components/ProductSelection'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-selection' element={<ProductSelection />} />
      </Routes>
      
    </>
  )
}

export default App
