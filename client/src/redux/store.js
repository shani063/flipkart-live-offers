import {createStore, combineReducers, applyMiddleware} from 'redux';

import { thunk } from 'redux-thunk';

import { getProductDetailsReducer, getProductsReducer, buyProductReducer } from './reducers/productReducer';

import { composeWithDevTools } from '@redux-devtools/extension';

import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
    buy: buyProductReducer,
})

const middleware = [thunk];

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;