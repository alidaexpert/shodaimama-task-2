import React from 'react';
import Container from '../../Container/Container';
import Footer from '../../Footers/Footer/Footer';
import SideNavbar from '../SideNavbar/SideNavbar';
import TopNav from '../TopNav/TopNav';
import "./HomePage.css"
const HomePage = ({products,handler}) => {
    return (
        <section className="main-container">
        {/* <!-- padding  --> */}
        <div className="top-padding"></div>
        {/* <!-- left bar section  --> */}
<SideNavbar></SideNavbar>
{/* <!-- right bar section  --> */}
<div className="right-sidebar">
    <TopNav></TopNav>
    <Container products={products} handler={handler}></Container>
    <Footer></Footer>
</div>
        </section>
    );
};

export default HomePage;