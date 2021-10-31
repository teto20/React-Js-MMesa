import * as React from "react";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import {useState} from 'react';
import GuestCheckout from "../../components/GuestCheckout/GuestCheckout";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import "./Checkout.css"


const Checkout = () => {

    const {cart} = useContext(CartContext)

        return (
            <div className="checkoutContainer">
                <GuestCheckout />
            </div>
        )
}

export default Checkout
