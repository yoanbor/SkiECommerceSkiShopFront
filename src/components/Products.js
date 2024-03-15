import axios from "axios";
import React, {useEffect, useState} from "react";
import Cards from "./Cards";

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
             .then((res) => setData(res.data))
    }, []);

    return (
        <div className="product">
            <h1>Tous les produits</h1>
            <ul>
                {
                    data.map((product, index) => (
                       <Cards key={index} product={product} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Products;