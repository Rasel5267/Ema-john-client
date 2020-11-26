import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from '../../StateProvider';

const Product = (props) => {
    const { img, name, price, stock, key, star, _id } = props.product;
    const [{basket, user}, dispatch] = useStateValue();
    const handleAddProduct = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: _id,
                img: img,
                name: name,
                price: price,
                stock: stock,
                star: star
            }
        })
    }
    return (
        <div>
            <h5><Link className='product__link' to={"/product/"+key}>{name}</Link></h5>
            {
                Array(star).fill().map((_, i) => (
                    <StarIcon className="star" />
                ))
            }
            <br/>
            <span>${price}</span>
            <p><small>Only {stock} left in stock - Order soon</small></p>
            <img className="product__image mt-3" src={img} alt="" /> <br/>
            { props.showAddToCart === true && 
                <div className="cartBtn">
                    <button 
                        className="main-button mt-5" 
                        onClick={handleAddProduct}
                        > 
                            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>
                </div>
            }
        </div>
    );
};

export default Product;