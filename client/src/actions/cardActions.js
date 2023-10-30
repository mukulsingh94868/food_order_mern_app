export const addToCart = (pizza, quantity, varient) => async (dispatch, getState) => {
    var cardItem = {
        name: pizza?.name,
        _id: pizza?._id,
        image: pizza?.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza?.prices,
        price: pizza?.prices[0][varient] * quantity
    };

    if (cardItem?.quantity > 10) {
        alert('You cannot add more than 10 items');
    } else {
        if (cardItem?.quantity < 1) {
            dispatch({
                type: 'DELETE_FROM_CART',
                payload: pizza
            });
        } else {
            dispatch({
                type: 'ADD_TO_CART',
                payload: cardItem
            });
        }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const deleteFromCart = (pizza) => async (dispatch, getState) => {
    dispatch({
        type: 'DELETE_FROM_CART',
        payload: pizza
    });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}