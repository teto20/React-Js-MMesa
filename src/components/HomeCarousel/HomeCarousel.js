import React from 'react'
import "./HomeCarousel.css";

function HomeCarousel() {
    return (
        <div className="carouselWrapper">
            <span id="item1"></span>
            <span id="item2"></span>
            <span id="item3"></span>
            <div className="carouselItem item1">
                <a className="arrow arrowPrev" href="#item3"></a>
                <a className="arrow arrowNext" href="#item2"></a>
            </div>
            
            <div className="carouselItem item2">
               
                <a className="arrow arrowPrev" href="#item1"></a>
                <a className="arrow arrowNext" href="#item3"></a>
            </div>
            
            <div className="carouselItem item3">
                <a className="arrow arrowPrev" href="#item2"></a>
                <a className="arrow arrowNext" href="#item1"></a>
            </div>
        </div>
    )
}

export default HomeCarousel



