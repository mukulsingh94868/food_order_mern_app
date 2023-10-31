import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';


const Checkout = ({ subTotal }) => {
    const dispatch = useDispatch();

    const orderstate = useSelector((state) => state.placeOrderReducer);
    const { loading, error, success } = orderstate;
    const tokenHander = (token) => {
        dispatch(placeOrder(token, subTotal));
    };
    return (
        <div>
            {loading && (<Loading />)}
            {success && (<Success success="Your order placed Successfully" />)}
            {error && (<Error error="Something went wrong" />)}

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