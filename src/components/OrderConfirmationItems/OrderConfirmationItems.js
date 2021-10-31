import * as React from "react";
import {Link} from 'react-router-dom'

const OrderConfirmationItems = ({ id, title, image, quantity, total }) => {
  return (
    

        <tbody className="tablaProductosCart" key={id}>
            <tr>
                <td className="imgItemCartContainer">
                    <img className="imgItemCart" src = {image} alt = {title} /> 
                </td>
                <td >
                    <Link to = {`/product/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                </td>
                <td className="cantidadProducto">
                    <h4>{quantity}</h4>
                </td>
                <td className="TotalProducto"> 
                    <h4>$ {total}</h4>
                </td>
            </tr>
        </tbody>   

  )
};

export default OrderConfirmationItems;

