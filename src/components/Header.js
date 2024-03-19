import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1>Ski Shop</h1>
            <div className={"navbar"}>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/addProduct" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Ajouter des produits</li>
                    </NavLink>
                    <NavLink to="/panier" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Mon panier</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;