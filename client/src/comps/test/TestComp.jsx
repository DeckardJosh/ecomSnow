import React from "react";
import { useState } from "react";

export const TestComp = () => {
    const [data, setData] = useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    return (
        <>
        <h1>{!data ? "Loading..." : data}</h1>
        </>
    );
};