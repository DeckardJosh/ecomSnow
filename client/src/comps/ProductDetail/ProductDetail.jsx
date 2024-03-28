import React from 'react';
import "./ProductDetail.css";
import pic from "../../images/mens-snow-model.jpg"

export default function ProductDetail() {
  return (
    <>
        <div className='product_detail_wrapper'>
            <div className="product_detail_column">
                <img src={pic} alt="Individual Pic" className='product_detail_picture' />
            </div>
            <div className="product_detail_column">
                <h1 className='product_name'>Snowboard Name</h1>
                <h2 className='product_age'>Mens</h2>
                <div className="product_rating_container">
                    <span>5</span>
                    <span>* stars</span>
                </div>
                <h3 className='product_price'>$500</h3>
                <div className="product_sub_images_container">
                    <img src={pic} alt="subimage" />
                    <img src={pic} alt="subimage2" />
                </div>
                <h3 className='product_select_size_header'>Select Size</h3>
                <div className="btn_sizes_container">
                    {/* needs active selector */}
                    <button className='btn btn-dark btn-lg'>size1</button>
                    <button className='btn btn-light btn-lg'>size2</button>
                    <button className='btn btn-light btn-lg'>size3</button>
                    <button className='btn btn-light btn-lg'>size4</button>
                </div>
                <p className='product_description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore assumenda pariatur et esse eligendi nostrum ratione numquam repellendus mollitia fuga quia aut, nulla perspiciatis ex ullam aliquam inventore, ab natus!</p>
                <button className='btn btn-dark btn-lg'>Add to cart</button>
            </div>
        </div>
    </>
  );
};
