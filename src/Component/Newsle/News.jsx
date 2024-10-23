import React from 'react'
import './News.css'

function News() {
  return (
    <div className='news'>
        <h1>Get Exclusive Offer On You Email</h1>
        <p>Subscribe and stay updated</p>
        <div>
            <input typr="email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default News