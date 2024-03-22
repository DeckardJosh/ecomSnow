import React from "react";
// import {TestComp} from "../../comps/test/TestComp"
import Navbar from "../../comps/Navbar/Navbar";
import HomeHero from "../../comps/HomeHero";

export const HomePage = () => {
    return(
        <>
        <div>
            {/* <TestComp /> */}
            <Navbar />
            <HomeHero />
        </div>
        </>
    );
};