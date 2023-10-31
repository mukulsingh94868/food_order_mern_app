import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getUserOrders } from '../actions/orderActions';


const OrderScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch])
    return (
        <div>
            <h2 className='text-center m-2 registerText'>My Order</h2>
        </div>
    )
}

export default OrderScreen;