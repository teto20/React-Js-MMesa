import * as React from 'react'
import "./ItemCount.css";

function ItemCount({stock, initial}) {

    const [counter, setCounter] = React.useState(initial);

    const decQty = () => {
        if (counter > 1)
        setCounter((prevQty) => prevQty - 1)
    };

    const incQty = () => {
        if (counter < stock)
        setCounter((prevQty) => prevQty + 1)
    };

    return (
        <div className = "contenedorBtns">   
            <button className = "btnItemCount" onClick={decQty}>-</button>
            <p className= "cantidad">{counter}</p>
            <button className = "btnItemCount" onClick={incQty}>+</button>
            <button className="btnAddToCart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
