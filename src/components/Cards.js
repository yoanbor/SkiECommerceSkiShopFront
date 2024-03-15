import React from 'react';

const Cards = ({product}) => {
    return (
        <div className="cards">
            <h2>Nom du produit</h2>
            <h4>Référence</h4>
            <img src={product.flags.svg} alt={"Produit " + product.translations.fra.common} />
            <h3>Prix</h3>
            <h4>Description :</h4>
            <p>Lorem</p>
        </div>
    );
};

export default Cards;