import React from 'react';
import "./TopNav.css"
import home from "../../../icons/sidebar/home.png"
const TopNav = () => {
    return (
        <div className="right-navbar">
        <ul>
            <li className='home-menu-mobile'><a href="#"><img src={home} alt="" /></a></li>
            <li className="mobile-nav-1"><a href="">Fresh</a></li>
            <li className="mobile-nav-2"><a href="">Regular</a></li>
            <li className="mobile-nav-3"><a href="">Preorder</a></li>
        </ul>
    </div>
    );
};

export default TopNav;