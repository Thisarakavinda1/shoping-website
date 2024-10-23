import React from 'react';
import './items.css';
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="iprice">
        <div className="inew">${props.new_price}</div>
        <div className="iold">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Items;
