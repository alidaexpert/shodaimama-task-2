import React from 'react';
import "./ShopingProduct.css"
const ShopingProduct = ({product,handler}) => {
    const {title,image,price}=product
    return (
        <div  className="product-card-section">
        <div className="card-padding">
           <div className="card-container">
            <div className="product-img-section">
                <img className="product-img" src={image} alt="" width="100%"/>
            </div>
            <p className="card-headline-regular">Shopping</p>
            <div className="card-text">
                <p>{title.split(" ").slice(0,5).join(" ")}</p>
                <small>each</small>
                <span className="card-text-price"> <span>৳</span> {price}</span>
            </div>
           </div>
            <div className="card-bottom-text ">
                <div className="card-bottom-detail-btn">
                    <button>Details</button> 
                </div>
                <div className="card-text-icon">
                    <div className="card-bottom-left-icon">
                        <img src="./icons/product/fast-delivery.86065e4e.png" alt=""  width="22rem"/><span>72hour</span>
                    </div>
                    <div className="card-bottom-right-icon">
                        <img src="./icons/product/credit card.png" alt="" width="23rem"/>
                        <img src="./icons/product/money.png" alt="" width="23rem"/>
                    </div>
                </div>
            </div>
        </div>
                        <button onClick={()=>handler(product)} className="card-bottom-add-btn">Add To Cart</button>
        
                    </div>
    );
};

export default ShopingProduct;