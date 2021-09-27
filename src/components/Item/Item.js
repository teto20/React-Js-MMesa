import * as React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

const Item = ({ id, title, description, image, price }) => {
  return (
    <div className="itemCard">
        <Link to = {`/product/${id}`}>
          <img className="itemCardImg" src={image} alt={title} />
        </Link>
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
