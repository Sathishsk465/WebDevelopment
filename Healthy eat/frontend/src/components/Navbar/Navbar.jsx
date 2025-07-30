import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import cartImg from "../../../src/assets/cart (2).svg"
const Navbar = () => {
    const [menu,setMenu] = useState("home");
    

  return (
    <div className="navbar  sm:justify-between">
        <img src="src/assets/logo.png" alt="logo" className='logo ' />
        <ul className="navbar-menu hidden sm:flex">
           <Link to='/'> <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link>
           <a href="#menu"><li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li></a>
            <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Delivery</li>
            <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
        </ul>
        <div className="navbar-right ">
            <img src="src/assets/search-icon.svg" alt="search" className='hover:scale-130'/>
           <Link to="/cart"> <div className="search-icon">
                <img src={cartImg} alt="Cart" className='grayscale-100 hover:scale-130 hover:grayscale-0' />
                   <div className="dot hidden"></div>
             </div> 
            </Link>  
           <Link to="/signIn"> 
           <button onClick={()=>{}} className='hover:scale-125 hover:text-white hover:bg-green-700'>
            Sign in
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar