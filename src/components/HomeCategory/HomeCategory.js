import * as React from "react";
import "./HomeCategory.css"
import spinner from "../../Media/spinner.svg"

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
                        <a className="categoryLink" href="default.asp" target="_blank">
                        <img className="categoryImg" src={category.image} alt={category.name}/>
                            <div className="categoryBody">
                                <p>{category.name}</p>
                            </div>
                        </a>
                    </div>
                    
                )
            })}
            </div>    
        </div>
    )
}

export default HomeCategory
