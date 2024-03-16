import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AddProducts from "./pages/AddProducts";
import Panier from "./pages/Panier";
import ModifyProduct from "./pages/ModifyProduct";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="addProduct" element={<AddProducts/>}/>
                    <Route path="panier" element={<Panier/>}/>
                    <Route path="modifyproduct" element={<ModifyProduct/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;