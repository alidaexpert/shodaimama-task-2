import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
            // console.log(data)
        }
            )
    },[])

    return [
        products,
        setProduct
    ];
};

export default useProducts;