import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Product from "../Product";
import Filters from "../Filters";
import "./ProductsList.css";

//Loading animation ring
import { ring } from 'ldrs'
ring.register()


export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortingMethod, setSortingMethod] = useState("0");
  const [selectedAge, setSelectedAge] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedBrands, setSelectedBrands] = useState([]); //Brand Checkboxes
  const [sortedProductsLength, setSortedProductsLength] = useState(0);

  //ONLY API CALL -- all products
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

  //Filtered Products for display
  useEffect(() => {
    // Filter products based on selected brands
    //Sort Method
    let sortedProducts = [...products];

    if (sortingMethod === "1") {
      sortedProducts.sort((a, b) => a.price - b.price); //Low to High
    } else if (sortingMethod === "2") {
      sortedProducts.sort((a, b) => b.price - a.price); //High to Low
    }

    sortedProducts = sortedProducts.filter(
      (product) =>
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand)) &&
        (selectedAge.length === 0 || selectedAge.includes(product.age)) &&
        (priceRange.min === "" ||
          parseInt(product.price) >= parseInt(priceRange.min)) &&
        (priceRange.max === "" ||
          parseInt(product.price) <= parseInt(priceRange.max))
    );
    setFilteredProducts(sortedProducts);
    //updating count for sorted products
    setSortedProductsLength(sortedProducts.length);
  }, [sortingMethod, selectedAge, priceRange, selectedBrands, products]);

  //Sorting Method
  const handleSortingMethodChange = (method) => {
    setSortingMethod(method);
  };

  //Age selections
  const handleAgeSelection = (age) => {
    // Check if the age is already selected for removal from list
    if (selectedAge.includes(age)) {
      // If selected, remove it from the list
      setSelectedAge(selectedAge.filter((item) => item !== age));
    } else {
      // If not selected, add it to the list of selected brands
      setSelectedAge([...selectedAge, age]);
    }
  };

  //Price Range Selection
  const handlePriceRangeSelect = (range) => {
    setPriceRange(range);
  };

  //Brand selections
  const handleBrandSelection = (brand) => {
    // Check if the brand is already selected for removal from list
    if (selectedBrands.includes(brand)) {
      // If selected, remove it from the list
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      // If not selected, add it to the list of selected brands
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  //Clear Filters
  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedAge([]);
    setPriceRange({ min: '', max: '' });
    setSortingMethod("0");

    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
};

  return (
    <>
      {/* for testing child parent passed values */}
      {/* <p>Selected Brands: {selectedBrands.join(', ')}</p>
        <p>Selected Age: {selectedAge.join(', ')}</p>
        <p>Selected Range: Min: {priceRange.min} Max: {priceRange.max}</p> */}
      {/* <p>Total Results: {sortedProductsLength}</p> */}
      {/* end testing */}

      <div className="custom_container">
        <div className="filters_wrapper">
          <Filters
            //total filtered count
            sortedProductsLength={sortedProductsLength}
            //value and method for sorting
            sortingMethod={sortingMethod}
            onSortingMethodChange={handleSortingMethodChange}
            //values to be exchanged between filters and parent
            onAgeSelect={handleAgeSelection}
            onPriceRangeSelect={handlePriceRangeSelect}
            onBrandSelect={handleBrandSelection}
            onClearFilters={handleClearFilters}
          />
        </div>
        <div className="products_list_wrapper">
          {loading ? (
            <div className="loader_ring">
                <l-ring
                    size="40"
                    stroke="5"
                    bg-opacity="0"
                    speed="2" 
                    color="#9ed8f0" 
                ></l-ring>
            </div>
          ) : selectedBrands.length === 0 &&
            selectedAge.length === 0 &&
            priceRange.min === "" &&
            priceRange.max === "" &&
            sortingMethod === "0" ? (
            // If no brands are selected
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            // Otherwise filtered products
            filteredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
      {/* <Product /> */}
    </>
  );
}

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
