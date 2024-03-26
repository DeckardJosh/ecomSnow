import React from "react";
import Navbar from "../../comps/Navbar/Navbar";
import HomeHero from "../../comps/HomeHero";
import HomeAbout from "../../comps/HomeAbout";
import HomeCompany from "../../comps/HomeCompany";
// import { TestComp } from "../../comps/test/TestComp";

export const HomePage = () => {
    return(
        <>
        <div>
            {/* <TestComp /> */}
            <Navbar />
            <HomeHero />
            <HomeAbout />
            {/* <TestComp /> */}
            <HomeCompany />
        </div>
        </>
    );
};