import * as React from 'react'
import "./ItemCount.css";

function ItemCount({stock, initial, addToCart}) {
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
            <div className="btnPdp btnAddToCart" onClick={(e) => addToCart(e, counter)}>Agregar al carrito</div>
        </div>
    )
}

export default ItemCount;
