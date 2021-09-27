import * as React from 'react';
import "./ItemDetail.css";
import spinner from "../../Media/spinner.svg"
import ItemImgGallery from '../ItemImgGallery/ItemImgGallery';
import ItemDetailContent from '../ItemDetailContent/ItemDetailContent';

const ItemDetail = (props) => {
    console.log(`ItemDetail  + ${JSON.stringify(props)}`)
    return (
        <div className="card-wrapper">
            {props.loader ? 
                <div className="preloader">
                    <img src={spinner} alt="spinner" />
                </div>
            : null}

            {props.error && 
                <p>Hubo un error: {props.error.status} {props.error.statusText}</p>
            }
            
            {props.product && 
                <div className="card">
                            <ItemImgGallery product={props.product} />
                            <ItemDetailContent product={props.product} />
                </div>

            }
            
        </div>
    )
}

export default ItemDetail;
