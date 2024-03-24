import React from "react";
// import {TestComp} from "../../comps/test/TestComp"
import Navbar from "../../comps/Navbar/Navbar";
import HomeHero from "../../comps/HomeHero";
import HomeAbout from "../../comps/HomeAbout";
import { TestComp } from "../../comps/test/TestComp";

export const HomePage = () => {
    return(
        <>
        <div>
            {/* <TestComp /> */}
            <Navbar />
            <HomeHero />
            <HomeAbout />
            <TestComp />
        </div>
        </>
    );
};