import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])

    
    return (
        <div className="product">
            <div className="row">
                {
                    products.map(pd => 
                        <div className="col-sm-12 col-md-6 col-lg-4">                          
                            <div className="product__container">
                                <Product 
                                    key={pd.key}
                                    showAddToCart={true}
                                    product={pd}
                                ></Product>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;