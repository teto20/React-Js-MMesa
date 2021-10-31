import * as React from "react";
import "./OrderConfirmation.css"
import { getFirestore } from "../../firebase";
import OrderConfirmationItems from "../OrderConfirmationItems/OrderConfirmationItems";

const OrderConfirmation = (props) => {

    const [cargando, setCargando] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    const id = props.referencia;

    React.useEffect(() => {
        const db = getFirestore();
        const orderCollection = db.collection("orders")

        setCargando(true);
        orderCollection
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.empty) {
              console.log("No hay productos");
            } else {
                setData(
                querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                );
            }
          })
          .catch((error) => setError(error))
          .finally(() => setCargando(false));
      }, []);

        const orden = data.filter(function(e) {
        return e.id == props.referencia;
      }) 

      console.log(data)
      console.log(orden)

        return (
            <div>
                <div className="confirmationContainer">
                    <div className="confirmationGralInfo">
                        <h1>Gracias por tu compra {props.nombre}</h1>
                        <h3>El id de tu compra es: {id}</h3>
                        <p>Se te enviara un correo a {props.email} en cuanto tu pedido sea enviado</p>
                        <h3 className="subTituloOrderConfirmation">Detalle de la compra</h3>
                    </div>
                    <div className="contenedorProductosOrderConfirmation">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="tituloItemCart"><h3>Producto</h3></th>
                                    <th className="cantidadItemCart"><h3>Cantidad</h3></th>
                                    <th className="totalItemCart"><h3>Total</h3></th>
                                </tr>
                            </thead>
                        {orden.map((detalleOrder) => {
                            const detalleOrderItems = detalleOrder;

                                {return detalleOrderItems.items.map((detalleOrderItem) => {
                                    console.log(detalleOrderItem.id)
                                    return (
                                    
                                            <OrderConfirmationItems 
                                            key={detalleOrderItem.id}
                                            id= {detalleOrderItem.id}
                                            title={detalleOrderItem.title}
                                            image={detalleOrderItem.image}
                                            quantity={detalleOrderItem.quantity}
                                            total={detalleOrderItem.total}
                                        /> 
                                     
                                            )
                                    })}
                                  
                            })}
                        </table>
                    </div>
                      
                </div>
            </div>
            
        )
}

export default OrderConfirmation
