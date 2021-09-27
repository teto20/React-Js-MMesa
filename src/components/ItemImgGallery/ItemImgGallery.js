import React from 'react'
import "./ItemImgGallery.css"

function ItemImgGallery(prop) {
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);

    return (
            <div className = "product-imgs">
                <div className = "img-display">
                    <div className = "img-showcase">
                        {prop.product.images?.map((image, i) => (
                            <img key={i} src = {image} alt = {prop.product.title} /> 
                        ))};
                    </div>
                <div className = "img-select">
                {prop.product.images?.map((image, i) => (
                            <div className = "img-item" key={i}>
                                <a href = "#" data-id = {i+1}>
                                    <img src = {image} alt = {prop.product.title} />
                                </a>
                            </div> 
                        ))};
                </div>  
                </div>
            </div>

    )
}

export default ItemImgGallery