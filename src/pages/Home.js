import React from 'react';
import Header from "../components/Header";
import AllProducts from "../components/AllProducts";


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <AllProducts/>
        </div>
    );
};

export default Home;