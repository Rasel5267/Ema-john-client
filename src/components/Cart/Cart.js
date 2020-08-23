import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if(totalPrice < 15){
        shipping = 0;
    }
    else if(totalPrice > 15 && totalPrice <99){
        shipping = 4.99;
    }
    else if(totalPrice > 100 && totalPrice <500){
        shipping = 15.99;
    }
    else if(totalPrice >500){
        shipping = 22.99;
    }
    const tax = (totalPrice/5);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(totalPrice)}</p>
            <small>Shipping cost: ${shipping}</small>
            <p><small>Tax: ${formatNumber(tax)}</small></p>
            <p>Total price: ${formatNumber(totalPrice + shipping + tax)}</p>
            <button className="placeBtn">Place Order</button>
        </div>
    );
};

export default Cart;