import axios from 'axios';

export const getAlPizzas = () => async (dispatch) => {
    dispatch({
        type: "GET_PIZZAS_REQUEST",
    })
    try {
        const response = await axios.get('/api/pizzas/getpizzas');
        console.log('response', response);

        dispatch({
            type: "GET_PIZZAS_SUCCESS",
            payload: response.data
        })
    } catch (error) {
        console.error(error);
        dispatch({
            type: "GET_PIZZAS_FAILED",
            payload: error
        })
    }
}