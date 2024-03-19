import React from 'react';
import {useCart} from './CartContext';

const Cart = () => {
    const {cartItems} = useCart();

    return (
        <div className="cart-page">
            <h2>Votre panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div>
                                <h2>{item.name_product}</h2>
                                <p>Prix: {item.price_product}</p>
                                <p>Quantité: {item.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default Cart;