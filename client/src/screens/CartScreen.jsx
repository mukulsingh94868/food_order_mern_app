import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { addToCart, deleteFromCart } from '../actions/cardActions';
import Checkout from '../components/Checkout';


const CartScreen = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;

    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
    return (
        <div>
            <div className='row justify-content-center centerData'>
                <div className='col-md-6'>
                    <h1 className='myCart' style={{ fontSize: '40px !important' }}>My Cart</h1>

                    {cartItems?.map((item, index) => {
                        return (
                            <div className='flex-container' key={index}>
                                <div className='text-left m-1 w-100' style={{ textAlign: 'justify' }}>
                                    <h1 className='varientItem'>{item?.name} [{item?.varient}]</h1>
                                    <Typography variant='h6'>Price: {item?.quantity} * {item?.prices[0][item?.varient]} = {item?.price} </Typography>

                                    <Typography className='varientQuantity'>
                                        Quantity:
                                        <AddIcon className='addBtn' onClick={() => dispatch(addToCart(item, item?.quantity + 1, item?.varient))} />
                                        <b>{item?.quantity}</b>
                                        <RemoveIcon className='removeBtn' onClick={() => dispatch(addToCart(item, item?.quantity - 1, item?.varient))} />
                                    </Typography>

                                    <hr />
                                </div>

                                <div className='m-1 w-100'>
                                    <img src={item?.image} alt="" style={{ height: 80, width: 80 }} />
                                </div>

                                <div className='m-1 w-100'>
                                    <DeleteIcon className='deleteIcon mt-5' onClick={() => dispatch(deleteFromCart(item))} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='col-md-4 text-right'>
                    <h2>Sub Total: {subTotal}</h2>
                    <Checkout subTotal={subTotal} />
                </div>
            </div>
        </div>
    )
}

export default CartScreen