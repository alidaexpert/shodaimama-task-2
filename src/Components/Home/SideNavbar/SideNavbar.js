import React, { useEffect, useState } from 'react';
import home from '../../../icons/sidebar/home.png'
import fresh from "../../../icons/sidebar/fresh.c490817a.png"
import regular from "../../../icons/sidebar/regular.13e10ad7.png"
import preorder from "../../../icons/sidebar/preorders2.866c3fa6.png"

import "./SideNavbar.css"
const SideNavbar = () => {
        const [category,setCategory]=useState([])
    useEffect(()=>{
        fetch("./category.json")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    
    return (
        <div className="left-sidebar">
        <div className="left-sidebar-topnav">
<ul>
 <li>
    <a className="left-sidebar-nav-style" href=""><img src={home} alt="" width="30rem"/>
     <p>Home</p></a> 
 </li>
 <li>
     <a className="left-sidebar-nav-style" href=""><img src={fresh} alt="" width="30rem" />
     <p>Fresh</p></a> 
 </li>
 <li>
     <a className="left-sidebar-nav-style" href=""><img src={regular} alt="" width="30rem"/>
     <p>Regular</p></a> 
 </li>
 <li>
     <a className="left-sidebar-nav-style" href=""><img src={preorder} alt="" width="30rem"/>
     <p>Preorder</p></a> 
 </li>
</ul>
        </div>
        <div className="left-sidebar-middlenav">
            <p>Explore <span className="explore-name">Shodai<span>Mama</span></span></p>
        </div>
        <div className="left-sidebar-bottomnav">
{
    category.map(list=>(
        <ul key={list.categoryName}>
 <li>
     <a className="left-sidebar-nav-style" href="">
         <img src={list.categoryImg} alt="" width="30rem"/>
         <p>{list.categoryName}</p>
     </a>
 </li>

</ul>
    ))
}
        </div>
    </div>
    );
};

export default SideNavbar;