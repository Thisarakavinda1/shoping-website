import React from 'react'
import './Fotter.css'
import logo from '../../assets/logo_big.png'
import ins from '../../assets/instagram_icon.png'
import pin from '../../assets/pintester_icon.png'
import whats from '../../assets/whatsapp_icon.png'

function Fotter() {
  return (
    <div className='footer'>
        <div className='logo'>
            <img src={logo} alt=''/>
            <p>PickNBuy</p>
        </div>
        <ul className='link'>
            <li>Company</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>
        <div className='icon'>
            <div className='contanir'>
                <img src={ins} alt=''/>
            </div>
            <div className='contanir'>
                <img src={pin} alt=''/>
            </div>
            <div className='contanir'>
                <img src={whats} alt=''/>
            </div>
        </div>
        <div className='copyright'>
            <hr/>
            <p>Copyright @ 2024 ~ All Right Reserved. </p>
        </div>

    </div>
  )
}

export default Fotter