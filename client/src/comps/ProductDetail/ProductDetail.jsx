import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import pic from "../../images/mens-snow-model.jpg";

import {useDispatch} from "react-redux";
import {addNewCartItem} from "../../redux/cartSlice"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Loading animation ring
import { ring } from "ldrs";
ring.register();

export default function ProductDetail({newObj}) {
  //Redux
  const dispatch = useDispatch();


  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && products.length > 0 && id) {
      const foundProduct = products.find((product) => product._id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error(`Product with ID ${id} not found`);
      }
    }
  }, [loading, products, id]);

  if (loading) {
    return (
      <div className="loading_container">
        <l-ring
          size="40"
          stroke="5"
          bg-opacity="0"
          speed="2"
          color="#9ed8f0"
        ></l-ring>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

    const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
        stars.push(<span key={i} className="star-icon full">☆</span>);
        } else {
        stars.push(<span key={i} className="star-icon">☆</span>);
        }
    }
    return stars;
    };

    
  //Redux
  const addToReduxStore = () => {
    if (!selectedSize) {
      // If no size is selected, do not add to cart
      return;
    }

    let newObj = {
      id: product._id,
      name: product.name,
      price: product.price,
      size: selectedSize
    }
    // console.log(newObj)

    // Show a toast message
    toast.success('Item added to cart!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch(addNewCartItem(newObj))
  }

  return (
    <>
      {/* <div className="testing">
        {product.name}
    </div> */}
      <div className="product_detail_wrapper">
        <div className="product_detail_column">
          <img
            src={pic}
            alt="Individual Pic"
            className="product_detail_picture"
          />
        </div>
        <div className="product_detail_column">
          <h1 className="product_name">
            {product.brand} - {product.name}
          </h1>
          <h2 className="product_age">{product.age}</h2>
          <div className="product_rating_container">
                {renderStars()}
          </div>
          <h3 className="product_price">${product.price}</h3>
          <div className="product_sub_images_container">
            <img src={pic} alt="subimage" />
            <img src={pic} alt="subimage2" />
          </div>
          <h3 className="product_select_size_header">Select Size</h3>
          <div className="btn_sizes_container">
            {product.size.map((size, index) => (
              <button className={`btn btn-dark btn-lg cust_button ${selectedSize === size ? 'active' : ''}`} key={index} onClick={()=>{setSelectedSize(size)}}>
                {size}
              </button>
            ))}
          </div>
          <p className="product_description">{product.description}</p>

          <button className="btn btn-dark btn-lg" onClick={() => addToReduxStore()}>Add to cart</button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
