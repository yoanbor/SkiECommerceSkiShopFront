import axios from "axios";
import React, {useEffect, useState} from "react";
import Cards from "./Cards";

const AllProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then((res) => setData(res.data));

    }, []);


    return (
        <div className="allProducts">
            <h2>Tous les produits</h2>
            <ul>
                {
                    data.map((product, index) => (
                        <Cards key={index} product={product}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default AllProducts;