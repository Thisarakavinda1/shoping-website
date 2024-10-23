import React, { useContext } from 'react'
import'./CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import remove from '../../assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
  return (
    <div className='CartItems'>
        <div className='format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
       {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
            <div className='cartitems-format format-main'>
                <img src={e.image} alt='' className='cart-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img src={remove} onClick={()=>{removeFromCart(e.id)}} alt='' className='remove-icon'/>

            </div>
            <hr/>
        </div>

        }
        return null;
       })}
       <div className='down'>
       <div className='cartitms-total'>
        <h1>Cart Totall</h1>
        <div>
            <div className='cartitms-total-itms'>
                <p>Subtatal</p>
                <p>${getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className='cartitms-total-itms'>
                <p>Shipping Fee</p>
                <p>Free</p>
                </div>
                <hr/>
                <div className='cartitms-total-itms'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>

                </div>
        </div>
        <button className='tk'>Proceed To Checkout</button>
       </div>
       



    </div>
    </div>
  )
}

export default CartItems