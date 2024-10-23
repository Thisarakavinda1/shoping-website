import React from 'react'
import'./ReltedProducts.css'
import data_product from '../../assets/data'
import Items from '../ITems/Items'
const ReltedProducts = () => {
  return (
    <div className='ReltedProducts'>
        <h1>Relted Products</h1>
        <hr/>
        <div className='ReltedProducts-item'>
            {data_product.map((item,i)=>{
                return <Items  key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} />

            })}

        </div>

    </div>
  )
}

export default ReltedProducts