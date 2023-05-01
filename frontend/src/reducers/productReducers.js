import { PRODUCT_DETAILS_FAIL,
     PRODUCT_DETAILS_REQUEST, 
     PRODUCT_DETAILS_SUCCESS, 
     PRODUCT_LIST_FAIL, 
     PRODUCT_LIST_REQUEST, 
     PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer=(state={loading:true,products:[]},action)=>{  //creating the reducer that cahnge the current state and return new state
    switch(action.type){
        case PRODUCT_LIST_REQUEST:  // if action type is this it is making request to db and it's loading thats why loading is true (loading is state in the homescreen component)
            return {loading:true};
            case PRODUCT_LIST_SUCCESS:       // if the action type is this the db response successfuly and we get the data action.payload 
                return {loading:false,products:action.payload};
                case PRODUCT_LIST_FAIL:      //  if the action type is this one there an error so send that error message
                    return {loading:false,error:action.payload}
            default :
            return state;
    }
}

//we update the store based on the product action from the action folder b/c this is what a reducer works based on the action it will update the state and return the new state


export const productDetailsReducer =(state = {product: {}, loading: true}, action)=>{
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
        return { loading:true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading:false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading:false, error:action.payload };
        default:
            return state;
    }
};