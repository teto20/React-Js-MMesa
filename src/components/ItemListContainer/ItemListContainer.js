import * as React from "react";
import "./ItemListContainer.css";

class ItemListContainer extends  React.Component {
    render() {
        return (
            <div className="itemListContainer">
                <h1>Bienvenido {this.props.name}. Nos encontramos en el proceso de creacion de la tienda, proximamente podra ver mas contenido.</h1>
            </div>
        );
    }
}

export default ItemListContainer