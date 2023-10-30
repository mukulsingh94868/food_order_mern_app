import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllPizzaReducer } from './reducers/pizzaReducers';

const finalReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer
});

const initialState = {}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;

