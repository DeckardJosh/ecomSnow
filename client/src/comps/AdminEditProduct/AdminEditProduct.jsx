import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./AdminEditProduct.css";

export default function AdminEditProduct(){
    const id = useParams();
    const [paramID] = useState(id.id);
    // const [productToEdit, setProductToEdit] = useState({})
    
// const [productToEdit, setProductToEdit] = useState({
//     name: '',
//     brand: '',
//     group: '',
//     price: '',
//     age: '',
//     rating: '',
//     sizes: '',
//     description: ''
// });
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchDataByID = async () => {
            try {
                const response = await axios.get(`/admin/fe-edit/${paramID}`);
                setFormData(response.data)
                // console.log(productToEdit);
            } catch (error) {
                console.error(error);
            }
        };

        if(formData!=null){
            fetchDataByID();
        }
    }, [paramID]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);

        try {
            // const response = await axios.post(`/admin/fe-edit/${paramID}`, formData);
            await axios.post(`/admin/fe-edit/${paramID}`, formData);
            // console.log(response.data);

            setSubmitted(true)
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

return (
    <>
        <div className="admin_add_container">
            {(submitted) ? (
                <div className="admin_add_success">
                    <p>You have updated this product!</p>
                    <div className="admin_add_success_buttons">
                        <a href={`/admin/products/edit/${paramID}`} className='btn btn-primary btn-md me-4'>Update Again</a>
                        <a href='/admin' className='btn btn-danger btn-md'>Back to Products</a>
                    </div>
                </div>
            ):(
            <form onSubmit={handleOnSubmit} className='admin_add_subcontainer'>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="nameInput">Name:</label>
                        <input type="text" className="form-control" id="nameInput" name="name" placeholder="Enter a Product Name" value={formData.name || ''} onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="brandInput">Brand:</label>
                        <input type="text" className="form-control" id="brandInput" name="brand" placeholder="Enter a Brand" value={formData.brand || ''} onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="groupInput">Group:</label>
                        <input type="text" className="form-control" id="groupInput" name="group" placeholder="skis/apparel/gear/etc" value={formData.group || ''} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="priceInput">Price:</label>
                        <input type="number" className="form-control" id="priceInput" name="price" placeholder="Enter a Price" value={formData.price || ''} onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="ageInput">Age:</label>
                        <input type="text" className="form-control" id="ageInput" name="age" placeholder="mens/womens/kids" value={formData.age || ''} onChange={handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="ratingInput">Rating:</label>
                        <input type="number" className="form-control" id="ratingInput" name="rating" placeholder="Scale: 1-5" value={formData.rating || ''} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="sizeInput">Sizes as Comma-Seperated-Values: (150X,140,130D,sm,m,lg,xl,xxl)</label>
                        <input type="text" className="form-control" id="sizeInput" name="size" placeholder="141,E40,130,150D" value={formData.size || ''} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="descriptionInput">Description:</label>
                        <textarea className="form-control add_form_textarea" id="descriptionInput" name="description" placeholder="Enter Product Description" value={formData.description || ''} onChange={handleChange}></textarea>
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