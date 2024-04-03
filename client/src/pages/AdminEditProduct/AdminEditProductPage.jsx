import React from 'react';
import Navbar from '../../comps/Navbar/Navbar';
import AdminEditProduct from '../../comps/AdminEditProduct';
import Footer from '../../comps/Footer';

export default function AdminEditProductPage(){

return (
    <>
        <Navbar />
            <section>
                <AdminEditProduct />
            </section>
        <Footer />
    </>
);
};