import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Menu from '../../components/explore menu/menu'
import FoodList from '../../components/explore item/foodlist'
import Popup from '../../components/explore item/popup'
import Footer from '../../components/footer/Footer'


const home = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <FoodList/>
        <Footer/>
      
    </div>
  )
}

export default home