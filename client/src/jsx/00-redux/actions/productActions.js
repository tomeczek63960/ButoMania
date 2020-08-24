import axios from 'axios';
import setMessage from 'jsx/00-helpers/setMessage';
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

export const fetchCurrentProduct = ( _id ) => async dispatch =>{
    dispatch({ type: FETCH_CURRENT_PRODUCT_REQUEST });

    try{
        const fetchRequest = await axios.get(`/products/product/${_id}`);
        await dispatch({ type: FETCH_CURRENT_PRODUCT_SUCCESS, payload: { currentProduct: fetchRequest.data } });
    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: FETCH_CURRENT_PRODUCT_FAILURE });
        setMessage(dispatch,'error',msg);
    }
}
export const fetchPopularProducts = () => async dispatch =>{
    dispatch({ type: FETCH_POPULAR_PRODUCTS_REQUEST });

    try{
        const fetchRequest = await axios.get('/products/popular-products');
        dispatch({ type: FETCH_POPULAR_PRODUCTS_SUCCESS, payload: { popularProducts: fetchRequest.data }});

    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: FETCH_POPULAR_PRODUCTS_FAILURE });
        setMessage(dispatch,'error',msg);
    }
}
export const fetchFullSearchProducts = (filter) => async dispatch =>{
    dispatch({ type: FETCH_FULL_SEARCH_PRODUCTS_REQUEST });
    const body = JSON.stringify(filter);
    
    try{
        const fetchReq = await axios.get('/products/full-search', { headers: { body } });
        dispatch({ type: FETCH_FULL_SEARCH_PRODUCTS_SUCCESS, payload: { products: fetchReq.data } });
    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: FETCH_FULL_SEARCH_PRODUCTS_FAILURE });
        setMessage(dispatch,'error',msg);
    }
}
export const fetchFilterProducts = (filter) => async dispatch =>{
    dispatch({ type: FETCH_FILTER_PRODUCTS_REQUEST });
    const filterReq = JSON.stringify(filter);
    
    try{
        const fetchRequest = await axios.get('/products/filter', { headers: { body: filterReq }});
        dispatch({ type: FETCH_FILTER_PRODUCTS_SUCCESS, payload: { filterProducts: fetchRequest.data } });
    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: FETCH_FILTER_PRODUCTS_FAILURE });
        setMessage(dispatch,'error',msg);
    }
}
export const fetchSearchProducts = (filter) => async dispatch =>{
    dispatch({ type: FETCH_SEARCH_PRODUCTS_REQUEST });
    const search = JSON.stringify(filter);

    try{
        const fetchRequest = await axios.get('/products/search', { headers: { body: search } });
        dispatch({ type: FETCH_SEARCH_PRODUCTS_SUCCESS, payload: { searchProducts: fetchRequest.data } });
    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: FETCH_SEARCH_PRODUCTS_FAILURE });
        setMessage(dispatch,'error',msg);
    }
}