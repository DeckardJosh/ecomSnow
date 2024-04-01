import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css";
import CartItem from '../CartItem';
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart({cart}) {

    const allCartItems = useSelector(selectCart);
    const itemsToRender = cart && cart.length > 0 ? cart : allCartItems;

    const totalPrice = itemsToRender.reduce((total, item) => total + item.price, 0);

    const notify = () => toast.success('This feature is currently disabled.', {
        position: "top-right",
        autoClose: 3000, // Auto close after 2 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

  return (
    <>
        <div className="cart_container">
            <h2>Your items:</h2>
        {itemsToRender && itemsToRender.length > 0 ? (
            <div>
                {itemsToRender.map((item, i) => (
                <CartItem key={i} item={item} />
                ))}
                <div className="cart_price_button">
                    <button className='btn btn-dark btn-md' onClick={notify}>Checkout</button>
                    <h3 className='cart_price_total'>Total Price: ${totalPrice}</h3>
                </div>
                <ToastContainer />
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
