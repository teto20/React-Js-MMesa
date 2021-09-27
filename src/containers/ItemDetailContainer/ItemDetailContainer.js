import * as React from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = (props) => {
    return (
        <div className="itemDetailContainer">
            <ItemDetail product={props.item} loader={props.cargando} error={props.error} />
        </div>
    );
    
}

export default ItemDetailContainer;