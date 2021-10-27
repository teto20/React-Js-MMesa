import * as React from 'react';
import "./ItemDetail.css";
import spinner from "../../Media/spinner.svg"
import ItemImgGallery from '../ItemImgGallery/ItemImgGallery';
import ItemDetailContent from '../ItemDetailContent/ItemDetailContent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const ItemDetail = (props) => {

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
                    <ErrorBoundary>
                        <ItemImgGallery product={props.product} />
                        <ItemDetailContent product={props.product} />
                    </ErrorBoundary>
                    
                </div>

            }
            
        </div>
    )
}

export default ItemDetail;
