import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/product/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productKey])
    
    
    return (
        <div className="product__detail">
            <h1 className="text-center mb-5">Your Product Details.</h1>
            <Product showAddToCart={true} product={product}></Product>
        </div>
    );
};

export default ProductDetail;