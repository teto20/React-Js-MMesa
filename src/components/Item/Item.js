import * as React from "react";
import "./Item.css";

const Item = ({ title, description, image, price }) => {
  return (
    <div className="itemCard">
        <img className="itemCardImg" src={image} alt={title} />
        <div className="itemCardBody">
            <h3 className="itemCardTitle">{title}</h3>
            <p className="itemCardDesc">{description}</p>
            <p className="itemCardPrice">{`$ ${price}`}</p>
            <button className="itemCardBtn">Agregar al carrito</button>
        </div>
    </div>
  );
};

export default Item;
