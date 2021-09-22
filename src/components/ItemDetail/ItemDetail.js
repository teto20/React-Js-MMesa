import * as React from 'react';
import "./ItemDetail.css";
import spinner from "../../Media/spinner.svg"

const ItemDetail = (props) => {

    return (
        <div className="itemDetail">
            {props.loader ? 
                <div className="preloader">
                    <img src={spinner} alt="spinner" />
                </div>
            : null}

            {props.error && 
                <p>Hubo un error: {props.error.status} {props.error.statusText}</p>
            }
            
            {props.product && 
                <div classname="contenedorItemDetail">
                    <div className="contenedorContenidoPrincipal">
                        <aside className="itemDetailImgContainer">
                            <img src={props.product.image} alt={props.product.title} />
                        </aside>
                        <div className="itemDetailTitlePrice"> 
                            <h1>{props.product.title}</h1>
                            <h3>{`$ ${props.product.price}`}</h3>
                        </div>
                    </div>
                    <article>
                        <h3>Descripcion</h3>
                        <p>{props.product.description}</p>
                    </article>
                </div>

            }
            
        </div>
    )
}

export default ItemDetail;
