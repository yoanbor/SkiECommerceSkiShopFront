import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./controller/Home";
import AddProducts from "./controller/AddProducts";
import Panier from "./controller/Panier";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="addProduct" element={<AddProducts/>}/>
                    <Route path="panier" element={<Panier/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;