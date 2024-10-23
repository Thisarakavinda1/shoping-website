import React, { useContext, useState } from 'react'
import './Nav.css'
import logo from  '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
 
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo"/>
            <p>PickNBuy</p>
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
            <div className="cart-count">{getTotalCartItems()}</div>

        </div>

    </div>
  )
}

export default Navbar