import React from 'react';
import "./CartItem.css";

export default function CartItem({
    item: {
        id,
        name,
        price,
        size
    }
}) {
  return (
    <>
        <div className="cart_item_container">
            <div className="cart_item_column">
                <p>{id}</p>
            </div>
            <div className="cart_item_column">
                <h2 className='cart_item_header'>{name}</h2>
                <p className="cart_price">${price}</p>
                <div className="cart_size_button">
                    <p className="cart_size">Size: {size}</p>
                    <button className='btn btn-dark btn-sm'>Remove</button>
                </div>
            </div>
        </div>
    </>
  )
}
