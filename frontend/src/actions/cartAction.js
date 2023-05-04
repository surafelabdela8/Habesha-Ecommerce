import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant"


export const addToCart=(productId,Qty)=>async(dispatch,getState)=>{
    const {data} =await axios.get(`http://127.0.0.1:5000/api/products/${productId}`)
    dispatch({
type:CART_ADD_ITEM,
payload: {
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    product: data._id,
    Qty,
}, // by dispathcing this action to the redux store we are requesting the store to add this product to the cart 
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart=(productId)=>async (dispatch,getState)=>{
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}