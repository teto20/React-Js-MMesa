import * as React from "react";
import "./CartWidget.css";
import cartImg from "../../Media/Cart.png";
import {Link} from 'react-router-dom'

const CartWidget = () => {
    return (
        <React.Fragment>
            <Link className="Cart" to = {`/cart`}>
                <img src={cartImg} alt="iconoCarrito"></img>
            </Link>
        </React.Fragment>
    )
}

export default CartWidget
