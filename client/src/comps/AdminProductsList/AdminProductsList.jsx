import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./AdminProductsList.css";
import AdminProducts from '../AdminProducts/AdminProducts';

export default function AdminProductsList() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api');
                setAllProducts(response.data);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        fetchData();
    }, []);

    return (
    <>
        <div className="admin_all_container">
            <div className="admin_all_table">
                <div className="admin_table_header">
                    <div className="admin_table_column">ID</div>
                    <div className="admin_table_column">Name</div>
                    <div className="admin_table_column">Brand</div>
                    <div className="admin_table_column">Age</div>
                    <div className="admin_table_column">Price</div>
                    <div className="admin_table_column">
                        <span>Actions</span>
                        <a href="/admin/products/add" className="btn btn-success btn-sm ms-2">Add Product</a>
                    </div>
                </div>
                {allProducts.map((product, index) => (
                    <AdminProducts key={product._id} item={product} index={index}/>
                ))}
            </div>
        </div>
    </>
    );
};
