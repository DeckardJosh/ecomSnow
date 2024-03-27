import React from "react";
import ProductsList from "../../comps/ProductsList/ProductsList";
import Navbar from "../../comps/Navbar/Navbar";
import Footer from "../../comps/Footer";
// import TestComp from "../../comps/test";

export const ProductsPage = () => {
    return (
        <>
            {/* <TestComp /> */}
            <Navbar />
            <section>
                <ProductsList />
            </section>
            <Footer />
        </>
    )
}