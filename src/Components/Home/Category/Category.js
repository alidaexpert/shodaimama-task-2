import React, { useEffect, useState } from 'react';
import "./Category.css"
const Category = () => {
    const [category,setCategory]=useState([])
    useEffect(()=>{
        fetch("./category.json")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        // <!-- Categories -->
    <div>
        <h1 className="category-headline"><span className="bottom-line">Shodaimama Categories</span> </h1>
        <div className="category-grid-template">
            {
                category.map(list=>(
<div key={list.categoryName} className="category-card">
                <img src={list.categoryImg} alt="" width="100%"/>
                <p>{list.categoryName}</p>
            </div>

                ))
            }
        </div>
    </div>
    );
};

export default Category;