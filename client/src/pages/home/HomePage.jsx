import React from "react";
import Navbar from "../../comps/Navbar/Navbar";
import HomeHero from "../../comps/HomeHero";
import HomeAbout from "../../comps/HomeAbout";
import HomeCompany from "../../comps/HomeCompany";
import Footer from "../../comps/Footer";
// import { TestComp } from "../../comps/test/TestComp";

export const HomePage = () => {
    return(
        <>
            <Navbar />
            <ssection>
                <HomeHero />
            </ssection>
            <section>
                <HomeAbout />
            </section>
            <article>
                <HomeCompany />
            </article>
            <Footer />

            {/* <TestComp /> */}
        </>
    );
};