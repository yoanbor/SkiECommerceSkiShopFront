import React, {useState} from 'react';
import axios from 'axios';
import {useCart} from './CartContext';

const Cards = ({product}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: product.name_product,
        reference: product.ref_product,
        img: product.img_product,
        description: product.desc_product,
        price: product.price_product
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleEdit = () => {
        const data = {
            name_product: formData.name,
            price_product: formData.price,
            ref_product: formData.reference,
            desc_product: formData.description,
            img_product: formData.img
        };

        axios.put(`http://localhost:8080/product/${product.id_product}`, data)
            .then(() => window.location.reload());

        setIsEditing(false);
    };
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/product/${product.id_product}`)
            .then(() => window.location.reload());
    };

    const {addToCart} = useCart();

    const handleAddToCart = () => {
        const productToAdd = {
            name: product.name_product,
            reference: product.ref_product,
            img: product.img_product,
            description: product.desc_product,
            price: product.price_product,
            quantity: 1
        };

        addToCart(productToAdd);
        console.log(productToAdd);
    };

    return (
        <div className="cards">
            <div className={"nameProduct"}>
                {isEditing ? (
                    <input type="text" required id={"name"} placeholder={"Nom du produit"}
                           name="name" value={formData.name} onChange={handleChange}/>
                ) : (
                    <h2>{product.name_product}</h2>
                )}
            </div>
            <div className={"referenceProduct"}>
                {isEditing ? (
                    <input type={"number"} required id={"reference"} placeholder={"Référence"}
                           name="reference" value={formData.reference} onChange={handleChange}/>
                ) : (
                    <h4>{product.ref_product}</h4>
                )}
            </div>
            <div className={"imgProduct"}>
                {isEditing ? (
                    <input type="text" required id={"img"} placeholder={"Lien web d'une photo"}
                           name="img" value={formData.img} onChange={handleChange}/>
                ) : (
                    <img src={product.img_product} alt={"Photo de " + product.name_product}/>
                )}
            </div>
            <div className="priceProduct">
                {isEditing ? (
                    <input type={"number"} required id={"price"} placeholder={"Prix"}
                           name="price" value={formData.price} onChange={handleChange}/>
                ) : (
                    <h3>{product.price_product + " $"}</h3>
                )}
            </div>
            <div className={"panier"}>
                {isEditing ? null : (
                    <button onClick={handleAddToCart}>Ajouter au panier</button>
                )}
            </div>
            <div className={"modify-btn"}>
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Modifier le produit</button>
                )}
            </div>
            <button onClick={() => {
                if (window.confirm('Voulez-vous vraiment supprimer cet article de la base de donnée du site ?')) {
                    handleDelete();
                }
            }}>Supprimer du site
            </button>
            <h4>Description :</h4>
            <div className={"descriptionProduct"}>
                {isEditing ? (
                    <textarea id={"description"} placeholder={"Description du produit"}
                              name="description" value={formData.description} onChange={handleChange}/>
                ) : (
                    <p>{product.desc_product}</p>
                )}
            </div>
        </div>
    );
};

export default Cards;
