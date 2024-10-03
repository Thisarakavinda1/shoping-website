import React from 'react'
import Navbar from './Component/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Shop1 from './Component/page/Shop1';
import Shopcatogary from './Component/page/Shopcatogary';
import Product from './Component/page/Product';
import Cart from './Component/page/Cart';
import Login from './Component/page/Login';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={< Shop1 />} /> 
      <Route path="/mens" element={< Shopcatogary category="mens" />} />
      <Route path="/womens" element={< Shopcatogary category="women" />} />
      <Route path="/kids" element={< Shopcatogary category="kid" />} />
      <Route path="/product" element={< Product />}/>
      <Route path=':productId' element={< Product />}/>

      <Route path='/cart' element={< Cart />}/>
      <Route path='/login' element={< Login />}/>




      </Routes>
      </BrowserRouter>
      
       
    </div>
  )
}

export default App