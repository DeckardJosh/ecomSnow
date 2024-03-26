import React, {useState, useEffect} from "react";

export const TestComp = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Step 2: Fetch data from the API
        fetch('/api')
            .then(response => response.json())
            .then(data => {
                // Step 3: Update state variable with fetched data
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <div>
                <h1>Products list:</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                        {products.map(product => (
                            <li key={product._id}>
                                <h2>{product.name}</h2>
                                <p>Brand: {product.brand}</p>
                                <p>Group: {product.group}</p>
                                <p>Price: ${product.price}</p>
                                {/* Add more details as needed */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};