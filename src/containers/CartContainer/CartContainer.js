import React, { useContext } from 'react'
import Cart from '../../components/Cart/Cart'
import { CartContext } from "../../components/Context/CartContext"
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import Summary from '../../components/Summary/Summary'


const CartContainer = () => {

    const {cart, deleteItem} = useContext(CartContext);

    if (cart.length === 0 ) {
        return (
            
            <EmptyCart />
        )
    } else {
        return (
            <div>
                <Cart carrito={cart}/>
                <Summary />   
            </div>
        )
    }
}

export default CartContainer



