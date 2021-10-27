import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function ItemDetailContent(prop) {

    const [quantityToAdd, SetQuantityToAdd] = React.useState(0);
    const [totalItem, SetTotalItem] = React.useState(0);
    const [isAddedToCart, setIsAddedToCart] = React.useState(false);

    const {addItem, cart} = useContext(CartContext)


    function addToCart(e, counter) {
        setIsAddedToCart(true);
        e.preventDefault();
        SetQuantityToAdd(counter);
        addItem({...prop.product, quantity: counter, total: prop.product.price*counter });
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
            {
                !isAddedToCart ?

                <ItemCount stock={prop.product.stock} initial={1} addToCart={addToCart} isAddedToCart={isAddedToCart} /> :

                <ErrorBoundary>
                    <div className = "contenedorBtns">
                        
                            <Link exact to="/cart">
                                <div className="btnPdpGoToCart btnGoToCart">Continuar al carrito</div>
                            </Link>
                    </div>
                </ErrorBoundary>  
            }
            
        </div>
    )
}

export default ItemDetailContent
