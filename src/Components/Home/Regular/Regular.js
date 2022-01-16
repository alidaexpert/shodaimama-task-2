import React from 'react';

import ShopingProduct from '../../ShopingProduct/ShopingProduct';
import "./Regular.css"
const Regular = ({products,handler}) => {
    return (
      <div> 
           <div className="product-headline">
            <div className="border-line"></div>
            <h2>Regular Shoping</h2>
        <p>২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল ১০টা-রাত ১০টা পর্যন্ত ।</p>
        </div>
        <div className="product-grid-template">
           {
               products.map(product=><ShopingProduct key={product.id} product={product}  handler={handler} ></ShopingProduct>)
           }
                            </div>  
                            {/* <!-- show more btn  --> */}
                            <div className="product-show-more">
<button>Show More</button>
        </div>                          
                            </div>
    );
};

export default Regular;