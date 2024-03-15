import React from 'react';
import Products from "../components/Products";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Products />
        </div>
    );
};

export default Home;