import React, {useState} from 'react';
import axios from "axios";


const Cards = ({product}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editNameCard, setEditNameCard] = useState("");
    const [editReference, setEditReference] = useState(0);
    const [editImg, setEditImg] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editPrice, setEditPrice] = useState(0);
    const [editQuantity, setEditQuantity] = useState(0);
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/product/` + product.id_product)
            .then(window.location.reload())

    };


    const handleEdit = () => {
        const data = {
            name_product: editNameCard ? editNameCard : product.name_product,
            price_product: editPrice ? editPrice : product.price_product,
            ref_product: editReference ? editReference : product.ref_product,
            desc_product: editDescription ? editDescription : product.desc_product,
            img_product: editImg ? editImg : product.img_product,
            quantity_product: editQuantity ? editQuantity : product.quantity_product
        };

        axios.put('http://localhost:8080/product/' + product.id_product, data).then(window.location.reload())
        setIsEditing(false);
    }

    return (
        <div className="cards">

            <div className={"nameProduct"}>
                {isEditing ? (
                    <input type="text" required id={"name"} placeholder={"Nom du produit"}
                           onChange={(e) => setEditNameCard(e.target.value)}/>
                ) : (<h2>{product.name_product}</h2>
                )}
            </div>

            <div className={"referenceProduct"}>
                {isEditing ? (
                    <input type={"number"} required id={"reference"} placeholder={"Référence"}
                           onChange={(e) => setEditReference(e.target.value)}/>) : (
                    <h4>{product.ref_product}</h4>)}
            </div>

            <div className={"imgProduct"}>
                {isEditing ? (
                    <input type="text" required id={"img"} placeholder={"Lien web d'une photo"}
                           onChange={(e) => setEditImg(e.target.value)}/>) : (
                    <img src={product.img_product} alt={"Photo de " + product.name_product}/>)}
            </div>


            <div className="priceProduct">
                {isEditing ? (
                    <input type={"number"} required id={"price"} placeholder={"Prix"}
                           onChange={(e) => setEditPrice(e.target.value)}/>) : (
                    <h3>{product.price_product + " $"}</h3>)
                }
            </div>

            <div className={"panier"}>
                {isEditing ? null : (
                    <button>Ajouter au panier</button>)}
            </div>

            <div className={"modify-btn"}>
                {isEditing ? (<button onClick={() => handleEdit()}>Valider</button>) : (
                    <button onClick={() => setIsEditing(true)}>Modifier le produit</button>)}
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
                              onChange={(e) => setEditDescription(e.target.value)}></textarea>
                ) : (<p>{product.desc_product}</p>)}
            </div>

        </div>
    );
};

export default Cards;