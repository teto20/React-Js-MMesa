import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { getFirestore } from "../../firebase";
import {Link} from 'react-router-dom';

const Summary = (carrito) => {
    const {cart} = useContext(CartContext)

    const totalOrder = cart.reduce(function (acc, curr) {
        return acc + curr.total;
    },0);

    return (
        <div>
            <h2>Orden</h2>
            <h4>Productos: {cart.length}</h4>
            <h4>Total: {totalOrder}</h4>
            <Link className="goToCheckout" to = {`/checkout`}>
                <button>
                    Finalizar compra
                </button>
            </Link>
            
        </div>
    )
}

export default Summary


