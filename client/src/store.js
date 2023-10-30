import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllPizzaReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cardReducers';

const finalReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
}
const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;

