import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';
import "./Summary.css"

const Summary = (carrito) => {
    const {cart} = useContext(CartContext)

    const totalOrder = cart.reduce(function (acc, curr) {
        return acc + curr.total;
    },0);

    return (
        <div className="summaryContainer">
            <h2 className="tituloSummary">Tu Orden</h2>
            <h3 className="descSummary">Productos: {cart.length}</h3>
            <h3 className="descSummary">Total $ {totalOrder}</h3>
            <Link className="goToCheckout" to = {`/checkout`}>
                <div className="btnGoToCheckout">Proceder al checkout</div>
            </Link>
            
        </div>
    )
}

export default Summary


