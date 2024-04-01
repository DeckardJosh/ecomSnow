import React from 'react';
import "./Cart.css";
import CartItem from '../CartItem';
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";

export default function Cart({cart}) {

    const allCartItems = useSelector(selectCart);
    if(allCartItems && allCartItems.length>0){
      cart = allCartItems;
    }

  return (
    <>
        <div className="cart_container">
            {cart?.map((item, i) => {
                return <CartItem key={i} item={item} />
            })}
        </div>
    </>
  )
}
