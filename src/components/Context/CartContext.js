import { createContext, useState } from "react";

//Creamos el contexto
export const CartContext = createContext();

//Creamos el proveedor
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {

        const existItem = cart.find(x => x.id === product.id)

        if(existItem) {
            product.quantity = existItem.quantity + product.quantity
            setCart(cart.map(x => x.id === existItem.id
                ? product
                : x
            ))
        } else {
            setCart([...cart, product]);
        } 
    }

    const removeItem = (product) => {
        setCart(cart.filter(x => x.id !== product.id));
    }

    return <CartContext.Provider value={{cart, setCart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
}