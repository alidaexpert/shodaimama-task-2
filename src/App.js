import './App.css';
import Header from './Components/Headers/Header/Header';
import HomePage from './Components/Home/HomePage/HomePage';
import { useEffect, useState } from 'react';
import useProducts from './CustomHooks/useProducts';
import { addToDb, getStoredCart } from './localStorage/localStorage';
function App() {
  const [products]=useProducts([]);
  const [count,setCount]= useState([])
  useEffect(()=>{
    if(products.length){
    const savedCart=getStoredCart()
    const storedCart=[]
    for (const key in savedCart) {
      const addedProduct=products.find(product=>
        product.id===parseInt(key)
        )
    if(addedProduct){
    const quantity=savedCart[key]
    addedProduct.quantity=quantity
    storedCart.push(addedProduct)
    }}
    setCount(storedCart)
}
},[products])
  // add to cart handler 
  const handleAddToCart=product=>{
    const exists=count.find(pd=>pd.key===product.id)
    let newCount=[]
    if(exists){
        const rest=count.filter(pd=>pd.key!==product.id)
        exists.quantity=exists.quantity+1
        newCount=[...rest,product]
    }
    else{
        product.quantity=1
        newCount=[...count,product]
    }
    setCount(newCount)
    addToDb(product.id)
   
}
  
  return (
    <div className="">
     <Header count={count}></Header>
     <HomePage products={products} handler={handleAddToCart}></HomePage>
    </div>
  );
}

export default App;
