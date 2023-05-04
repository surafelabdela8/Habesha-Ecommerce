import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";


export const cartReducer = (state = { cartItems:[] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
            case CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(x => x.product !== action.payload), //rmove a product that in cart that is equal to the action payload or
                    // filter out products not equal to action payload but delete the rest
                    //as we know action payload contains the products
                };
       
        default:
            return state;
    }
};