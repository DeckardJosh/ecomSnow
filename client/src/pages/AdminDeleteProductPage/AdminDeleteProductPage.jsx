import React from 'react';
import Navbar from '../../comps/Navbar/Navbar';
import AdminDeleteProduct from '../../comps/AdminDeleteProduct';
import Footer from '../../comps/Footer';

export default function AdminDeleteProductPage(){

return (
    <>
        <Navbar />
            <section>
                <AdminDeleteProduct />
            </section>
        <Footer />
    </>
);
};