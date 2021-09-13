import * as React from "react";
import "./CartWidget.css";
import cartImg from "../../Media/Cart.png";

const CartWidget = () => {
    return (
        <React.Fragment>
            <a className="Cart" href="#">
                <img src={cartImg} alt="iconoCarrito"></img>
            </a>
        </React.Fragment>
    )
}

export default CartWidget
