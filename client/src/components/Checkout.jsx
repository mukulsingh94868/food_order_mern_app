import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';

const Checkout = ({ subTotal }) => {
    const dispatch = useDispatch();
    const tokenHander = (token) => {
        dispatch(placeOrder(token, subTotal));
    };
    return (
        <div>
            <StripeCheckout
                amount={subTotal * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51JtnAbSCYDML1dwkChRjpFPJfXk3bKgZRsTsSpQ7MZuTSzSsESDlMD6GmOGfoeitMZhVPy171yUsdloZUDTWtNez00amRTOhao'
                currency='INR'
            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout