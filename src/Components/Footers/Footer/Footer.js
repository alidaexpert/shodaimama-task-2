import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
       <footer>
            <div className="footer-section">
         <div className="footer-logo-card">
            <div className="footer-img">
                <img src="./images/logo/logo.png" alt=""  width="110rem"/>
            </div>
             <ul className="footer-icon">
                 <li><a href=""><i className="fab fa-facebook-square"></i></a></li>
                 <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                 <li><a href=""><i className="fab fa-instagram"></i></a></li>
                 <li><a href=""><i className="fab fa-youtube"></i></a></li>
             </ul>
             <button><a href="">SHODAIMAMA APP</a>
             <div className="footer-button animation"></div>
             </button>
            <em>ShodaiMama &copy; 2021</em>
         </div>
         <div className="footer-links">
             <h4>Useful Links</h4>
             <ul className="footer-link-list">
                 <li><a href="">About ShodaiMama</a></li>
                 <li><a href="">FAQ</a></li>
                 <li><a href="">Contact Us</a></li>
                 <li><a href="">Career</a></li>
             </ul>
         </div>
         <div className="footer-links">
             <h4>Helpful Links</h4>
             <ul className="footer-link-list">
                 <li><a href="">Why Choose ShodaiMama</a></li>
                 <li><a href="">Privacy policy</a></li>
                 <li><a href="">Terms & Condition</a></li>
                 <li><a href="">Delivery, Return & Refund</a></li>
             </ul>
         </div>
         <div className="footer-links">
             <h4>Contact Us</h4>
             <ul className="footer-contact">
                 <li><i className="fas fa-map-marker-alt"></i><span>House 18, block: k, South Banasree, Dhaka
                    
                   </span></li>
                 <li><i className="far fa-envelope"></i><span>info@shodaimama.com</span></li>
                 <li><i className="fas fa-headset"></i><span>support@shodaimama.com</span></li>
                 <li><button className="footer-contact-btn">Help : +8801894874999</button></li>
             </ul>
         </div>
         </div>
        {/* // <!-- payment info  --> */}
        <div className="payment-info">
            <img src="./images/payments/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png" alt="" width="100%"/>
        </div>
       </footer>
    );
};

export default Footer;