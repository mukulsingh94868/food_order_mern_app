import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Typography } from '@mui/material';


const OrderScreen = () => {
    const dispatch = useDispatch();
    const orderState = useSelector((state) => state.getUserOrdersReducer);

    const { orders, error, loading } = orderState;

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch])
    return (
        <div>
            <Typography className='text-center m-2 registerText'>My Order</Typography>
            <hr />
            <div className='row justify-content-center'>
                {loading && <Loading />}
                {error && <Error error="Something went wrong" />}
                {orders && orders?.map((order, index) => {
                    return (
                        <div className='col-md-8 m-2 p-1' style={{ background: 'gray', color: 'white' }}>
                            <div className='flex-container'>
                                <div className='text-left w-100 m-1'>
                                    <Typography variant='h2' style={{ fontSize: '25px' }}>ITEMS</Typography>
                                    <hr />
                                    {
                                        order?.orderItems?.map((item) => {
                                            return (
                                                <div>
                                                    <Typography>{item?.name} [{item?.varient}] * {item?.quantity} = {item?.price}</Typography>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='text-left w-100 m-1'>
                                    <Typography variant='h2' style={{ fontSize: '25px' }}>Address</Typography>
                                    <hr />
                                    <Typography>Street : {order?.shippingAddress?.street}</Typography>
                                    <Typography>City : {order?.shippingAddress?.city}</Typography>
                                    <Typography>Country : {order?.shippingAddress?.country}</Typography>
                                    <Typography>Pin code : {order?.shippingAddress?.pincode}</Typography>
                                </div>
                                <div className='text-left w-100 m-1'>
                                    <Typography variant='h2' style={{ fontSize: '25px' }}>Order Info</Typography>
                                    <hr />
                                    <Typography>Order Amount : {order?.orderAmount} </Typography>
                                    <Typography>Date : {order?.createdAt.substring(0, 10)}</Typography>
                                    <Typography>Transaction Id : {order?.transactionId}</Typography>
                                    <Typography>Order Id : {order?._id}</Typography>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderScreen;