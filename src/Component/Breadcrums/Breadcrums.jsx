import React from 'react';
import'./breadcrums.css'

import icon from '../../assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
  return (
    <div className='Breadcrums'>
      HOME <img src={icon} alt="" /> SHOP <img src={icon} alt='' />
      {product.category} <img src={icon} alt='' /> {product.name}
    </div>
  );
}

export default Breadcrums;
