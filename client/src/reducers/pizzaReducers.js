export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'GET_PIZZAS_SUCCESS':
            return {
                pizzas: action.payload,
                loading: false,
            }
        case 'GET_PIZZAS_FAILED':
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}