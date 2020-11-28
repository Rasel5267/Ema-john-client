import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = ({ img, name, price, star, id, hideButton }) => {
    const [{basket}, dispatch] = useStateValue();
    const handleRemoveProduct = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct__container">
                <img src={img} alt=""/>
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{name}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {
                            Array(star).fill().map((_, i) => (
                                <StarIcon className="star" />
                            ))
                        }
                    </div>
                    {hideButton && (
                        <button onClick={handleRemoveProduct} className="checkoutProduct__btn">Remove from cart</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutProduct;