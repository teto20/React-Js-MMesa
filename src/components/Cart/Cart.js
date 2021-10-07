import React from 'react'

const Cart = (carrito) => {

    const data = Array.from(carrito)
    console.log(`Este es el log del carrito ${carrito}`)
    console.log(`Este es el log de la data ${data}`)
    return (
        <div>
            <h1>Tus productos</h1>
            {
               data?.map(product => (
                    <div key={product.id}>
                        <span>{product.title}</span>
                        <span>{product.quantity}</span>
                        <span>{product.quantity * product.price}</span>
                        <div>Borrar</div>
                    </div>
               )) 
               
            }
        </div>
    )
}

export default Cart
