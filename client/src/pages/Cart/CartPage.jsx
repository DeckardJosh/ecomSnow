import React from 'react';
import Cart from '../../comps/Cart';
import Navbar from '../../comps/Navbar/Navbar';
import Footer from '../../comps/Footer';

export default function CartPage() {
  return (
    <>
        <Navbar />

        <Cart cart={[]}/>

        <Footer />
    </>
  )
}
