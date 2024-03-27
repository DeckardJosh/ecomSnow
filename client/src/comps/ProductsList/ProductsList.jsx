import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import Product from '../Product';
import "./ProductsList.css";

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                console.log(data.length)
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    

  return (
    <>
        <span>products list</span>
        <div className="custom_container">
            <div className="filters_wrapper">
                test
            </div>
            <div className='products_list_wrapper'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    products.map((product) => {
                        return <Product key={product._id} product={product} />;
                    })
                )}
            </div>
        </div>
        {/* <Product /> */}
    </>
  );
};

ProductsList.propTypes = {
  //bidtypes: PropTypes.array,

  products: PropTypes.shape([
    {
        _id: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        group: PropTypes.string,
        price: PropTypes.number,
        age: PropTypes.string,
        size: PropTypes.array,
        rating: PropTypes.number,
        description: PropTypes.string,
    },
  ]),
};