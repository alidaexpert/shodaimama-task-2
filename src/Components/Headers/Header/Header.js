import React from 'react';
import logo from "../../../images/logo/logo.png"
import searchIcon from "../../../images/navbar/download.png"
import cart from "../../../images/navbar/cart.png"
import artBoard from "../../../images/navbar/artBoard.cb23ac3c.svg"
import leftArrow from "../../../images/logo/leftArrow.ec08e6e9.svg"
import "./Header.css"
const Header = ({count}) => {
    // const price=count.reduce((previous,product)=>previous+product.price,0);
    let price=0
   let quantity=0
    for (const product of count) {
      
        if(!product.quantity){
            product.quantity=1
        }
        
        quantity=quantity+product.quantity
        price=price+product.price*product.quantity
       
       }
    return (
        <div>
            <header>
             {/* nav section  */}
    <nav>
    <div class="logo-bar">
            <i class="fas fa-bars menu-bar"></i>
        <img className="logo" src={logo} alt="" width="150rem"/>
        </div>
        <div className="nav-right">
           
                <img src={searchIcon} alt="" width="30rem"/>
               <div className="m-respon">
               <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="nav-font"> Select Delivery Location</span>
                </div>
                <div>
                    <i className="fas fa-user"></i> <span className="nav-font">Sign In</span>
                </div>
               </div>
               
            <div className="nav-right order-nav">
                <div>
                    <img src={cart} alt="" width="40rem"/>
                </div>
<div className="order-nav2">
   <div>
    <img src={artBoard} alt="" width="25rem"/> <span>{quantity}</span> 
   </div>
    <div>
        <span>৳ {price.toFixed(2)}</span>
    </div>
    <img className="arrow-img" src={leftArrow} alt="" width="30rem"/>
</div>

            </div>
           
        </div>
        </nav>
        </header>
        </div>
    );
};

export default Header;