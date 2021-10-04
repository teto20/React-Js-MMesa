import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetailContent(prop) {

    const [quantityToAdd, SetQuantityToAdd] = React.useState(0);

    function addToCart(counter, e) {
        e.preventDefault();
        SetQuantityToAdd(counter)
    }

    return (
        <div className = "product-content">
            <h2 className = "product-title">{prop.product.title}</h2>
            <div className = "product-price">
                <p className = "last-price">Antes: <span>$ {prop.product.price + 150}</span></p>
                <p className = "new-price">Ahora: <span>$ {prop.product.price}</span></p>
            </div>
            <div className = "product-detail">
                <h2>Descripción: </h2>
                <p>{prop.product.description}</p>
            </div>
            <ItemCount stock={prop.product.stock} initial={1} addToCart={addToCart}/>
            {console.log(` la cantidad en itemdetail content es ${quantityToAdd}`)}
        </div>
    )
}

export default ItemDetailContent
