import React, {useState} from 'react';
import axios from "axios";


const AddProduct = () => {
    const [name, setName] = useState("");
    const [reference, setReference] = useState(0);
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/product', {
            name_product: name,
            price_product: price,
            ref_product: reference,
            desc_product: description,
            img_product: img,
            quantity_product: quantity
        });
        setName("");
        setQuantity(0);
        setPrice(0);
        setReference(0);
        setDescription("");
        setImg("");
    }


    return (
        <div className={"addProduct"}>
            <h2>Ajouter un produit au catalogue</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" required id={"name"} placeholder={"Nom du produit"}
                       onChange={(e) => setName(e.target.value)}/>
                <input type={"number"} required id={"reference"} placeholder={"Référence"}
                       onChange={(e) => setReference(e.target.value)}/>
                <input type="text" required id={"img"} placeholder={"Lien web d'une photo"}
                       onChange={(e) => setImg(e.target.value)}/>
                <textarea id={"description"} placeholder={"Description du produit"}
                          onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type={"number"} required id={"price"} placeholder={"Prix"}
                       onChange={(e) => setPrice(e.target.value)}/>
                <input type={"number"} required id={"quantity"} placeholder={"Quantité disponible"}
                       onChange={(e) => setQuantity(e.target.value)}/>
                <input type={"submit"} id={"submit"} value={"Ajouter produit"}/>
            </form>
        </div>

    );
};
export default AddProduct;