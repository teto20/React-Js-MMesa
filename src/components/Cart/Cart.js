import React from 'react'
import "./Cart.css"
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom'

const Cart = (carrito) => {

    const {removeItem} = useContext(CartContext)

    const data = [].concat(...Object.values(carrito))

    return (
        <div className="CartContainer">
            <h1 className="TituloCarrito">Tus productos</h1>  
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className="tituloItemCart"><h3>Producto</h3></th>
                        <th className="cantidadItemCart"><h3>Cantidad</h3></th>
                        <th className="precioItemCart"><h3>Precio</h3></th>
                        <th className="totalItemCart"><h3>Total</h3></th>
                        <th className="accionItemCart"><h3>Accion</h3></th>
                    </tr>
                </thead>
                
            {
            data?.map(product => (
                <tbody className="tablaProductosCart" key={product.id}>
                    <tr >
                        <td className="imgItemCartContainer">
                            <img className="imgItemCart" src = {product.image} alt = {product.title} /> 
                        </td>
                        <td >
                            <Link to = {`/product/${product.id}`}>
                                <h3>{product.title}</h3>
                            </Link>
                        </td>
                        <td className="cantidadProducto">
                            <h4>{product.quantity}</h4>
                        </td>
                        <td className="precioProducto">
                            <h4>$ {product.price}</h4>
                        </td>
                        <td className="TotalProducto"> 
                            <h4>$ {product.total}</h4>
                        </td>
                        <td className="btnRemoveProducto">
                            <div className="btnRemove" onClick={() => removeItem(product)}>Eliminar</div>
                        </td>
                    </tr>
                </tbody>
                
                )) 
                
             }    
            </table> 
        </div>
    )
}

export default Cart


