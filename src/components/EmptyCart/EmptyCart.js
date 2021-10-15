import React from 'react'
import {Link} from "react-router-dom"
import "./EmptyCart.css"

const EmptyCart = () => {
    return (
        <div className="emptyCartContainer">
            <h1 className="tituloCarritoVacio">TU CARRITO ESTÁ VACÍO AHORA MISMO</h1>
            <p className="textoCarritoVacio">¿Aún no te has decidido?. Tenemos productos que te encantarán, revisa el menú de arriba o ve a la página de la tienda para comprobarlo.</p> 
            <Link exact to="/tienda" >
                <div className="btn btnGoToStore">Volver a la tienda</div>
            </Link>
            
        </div>
    )
}

export default EmptyCart
