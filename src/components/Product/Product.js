import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {img, name, seller,price,stock, star} = props.product;
    return (
        <div className="product">
            <div className="img-area">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <div className="product-price-feature">
                    <div className="product-price">
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddProduct(props.product)} className='add-btn'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div className="product-feature">
                        <p>{star}</p>
                        <h4>Features</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;