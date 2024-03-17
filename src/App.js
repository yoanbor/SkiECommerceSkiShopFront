import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AddProducts from "./pages/AddProducts";
import Paid from "./pages/Paid";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="addProduct" element={<AddProducts/>}/>
                    <Route path="panier" element={<Paid/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;