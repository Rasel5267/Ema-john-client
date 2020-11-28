import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://secure-earth-74198.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
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