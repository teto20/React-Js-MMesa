import * as React from 'react';
import Item from '../Item/Item';
import "./ItemList.css";
import spinner from "../../Media/spinner.svg"

const ItemList = (props) => {

    return (
        <div className="itemList">
            {props.loader ? 
                <div className="preloader">
                    <img src={spinner} alt="spinner" />
                </div>
            : null}

            {props.error && 
            <p>Hubo un error: {props.error.status} {props.error.statusText}</p>
            }
            
            {props.productList?.map((producto) => {
                return (
                    <Item 
                        key={producto.id}
                        id= {producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image}
                        price={producto.price}
                    />
                )
            })}
            
        </div>
    )
}

export default ItemList;
