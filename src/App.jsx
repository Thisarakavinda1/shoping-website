import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navbar from './Component/navbar/Navbar';
import Shop1 from './Component/page/Shop1';
import Shopcatogary from './Component/page/Shopcatogary';
import Product from './Component/page/Product';
import Cart from './Component/page/Cart';
import Login from './Component/page/Login';
import Fotter from './Component/Fotter/Fotter';
import men from './assets/banner_mens.png';
import women from './assets/women.png';
import kid from './assets/banner_kids.png';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Shop1 />} /> 
          <Route path="/mens" element={< Shopcatogary banner={men} category="men" />} />
          <Route path="/women" element={< Shopcatogary banner={women} category="women" />} />
          <Route path="/kids" element={< Shopcatogary banner={kid} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} /> {/* Ensure this is correct */}

          <Route path='/carts' element={< Cart />} />
          <Route path='/login' element={< Login />} />
          </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
