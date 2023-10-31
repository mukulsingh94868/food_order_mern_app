import axios from 'axios';

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
    dispatch({
        type: 'PLACE_ORDER_REQUEST'
    });
    const currentUser = getState()?.loginUserReducer?.currentUser;

    const cartItems = getState()?.cartReducer?.cartItems;
    try {
        const response = await axios.post('/api/orders/placeorder', { token, subtotal, currentUser, cartItems });
        dispatch({
            type: 'PLACE_ORDER_SUCCESS'
        })
        console.log('response', response);
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'PLACE_ORDER_FAILED',
        })
    }
};

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
        type: "GET_USER_ORDERS_REQUEST"
    })
    try {
        const response = await axios.post('/api/orders/getuserorders', { userid: currentUser?._id });
        console.log('response', response)
        dispatch({
            type: "GET_USER_ORDERS_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        console.error(error);
        dispatch({
            type: "GET_USER_ORDERS_FAILED",
            payload: error
        })
    }
}