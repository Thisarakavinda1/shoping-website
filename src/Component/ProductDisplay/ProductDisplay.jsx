import React, { useContext } from 'react';
import './product.css';
import stari from '../../assets/star_icon.png';
import stard from '../../assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const {addToCart} =useContext(ShopContext);
  return (
    <div className='ProductDisplay'>
      <div className='ProductDisplay-left'>
        <div className='img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />

        </div>
        <div className='image'>
          <img className='main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='ProductDisplay-right'>
        <h1>{product.name}</h1>
        <div className='star'>
          <img src={stari} alt='' />
          <img src={stari} alt='' />
          <img src={stari} alt='' />
          <img src={stard} alt='' />
          <p>(123)</p>
        </div>
        <div className='right-price'>
          <div className='old-price'>${product.old_price}</div>
          <div className='new-price'>${product.new_price}</div>

        </div>
        <div className='description'>
          A light , usually knitted,pullover shirt, close-fitting and short sleeves,worm as an undershirt.
        </div>
        <div className='size'>
          <h1>Select size</h1>
          <div className='sizes'><div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
          </div>
          
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='add-to'>Add To Cart</button>
        <p className='category'><span className=''>Category :</span>women ,T-Shart ,Crop Top</p>
        <p className='category'><span>Tags :</span>Modern, Latest </p>

      </div>
    </div>
  );
};

export default ProductDisplay;
