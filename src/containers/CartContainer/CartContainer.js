import React, { useContext } from 'react'
import Cart from '../../components/Cart/Cart'
import { CartContext } from "../../components/Context/CartContext"
import EmptyCart from '../../components/EmptyCart/EmptyCart'


const CartContainer = () => {

    const {cart, deleteItem} = useContext(CartContext)


    console.log(`log del cartContainer ${cart}`)
    if (cart.length === 0 ) {
        return (
            
            <EmptyCart />
        )
    } else {
        return (
            <Cart carrito={cart}/>
        )
    }
}

export default CartContainer

