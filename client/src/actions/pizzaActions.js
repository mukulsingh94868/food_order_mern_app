import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
    dispatch({
        type: "GET_PIZZAS_REQUEST"
    })
    try {
        const response = await axios.get('/api/pizzas/getallpizzas');
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