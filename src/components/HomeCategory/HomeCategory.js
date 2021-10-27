import * as React from "react";
import "./HomeCategory.css"
import spinner from "../../Media/spinner.svg"
import {Link} from 'react-router-dom'

const HomeCategory = (props) => {


    return (
        <div className="containerHomeCategory">
             
            {props.loader ? 
                <div className="preloader">
                    <img src={spinner} alt="spinner" />
                </div>
            : null}

            {props.error && 
            <p>Hubo un error: {props.error.status} {props.error.statusText}</p>
            }

            <div className="tituloHomeCategory">
                <h2>Cafeteras, Máquinas profesionales y todos los esenciales para tu café.</h2>
            </div>
            <div className="homeCategories">
            {props.categoryList?.map((category) => {
                return (
                    <div className="categoryCard" key={category.id}>
                        <Link to = {`/category/${category.id}`} className="categoryLink">
                        <img className="categoryImg" src={category.image} alt={category.name}/>
                            <div className="categoryBody">
                                <p>{category.name}</p>
                            </div>
                        </Link>
                    </div>
                    
                )
            })}
            </div>    
        </div>
    )
}

export default HomeCategory
