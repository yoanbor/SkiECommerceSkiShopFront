import React from 'react';
import axios from "axios";


const Cards = ({product}) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/product/` + product.id_product)
            .then(window.location.reload())

    };
    return (
        <div className="cards">
            <h2>{product.name_product}</h2>
            <h4>{product.ref_product}</h4>
            <img src={product.img_product} alt={"Photo de " + product.name_product}/>
            <div className="achats"></div>
            <h3>{product.price_product + " $"}</h3>
            <button>Ajouter au panier</button>
            <button onClick={() => {
                if (window.confirm('Voulez-vous vraiment supprimer cet article de la base de donnée du site ?')) {
                    handleDelete();
                }
            }}>Supprimer du site
            </button>
            <h4>Description :</h4>
            <p>{product.desc_product}</p>
        </div>
    );
};

export default Cards;