import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../../assets/dropdown_icon.png'
import Items from '../ITems/Items';
import './css/catogary.css'
const Shopcatogary= (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-catogary'>
      <img className='banner'src={props.banner} />
      <div className='indexshort'>
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className='sort'>
        sort by <img src={dropdown} alt=""/>

        </div>
      </div>
      <div className='product'>
          {all_product.map((item,i)=>{
            if (props.category===item.category){
              return < Items key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}/>

            }
            else
            return null;

          })}

      </div>

      <div className='lodmore'>
        Expere more

      </div>

      
      </div>
  )
}

export default Shopcatogary