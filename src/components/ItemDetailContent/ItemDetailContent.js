import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetailContent(prop) {

    const [quantityToAdd, SetQuantityToAdd] = React.useState(0);

    const {addItem, cart} = useContext(CartContext)

    function addToCart(e, counter) {
        e.preventDefault();
        SetQuantityToAdd(counter)
        addItem({...prop.product, quantity: counter})
    }

    console.log(cart)

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
        </div>
    )
}

export default ItemDetailContent
