import React from 'react';
import Header from "../components/Header";
import Cart from "../components/Cart";
import {CartProvider} from "../models/CartContext";

const Paid = () => {
    return (
        <div className="panier">
            <Header/>
            <CartProvider>
                <Cart/>
            </CartProvider>
        </div>
    );
};

export default Paid;