import * as React from "react";
import "./CartWidget.css";
import cartImg from "../../Media/Cart.png";
import {Link} from 'react-router-dom'
import { CartContext } from "../Context/CartContext";
import { useContext } from 'react';

const CartWidget = () => {

    const {cart} = useContext(CartContext)

    return (
        <React.Fragment>
            <Link className="Cart" to = {`/cart`}>
                {
                    cart.length !== 0  && <p className="cartLength">{cart.length}</p>
                }
                <img src={cartImg} alt="iconoCarrito"></img>
            </Link>
        </React.Fragment>
    )
}

export default CartWidget
