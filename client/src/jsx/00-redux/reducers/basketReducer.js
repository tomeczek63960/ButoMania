import {
    FETCH_BASKET_PRODUCTS_REQUEST,
    FETCH_BASKET_PRODUCTS_SUCCESS,
    FETCH_BASKET_PRODUCTS_FAILURE,
    REMOVE_BASKET_PRODUCT_REQUEST,
    REMOVE_BASKET_PRODUCT_SUCCESS,
    REMOVE_BASKET_PRODUCT_FAILURE,
    ADD_PRODUCT_TO_BASKET_REQUEST,
    ADD_PRODUCT_TO_BASKET_SUCCESS,
    ADD_PRODUCT_TO_BASKET_FAILURE,
    CHANGE_AMOUNT_IN_BASKET_REQUEST,
    CHANGE_AMOUNT_IN_BASKET_SUCCESS,
    CHANGE_AMOUNT_IN_BASKET_FAILURE,
    RESET_BASKET_REQUEST,
    RESET_BASKET_SUCCESS,
    RESET_BASKET_FAILURE
}from '../types/basket';

const initialState = {
    basketProducts: [],
    success:false,
    loading:false
}
const basketReducer = (state = initialState, action) =>{

    switch(action.type){
        case FETCH_BASKET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                basketProducts:[]
            };
        case FETCH_BASKET_PRODUCTS_SUCCESS:
            return{
                ...state,
                basketProducts: action.payload.basketProducts,
                loading:false
            };
        case FETCH_BASKET_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                basketProducts:[]
            };
       
        case REMOVE_BASKET_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            };
        case REMOVE_BASKET_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                basketProducts: state.basketProducts.filter(product =>{
                    const { color, model, size } = action.payload;
                    if((product.color !== color) || (product.model !== model) || (product.size !== size)) return product;
                })
            };
        case REMOVE_BASKET_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false
            };
       
        case ADD_PRODUCT_TO_BASKET_REQUEST:
            return{
                ...state,
                loading:true
            };
        case ADD_PRODUCT_TO_BASKET_SUCCESS:
            return{
                ...state,
                basketProducts: [...state.basketProducts, action.payload.product],
                loading:false
            };
        case ADD_PRODUCT_TO_BASKET_FAILURE:
            return{
                ...state,
                loading:false
            };
       
        case CHANGE_AMOUNT_IN_BASKET_REQUEST:
            return{
                ...state,
                loading:true
            };
        case CHANGE_AMOUNT_IN_BASKET_SUCCESS:
            return{
                ...state,
                loading:false,
                basketProducts: state.basketProducts.map(product =>{
                    const { model, color, size, amountInBasket } = action.payload;
                    if( product.model !== model || product.color !== color || product.size !== size ) return product;

                    product.amountInBasket = amountInBasket;
                    return product;
                })
            };
        case CHANGE_AMOUNT_IN_BASKET_FAILURE:
            return{
                ...state,
                loading:false
            };
       
        case RESET_BASKET_REQUEST:
            return{
                ...state,
                loading:true
            };
        case RESET_BASKET_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                loading:false
            };
        case RESET_BASKET_FAILURE:
            return{
                ...state,
                loading:false
            };
            
        case "AFTER_BASKET_RESET":
            return{
                ...state,
                success:false
            };
        default: return state;
    }
}
export default basketReducer;