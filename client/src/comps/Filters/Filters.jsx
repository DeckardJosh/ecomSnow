import React, {useState, useEffect} from 'react';
import "./Filters.css";

export default function Filters({
    sortedProductsLength,
    sortingMethod,
    onSortingMethodChange,
    onAgeSelect, //Used for passing selected age back and forth chilc/parent
    onPriceRangeSelect, //Used for passing selected price ranges back and forth child/parent
    onBrandSelect, //Used for passing selected brand back and forth child/parent
    onClearFilters
}) {
    //Price Range
    const [priceRange, setPriceRange] = useState({ min: '', max: '' })
    // Brand Names
    const [items, setItems] = useState([
        { id: 1, label: 'Forum' },
        { id: 2, label: 'Armada' },
        { id: 3, label: 'ThirtyTwo' },
        { id: 4, label: 'Smith' },
        { id: 5, label: 'Union' },
        { id: 6, label: 'Saloman' },
        { id: 7, label: 'Burton' },
        { id: 8, label: 'K2' },
        { id: 9, label: 'Line' },
        { id: 10, label: 'Oakley' }
      ]);
    //TODO Find how to solve the eslint warning regarding empty dependency array on the below use effect, without endlessly running it ----------------------------------
    useEffect(() => {
        //Sort by A-Z
        const sortedItems = [...items].sort((a, b) => a.label.localeCompare(b.label));
        setItems(sortedItems);
    }, []);
      
    //Sorting Method
    const handleSortingMethodChange = (event) => {
        onSortingMethodChange(event.target.value);
    };

    //Age Checkbox
    const handleAgeCheckbox = (event) => {
        const age = event.target.value;
        onAgeSelect(age);
    }

    //Price Range
    const handlePriceRangeChange = (event) => {
        const { name, value } = event.target;
        setPriceRange({ ...priceRange, [name]: value });
    }
    const handleApplyPriceRange = () => {
        onPriceRangeSelect(priceRange);
    }

    // Brand checkbox 
    const handleBrandCheckbox = (event) => {
        const brand = event.target.value;
        onBrandSelect(brand);
    }

    //Clear Filters
    const handleClearFilters = () => {
        onClearFilters();
    };
    
  return (
    <>
        <div className='filters_selections_wrapper'>
            <h2 className='filter_header'>Filters</h2>
            <div className="results_clear_container">
                <span className='filtered_results_count'>Results: {sortedProductsLength}</span>
                <button type='button' className='btn btn-sm btn-danger button_apply' onClick={handleClearFilters}>Clear</button>
            </div>
            <hr />

        {/* Sorting */}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Sort By</h3>
                <select className="form-select form-select-sm filter_sort" aria-label="Small select example" value={sortingMethod} onChange={handleSortingMethodChange}>
                    <option defaultValue={"0"}>Default</option>
                    <option value="1">Price: Low to High</option>
                    <option value="2">Price: High to Low</option>
                </select>
            </div>
            <hr />

        {/* Gender COMPLETED*/}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Age</h3>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="mens" id="mensCheckbox" onChange={handleAgeCheckbox}/>
                    <label className="form-check-label" htmlFor="mensCheckbox">
                        Mens
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="womens" id="womensCheckbox" onChange={handleAgeCheckbox}/>
                    <label className="form-check-label" htmlFor="womensCheckbox">
                        Womens
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="kids" id="kidsCheckbox" onChange={handleAgeCheckbox}/>
                    <label className="form-check-label" htmlFor="kidsCheckbox">
                        Kids
                    </label>
                </div>
            </div>
            <hr />

        {/* Price Range COMPLETED*/}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Price</h3>
                <div className="filter_range_container">
                    <input type="number" inputMode='numeric' placeholder='Min-Price' name='min' value={priceRange.min} onChange={handlePriceRangeChange}/>
                    <span>-</span>
                    <input type="number" inputMode='numeric' placeholder='Max-Price' name='max' value={priceRange.max} onChange={handlePriceRangeChange}/>
                </div>
                <button type='button' className='btn btn-sm btn-primary button_apply' onClick={handleApplyPriceRange}>Apply</button>
            </div>
            <hr />

        {/* Brand  COMPLETED */}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Brand</h3>
                {items.map(item => (
                    <div className="form-check" key={item.id}>
                    <input className="form-check-input" type="checkbox" value={item.label} id={`flexCheck${item.id}`} onChange={handleBrandCheckbox}/>
                    <label className="form-check-label" htmlFor={`flexCheck${item.id}`}>
                        {item.label}
                    </label>
                    </div>
                ))}
            </div>
            
        </div>
    </>
  );
};
