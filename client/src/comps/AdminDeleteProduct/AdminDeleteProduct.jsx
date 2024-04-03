import React, {useState, useEffect} from 'react';
import "./AdminDeleteProduct.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function AdminDeleteProduct(){
    const id = useParams();
    // console.log(id.id);
    const [paramID] = useState(id.id);
    const [productToDelete, setProductToDelete] = useState({});
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        const fetchDataByID = async () => {
            try {
                const response = await axios.get(`/admin/fe-delete/${paramID}`);
                setProductToDelete(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        if(setProductToDelete!=null){
            fetchDataByID();
        }
    }, [paramID]);

    const handleDelete = async () => {
        try {
            const response = await axios.post(`/admin/fe-delete/${paramID}`);
            console.log(response.data);
            setSuccess(true);
        } catch (error) {
            console.error(error);
        }
    };

return (
    <>
        {(success) ? (
            <div className="delete_confirmation_container">
                <div className="delete_success">
                    <p>You have successfully deleted that product.</p>
                    <a href='/admin' className='btn btn-success'>Back to Products</a>
                </div>
            </div>
        ):( 
            (productToDelete) ? (
                <div className="delete_confirmation_container">
                    <p>Are you sure you want to delete the following product?</p>
                    <ul className="list-group boot_list_group mb-2">
                        <li className="list-group-item">ID: {productToDelete._id}</li>
                        <li className="list-group-item">Name: {productToDelete.name}</li>
                        <li className="list-group-item">Brand: {productToDelete.brand}</li>
                        <li className="list-group-item">Age: {productToDelete.age}</li>
                        <li className="list-group-item">Price: {productToDelete.price}</li>
                    </ul>
                    <div className="delete_button_group">
                        <button className='btn btn-danger' onClick={handleDelete}>YES</button>
                        <a href="/admin" className='btn btn-dark'>NO</a>
                    </div>
                </div>
            ): (
                <div className="delete_confirmation_container">
                    <div className="delete_fail_lookup">
                        <p>There is no product with that ID to delete.</p>
                        <a href='/admin' className='btn btn-danger'>Back to Products</a>
                    </div>
                </div>
            )
        )}
    </>
);
};