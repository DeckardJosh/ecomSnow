import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css";
import CartItem from '../CartItem';
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";

export default function Cart({cart}) {

    const allCartItems = useSelector(selectCart);
    const itemsToRender = cart && cart.length > 0 ? cart : allCartItems;

  return (
    <>
        <div className="cart_container">
            <h2>Your items:</h2>
        {itemsToRender && itemsToRender.length > 0 ? (
            <div>
                {itemsToRender.map((item, i) => (
                <CartItem key={i} item={item} />
                ))}
                <button className='btn btn-dark btn-md'>Checkout</button>
            </div>
        ) : (
            <div className="empty_cart">
                <p>Nothing in your cart!</p>
                <Link to="/products">
                    <button className='btn btn-dark btn-md'>
                        Go Shopping!
                    </button>
                </Link>
            </div>
        )}
        </div>
    </>
  )
}

/*
        {cart ? (
            cart.map((item, i) => {
                return <CartItem key={i} item={item} />
            })
        ) : (
            <div>
                <p>Nothing in your cart!</p>
                <p>Do some Shopping!</p>
            </div>
        )}
*/