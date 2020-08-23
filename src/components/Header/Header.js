import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import './Header.css';

const Header = () => {
    return (
        <div className ="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder='type here to search'/>
                <span><FontAwesomeIcon icon={faShoppingCart} /> </span>
            </div>
        </div>
    );
};

export default Header;