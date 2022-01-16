import React from 'react';
import preorder from "../../../images/products/preorder/whXCzt1640081138967PO8UH7.jpeg"
import "./Preorder.css"
const Preorder = () => {
    return (
        // <!-- preorder products -->
    <div className="preorder-section">
        <div className="product-headline">
            <div className="border-line"></div>
            <h2>Preorder</h2>
        <p>বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।</p>
        </div>
        <div className="preorder-card">
            <div className="preorder-each-card">
                <div className="preorder-card-img">
                    <img src={preorder} alt="" width="100%"/>
                </div>
                <div className="preorder-card-text">
                    <p>সদাইমামা বার-বি-কিউ ফেস্ট ...</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Preorder;