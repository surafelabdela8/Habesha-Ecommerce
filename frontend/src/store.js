import {createStore,applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { productDetailsReducer, productListReducer } from './reducers/productReducers'

const initialState={}

const reducer= combineReducers({
    productList:productListReducer,
    productDetails: productDetailsReducer,
})
    

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //to show redux store in chrome redux devtool we update compose so we write this code 
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk))) //thunk is important b/c it make possible to send ajax req to redux action

export default store;