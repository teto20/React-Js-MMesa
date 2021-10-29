import * as React from "react";
import "./OrderConfirmation.css"
import { getFirestore } from "../../firebase";

const OrderConfirmation = (props) => {

    const [detalleCompra, setDetalleCompra] = React.useState({});
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);
    const id = props.referencia;

    React.useEffect(() => {
        
        
        const db = getFirestore();
        const orderCollection = db.collection("orders")
        .where("orders", "==", String(props.referencia));

        orderCollection.get()
        .then((doc) => {
            if(doc.empty) {
                console.log("No tenemos datos del detalle")
            } else {
                setDetalleCompra({ id: doc.id, ...doc.data() });
            }
        } )
        .catch((error) => setError(error))
        .finally(() => setCargando(false))
    }, [id]);

        return (
            <div className="checkoutContainer">
                <h2>Gracias por tu compra {props.nombre}</h2>
                <p>Se te enviara un correo a {props.email} en cuanto tu pedido sea enviado</p>

                <h3>Detalle de la compra{id}</h3>
                <p>Articulos: </p>

            </div>
        )
}

export default OrderConfirmation
