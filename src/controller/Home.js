import React from 'react';
import Header from "../view/Header";
import AllProducts from "../model/AllProducts";
import {CartProvider} from "../model/CartContext";


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