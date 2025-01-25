
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ProductSelection from './Pages/ProductSelection'
import Total from './Pages/Total'

function App() {
  return (
    <>
      <Routes>
        <Route path='/conference-expense-planner' element={<Home />} />
        <Route path='/product-selection' element={<ProductSelection />} />
        <Route path='/total' element={<Total />} />
      </Routes>
      
    </>
  )
}

export default App
