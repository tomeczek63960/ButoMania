import {
    FETCH_CURRENT_PRODUCT_REQUEST,
    FETCH_CURRENT_PRODUCT_SUCCESS,
    FETCH_CURRENT_PRODUCT_FAILURE,
    FETCH_POPULAR_PRODUCTS_REQUEST,
    FETCH_POPULAR_PRODUCTS_SUCCESS,
    FETCH_POPULAR_PRODUCTS_FAILURE,
    FETCH_FILTER_PRODUCTS_REQUEST,
    FETCH_FILTER_PRODUCTS_SUCCESS,
    FETCH_FILTER_PRODUCTS_FAILURE,
    FETCH_SEARCH_PRODUCTS_REQUEST,
    FETCH_SEARCH_PRODUCTS_SUCCESS,
    FETCH_SEARCH_PRODUCTS_FAILURE,
    FETCH_FULL_SEARCH_PRODUCTS_REQUEST,
    FETCH_FULL_SEARCH_PRODUCTS_SUCCESS,
    FETCH_FULL_SEARCH_PRODUCTS_FAILURE
}from '../types/products';

const defaultState ={
    currentProduct:[],
    popularProducts:[],
    filterProducts:[],
    searchProducts:[],
    fullSearchProducts:[],
    user:null,
    loading:false
}
const productReducer = (state = defaultState, action) =>{

    switch(action.type){
        case FETCH_CURRENT_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
                currentProduct:[]
            };
        case FETCH_CURRENT_PRODUCT_SUCCESS:
            return{
                ...state,
                currentProduct:action.payload.currentProduct,
                loading:false
            };
        case FETCH_CURRENT_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                currentProduct:[]
            };
        
        case FETCH_POPULAR_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                popularProducts:[]
            };
        case FETCH_POPULAR_PRODUCTS_SUCCESS:
            return{
                ...state,
                popularProducts: action.payload.popularProducts,
                loading:false
            };
        case FETCH_POPULAR_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                popularProducts:[]
            };
        
        case FETCH_FILTER_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                filterProducts:[]
            };
        case FETCH_FILTER_PRODUCTS_SUCCESS:
            return{
                ...state,
                filterProducts: action.payload.filterProducts,
                loading:false
            };
        case FETCH_FILTER_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                filterProducts:[]
            };
      
        case FETCH_SEARCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                searchProducts:[]
            };
        case FETCH_SEARCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                searchProducts: action.payload.searchProducts,
                loading:false
            };
        case FETCH_SEARCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                searchProducts:[]
            };
      
        case FETCH_FULL_SEARCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true,
                fullSearchProducts:[]
            };
        case FETCH_FULL_SEARCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                fullSearchProducts: action.payload.products,
                loading:false
            };
        case FETCH_FULL_SEARCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                fullSearchProducts:[]
            };
      
        default:
            return state;
    }
}

export default productReducer;