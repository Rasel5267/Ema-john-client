import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="row">
                <div className="col-md-9 col-sm-12">
                    <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB$@3492668_.jpg" alt=""/>
                    <div>
                        <h3 className="ml-2">Hello, {user?.email}</h3>
                        <h2 className="checkout__title">Your shopping Basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct 
                                    id={item.id}
                                    name={item.name}
                                    img={item.img}
                                    price={item.price}
                                    star={item.star}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <Subtotal />
                </div>
            </div>
        </div>
    );
};

export default Checkout;