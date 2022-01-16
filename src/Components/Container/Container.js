import React from 'react';
import Banner from '../Home/Banner/Banner';
import Category from '../Home/Category/Category';
import Preorder from '../Home/Preorder/Preorder';
import Regular from '../Home/Regular/Regular';
import WhyShodaimama from '../Home/WhyShodaimama/WhyShodaimama';
import "./Container.css"
const Container = ({products,handler}) => {
    return (
        <div  className="container">
          <Banner></Banner>  
          <Preorder></Preorder>
          <Regular products={products} handler={handler}></Regular>
          <Category></Category>
          <WhyShodaimama></WhyShodaimama>
        </div>
    );
};

export default Container;