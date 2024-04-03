import React from 'react';
// import axios from "axios";
import "./AdminProducts.css";

export default function AdminProducts({
  item: {
      _id,
      name,
      brand,
      age,
      price,
  },
  index
}) {
  // const [allProducts, setAllProducts] = useState([])

  return (
    <>
      { (index %2 !== 0) ? (
        <div className="admin_table_content odd">
          <div className="admin_table_column">{_id}</div>
          <div className="admin_table_column">{name}</div>
          <div className="admin_table_column">{brand}</div>
          <div className="admin_table_column">{age}</div>
          <div className="admin_table_column">{price}</div>
          <div className="admin_table_column">
            <a href={`/admin/products/edit/${_id}`} className="btn btn-secondary btn-md me-3">Edit</a>
            <a href={`/admin/products/delete/${_id}`} className="btn btn-danger btn-md">Delete</a>
          </div>
        </div> 
      ) : (
        <div className="admin_table_content">
          <div className="admin_table_column">{_id}</div>
          <div className="admin_table_column">{name}</div>
          <div className="admin_table_column">{brand}</div>
          <div className="admin_table_column">{age}</div>
          <div className="admin_table_column">{price}</div>
          <div className="admin_table_column">
            <a href={`/admin/products/edit/${_id}`} className="btn btn-secondary btn-md me-3">Edit</a>
            <a href={`/admin/products/delete/${_id}`} className="btn btn-danger btn-md">Delete</a>
          </div>
        </div> 
      )}
    </>
  );
};
