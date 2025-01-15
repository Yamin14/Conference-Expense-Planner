import React from 'react'
import '../Styles/navbar.css'
import '../Styles/productSelection.css'
import NavBar from '../Components/NavBar'
import RoomSelection from '../Components/RoomSelection'
import AddOnsSelection from '../Components/AddOnsSelection'
import MealsSelection from '../Components/MealsSelection'
import { Helmet } from 'react-helmet'

const ProductSelection = () => {
  return (
    <>
      <Helmet>
        <body className='productBody'>
        </body>
      </Helmet>
      <NavBar />
      <RoomSelection />
      <AddOnsSelection />
      <MealsSelection />
    </>
  )
}

export default ProductSelection