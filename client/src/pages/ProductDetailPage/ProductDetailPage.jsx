import React from 'react';

import Navbar from '../../comps/Navbar/Navbar';
import ProductDetail from '../../comps/ProductDetail';
import Footer from '../../comps/Footer';

export default function ProductDetailPage() {
  return (
    <>
        <Navbar />

        <section>
            <ProductDetail />
        </section>

        <Footer />
    </>
  );
};
