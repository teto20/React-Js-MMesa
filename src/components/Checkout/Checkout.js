import * as React from "react";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { getFirestore } from "../../firebase";
import GuestCheckout from "../../components/GuestCheckout/GuestCheckout";


const Checkout = () => {

    const {cart} = useContext(CartContext)
    const {setCart} = useContext(CartContext)
    const {buyer} = useContext(CartContext)


    const totalOrder = cart.reduce(function (acc, curr) {
        return acc + curr.total;
    },0);

    const newOrder = {
        buyer: { name: "Oscar", phone: 35112345678, email: "juan@email.com" },
        items: cart,
        total: totalOrder,
        date: new Date(),
      };

    const handleCheckout = () => { 
        const db = getFirestore();
        const ordersCollection = db.collection("orders");

        ordersCollection
        .add(newOrder)
        .then((docRef) => console.log(docRef.id))
        .catch((error) => console.log("Hubo un error, no se creo la orden "));
    }

    const clear = () => {
        setCart([]);
    }


    return (
        <div>
            <GuestCheckout />
        </div>
    )
}

export default Checkout
