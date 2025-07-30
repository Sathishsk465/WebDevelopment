import React from 'react'
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/home'
import { CartProvider } from './context/CartContext';
import CART from './pages/cart/Cart'
import SignIn from './pages/singin'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
export const App = () => {
  return (
    
    <div className="app" id='app-home'>
      <CartProvider>
      <Navbar/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<CART/>} />
        < Route path='/signIn' element={<SignIn/>} />
      </Routes>
      </CartProvider>


    </div>
    
  )
}

export default App
