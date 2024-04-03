import React from 'react';
import Navbar from '../../comps/Navbar/Navbar';
import AdminAddProduct from '../../comps/AdminAddProduct';
import Footer from '../../comps/Footer';

export default function AdminAddProductPage(){

return (
    <>
        <Navbar />
            <section>
                <AdminAddProduct />
            </section>
        <Footer />
    </>
);
};
