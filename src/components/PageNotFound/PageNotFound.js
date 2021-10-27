import React from 'react'
import {Link} from "react-router-dom"
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className="pageNotFoundContainer">
            <h1 className="tituloPageNotFound">Ups! Página no encontrada</h1>
            <p className="textoPageNotFound">¿Aún no te has decidido?. Tenemos productos que te encantarán, revisa el menú de arriba o ve a la página de la tienda para comprobarlo.</p> 
            <Link exact to="/" >
                <div className="btn btnGoToStore">Volver al inicio</div>
            </Link>
            
        </div>
    )
}

export default PageNotFound
