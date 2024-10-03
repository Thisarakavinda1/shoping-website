import React, { useState } from 'react'
import './Nav.css'
import logo from  '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
 
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo"/>
            <p>Shoping with us</p>
        </div>
        <ul className="menu">
            <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("women")}}><Link style={{textDecoration:'none'}}to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li> 
            <li onClick={() =>{setMenu("kids" )}}><Link style={{textDecoration:'none'}} to='/kids'>KIds</Link>{menu==="kids"?<hr/>:<></>}</li>
 
        </ul>

        <div className=" nav-logo-cart">
          <Link to='/login'> <button>LOGIN</button></Link> 
          <Link to="/carts"><img src={cart}/></Link>
            <div className="cart-count">0</div>

        </div>

    </div>
  )
}

export default Navbar