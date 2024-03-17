import React from 'react';
import Header from "../components/Header";
import AllProducts from "../models/AllProducts";
import {CartProvider} from "../models/CartContext";


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <CartProvider>
                <AllProducts/>
            </CartProvider>
        </div>
    );
};

export default Home;