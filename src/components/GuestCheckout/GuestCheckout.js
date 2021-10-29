import * as React from "react";
import {useState} from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { getFirestore } from "../../firebase";
import "./GuestCheckout.css"
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";

const GuestCheckout = () => {

    const {cart} = useContext(CartContext)
    const {setCart} = useContext(CartContext)
    const [compra, setCompra] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        telefono: '',
        email: ''
    })

    const totalOrder = cart.reduce(function (acc, curr) {
        return acc + curr.total;
    },0);

    const newOrder = {
        buyer: { name: datosUsuario.nombre, phone: datosUsuario.telefono, email: datosUsuario.email },
        items: cart,
        total: totalOrder,
        date: new Date(),
      };

    const handleCheckout = () => { 
        const db = getFirestore();
        const ordersCollection = db.collection("orders");

        ordersCollection
        .add(newOrder)
        .then((querySnapshot) => {
            console.log(querySnapshot);
            if (querySnapshot.empty) {
              console.log("No hay ordenes");
            } else {
                console.log(querySnapshot.id)
                setCompra(querySnapshot.id);
            }
          })
        .catch(error => setError(error))
    }

    const clear = () => {
        setCart([]);
    }
    
    const handleInputChange = (event) => {
        setDatosUsuario({
            ...datosUsuario,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        handleCheckout();
        clear();
        event.target.reset();

        
        console.log('enviando datos...' + datosUsuario.nombre + ' ' + datosUsuario.telefono + ' ' + datosUsuario.email 
        )
    }
    if (cart.length > 0){
        return (
            <div className="guestCheckoutContainer">
                <h2 className="tituloGuestCheckout">Checkout como invitado</h2>
                <form onSubmit={enviarDatos} className="formGuestCheckout">
                    <label for="nombre">Nombre</label>
                    <input 
                        type="text" 
                        placeholder="Juan Perez" 
                        onChange={handleInputChange} 
                        name="nombre" />
                    <label for="telefono">Telefono</label>
                    <input 
                        type="number" 
                        placeholder="094164926" 
                        onChange={handleInputChange} 
                        name="telefono" />
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="test@email.com" 
                        onChange={handleInputChange} 
                        name="email" />
                    <button className="btnFinalizarCompra">Finalizar la compra</button>
                </form>
    
            </div>
        )
    } else {
        return (
            <OrderConfirmation nombre={datosUsuario.nombre} email={datosUsuario.email} referencia={compra} />
        )
    }
}

export default GuestCheckout

