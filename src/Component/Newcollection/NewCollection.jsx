import React from 'react'
import './New.css'
import newc from '../../assets/new_collections'
import Items from '../ITems/Items'


export default function NewCollection() {
  return (
    <div className='new'>
        <h1>New Collection</h1>
        <hr/>
        <div className='collection'>
            {newc.map((item,i) =>{
                return <Items  key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}/>
            })}

        </div>
    </div>
  )
}
