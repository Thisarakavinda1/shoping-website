import React from 'react'
import'./Herow.css'
import hand from '../../assets/hand_icon.png'
import arrow from '../../assets/arrow.png'
import himage from '../../assets/hero_image.png'
function HERow() {
  return (
    <div className='hero'>
        <div className='left'>
            <h1>NEW ARRIVALA ONLY</h1>
            <div>
                <div className='hand-icon'>
                    <p>New</p>
                    <img src={hand} alt=""/>

                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-btn">
                <div>Last Collection</div>
                <img src={arrow} alt=""/>
            </div>

        </div>
        <div className='right'>
        <img src={himage} alt=""/>



        </div>
    </div>
  )
}

export default HERow