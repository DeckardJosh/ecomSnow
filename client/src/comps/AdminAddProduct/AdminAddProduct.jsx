import React, {useState} from 'react';
import axios from 'axios';
import "./AdminAddProduct.css"

export default function AdminAddProduct(){
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false)

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await axios.post('/admin/api/add', formData);
            // console.log(response.data);

            setSubmitted(true)
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

return (
    <>
        <div className="admin_add_container">
            {(submitted) ? (
                <div className="admin_add_success">
                    <p>You have added a new product!</p>
                    <div className="admin_add_success_buttons">
                        <a href='/admin/products/add' className='btn btn-primary btn-md me-4'>Add Another</a>
                        <a href='/admin' className='btn btn-danger btn-md'>Back to Products</a>
                    </div>
                </div>
            ):(
            <form onSubmit={handleOnSubmit} className='admin_add_subcontainer'>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="nameInput">Name:</label>
                        <input type="text" className="form-control" id="nameInput" name="nameInput" placeholder="Enter a Product Name" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="brandInput">Brand:</label>
                        <input type="text" className="form-control" id="brandInput" name="brandInput" placeholder="Enter a Brand" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="groupInput">Group:</label>
                        <input type="text" className="form-control" id="groupInput" name="groupInput" placeholder="skis/apparel/gear/etc" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="priceInput">Price:</label>
                        <input type="number" className="form-control" id="priceInput" name="priceInput" placeholder="Enter a Price" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="ageInput">Age:</label>
                        <input type="text" className="form-control" id="ageInput" name="ageInput" placeholder="mens/womens/kids" onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="ratingInput">Rating:</label>
                        <input type="number" className="form-control" id="ratingInput" name="ratingInput" placeholder="Scale: 1-5" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="sizeInput">Sizes as Comma-Seperated-Values: (150X,140,130D,sm,m,lg,xl,xxl)</label>
                        <input type="text" className="form-control" id="sizeInput" name="sizeInput" placeholder="141,E40,130,150D" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="descriptionInput">Description:</label>
                        <textarea className="form-control add_form_textarea" id="descriptionInput" name="descriptionInput" placeholder="Enter Product Description" onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <input type="submit" className="btn btn-primary me-2" value="Add" />
                        <a href="/admin" className="btn btn-dark">Cancel</a>
                    </div>
                </div>
            </form>
            )};
        </div>
    </>
);
};