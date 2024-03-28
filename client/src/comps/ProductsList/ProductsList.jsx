import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import Product from '../Product';
import Filters from "../Filters"
import "./ProductsList.css";

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedAge, setSelectedAge] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]); //Brand Checkboxes

    //ONLY API CALL -- all products
    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => {
                console.log("api fetch called")
                // console.log(data);
                // console.log(data.length)
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    //Filtered Products for display
    useEffect(() => {
        // Filter products based on selected brands
        console.log("filtered")
        const filtered = products.filter(product => 
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (selectedAge.length === 0 || selectedAge.includes(product.age)));
        setFilteredProducts(filtered);
    }, [selectedAge, selectedBrands, products]);
    

    
    //Age selections
    const handleAgeSelection = (age) => {
        // Check if the brand is already selected for removal from list
        if(selectedAge.includes(age)){
            // If selected, remove it from the list
            setSelectedAge(selectedAge.filter(item => item !== age));
        } else {
            // If not selected, add it to the list of selected brands
            setSelectedAge([...selectedAge, age]);
        }
    };

    //Brand selections
    const handleBrandSelection = (brand) => {
        // Check if the brand is already selected for removal from list
        if (selectedBrands.includes(brand)) {
            // If selected, remove it from the list
            setSelectedBrands(selectedBrands.filter(item => item !== brand));
        } else {
            // If not selected, add it to the list of selected brands
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

  return (
    <>
    {/* for testing child parent passed values */}
        <p>Selected Brands: {selectedBrands.join(', ')}</p>
        <p>Selected Age: {selectedAge.join(', ')}</p>
    {/* end testing */}
    
        <div className="custom_container">
            <div className="filters_wrapper">
                <Filters
                    onAgeSelect={handleAgeSelection}
                    onBrandSelect={handleBrandSelection}
                />
            </div>
            <div className='products_list_wrapper'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    (selectedBrands.length === 0 && selectedAge.length === 0) ? (
                        // If no brands are selected
                        products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))
                    ) : (
                        // Otherwise filtered products
                        filteredProducts.map((product) => (
                            <Product key={product._id} product={product} />
                        ))
                    )
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