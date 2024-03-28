import React, {useState, useEffect} from 'react';
import "./Filters.css";

export default function Filters({
    onAgeSelect, //Used for passing selected age back and forth chilc/parent
    onBrandSelect, //Used for passing selected brand back and forth child/parent
}) {

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
      

    //Age Checkbox
    const handleAgeCheckbox = (event) => {
        const age = event.target.value;
        onAgeSelect(age);
    }

    // Brand checkbox 
    const handleBrandCheckbox = (event) => {
        const brand = event.target.value;
        onBrandSelect(brand);
    }
    
  return (
    <>
        <div className='filters_selections_wrapper'>
            <h2 className='filter_header'>Filters</h2>
            <hr />

        {/* Sorting */}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Sort By</h3>
                <select className="form-select form-select-sm filter_sort" aria-label="Small select example">
                    <option defaultValue={"0"}>Default</option>
                    <option value="1">Price: Low to High</option>
                    <option value="2">Price: High to Low</option>
                </select>
            </div>
            <hr />

        {/* Gender */}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Age</h3>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="mens" id="flexCheckDefault" onChange={handleAgeCheckbox}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Mens
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="womens" id="flexCheckChecked" onChange={handleAgeCheckbox}/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Womens
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="kids" id="flexCheckChecked" onChange={handleAgeCheckbox}/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Kids
                    </label>
                </div>
            </div>
            <hr />

        {/* Price Range */}
            <div className="filter_sub_container">
                <h3 className='filter_sub_header'>Price</h3>
                <div className="filter_range_container">
                    <input type="number" inputMode='numeric' />
                    <span>-</span>
                    <input type="number" inputMode='numeric' />
                </div>
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
