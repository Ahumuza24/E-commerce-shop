import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const[menu,SetMenu] = useState('home');
  return (
    <div className='navbar'>
     <div className='nav-logo'> 
     <img src = {logo} alt = '' />
     <p>JOSE CEDRIC</p>
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>{SetMenu('home')}}>Home{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu('categories')}}>Categories{menu==="categories"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu('new arrivals')}}>New Arrivals{menu==="new arrivals"?<hr/>:<></>}</li>
        <li onClick={()=>{SetMenu('contact us')}}>Contact Us{menu==="contact us"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className='nav-cart-count'>0</div>
    </div>
    </div>
  )
}

export default Navbar