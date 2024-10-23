import React from 'react';
import './Populor.css';
import data from '../../assets/data';
import Items from '../ITems/Items';

function Populor() {
  return (
    <div className='populor'>
        <h1>Popular in Women</h1>
        <hr/>
        <div className="populor-item">
            {data.map((item,i) => {
                return( 
                  <Items
                    key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price} 
                  />
            )
            })}
        </div>
    </div>
  )
}

export default Populor;
