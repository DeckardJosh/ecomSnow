import React from 'react';
import "./CartItem.css";

import {useDispatch} from "react-redux";
import {removeCartItem} from "../../redux/cartSlice"

export default function CartItem({
    item: {
        id,
        name,
        price,
        size
    }
}) {

    const dispatch = useDispatch();

    const removeFromReduxStore = () => {
        let oldObject = {
            id: id,
            name: name,
            price: price,
            size: size
        };
        // console.log(oldObject)
        dispatch(removeCartItem(oldObject));
    }

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
                    <button className='btn btn-dark btn-sm' onClick={() => {removeFromReduxStore()}}>Remove</button>
                </div>
            </div>
        </div>
    </>
  )
}
