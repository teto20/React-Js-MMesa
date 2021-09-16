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
            {props.productList?.map((producto) => {
                return (
                    <Item 
                        key={producto.id}
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
