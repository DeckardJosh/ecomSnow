import React from 'react';
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import "./Product.css";

import pic from "../../images/mens-snow-model.jpg";
// import image from "../../images/6600b74eea2de1bc6a324a87.jpg"

export default function Product({
    product: {
        _id,
        name,
        brand,
        price,
        age,
    }
}) {
    

  return (
    <>
    {/* for testing */}
    {/* <div className="products_list_testing_wrapper"> */}
    {/* {pic && <img src={require(`../../images/${pic}.jpg`).default} alt="not working" />} */}
        <div className='product_wrapper'>
            <Link to={`/products/${_id}`} className='product_link_wrapper'>
                <div className="product_image">
                    <img src={pic} alt="not working" />
                    {/* <img src={`../../images/${pic}.jpg`} alt="not working" /> */}
                    {/* <img src={image} alt="not working" /> */}
                    {/* <img src={require(`../../images/${pic}.jpg`).default} alt="not working" /> */}
                    {/* <img src={pic ? require(`../../images/${pic}.jpg`).default : require('../../images/mens-snow-model.jpg').default} alt="not working" /> */}

                </div>
                <div className="product_subcontent_wrapper">
                    <div className="product_content_row">
                        <h3 className="product_header">{brand} - {name}</h3>
                        <span>${price}</span>
                    </div>
                    <div className="product_age_row">
                        <p>{age}</p>
                    </div>
                </div>
            </Link>
        </div>

    {/* </div> */}
    </>
  );
};

Product.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    group: PropTypes.string,
    price: PropTypes.number,
    age: PropTypes.string,
    size: PropTypes.array,
    rating: PropTypes.number,
    description: PropTypes.string,
}