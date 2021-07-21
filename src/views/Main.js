import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


export default () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>setProduct(res.data))
            .catch(err=>console.log("Error: ", err))
                
    }, [])
    return (
        <>
            <ProductForm/>
            <hr/>
            <ProductList product={product}/>
        </>
    )
}