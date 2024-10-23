import React from 'react'
import './Offer.css'
import imge from '../../assets/exclusive_image.png'

function Offer() {
  return (
    <div className='offers'>
        <div className='left'>
            <h2>Exclusive</h2>
            <h2>Offer For You</h2>
            <p>ONLY BEST SELLING PRODUCT</p>
            <button>Check Now</button>
        </div>

        <div className='right'>
            <img src={imge} alt=''/>
        </div>

    </div>
  )
}

export default Offer