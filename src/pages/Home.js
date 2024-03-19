import React from 'react';
import Header from "../components/Header";
import AllProducts from "../components/AllProducts";
import {CartProvider} from "../components/CartContext";


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