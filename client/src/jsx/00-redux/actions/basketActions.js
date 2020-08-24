import axios from 'axios';
import getUserData from 'jsx/00-helpers/getUserData';
import setMessage from 'jsx/00-helpers/setMessage';
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
}from 'jsx/00-redux/types/basket';

export const fetchBasketProducts = () => async dispatch =>{
    dispatch({ type: FETCH_BASKET_PRODUCTS_REQUEST });
    const { token, user } = getUserData();

    try{
        const fetchReq = await axios.get("/basket/products", { headers: { token, body: user.email } });
        dispatch({ type: FETCH_BASKET_PRODUCTS_SUCCESS, payload: { basketProducts: fetchReq.data } });

    }catch(err){
        const msg = err.response.data.msg || 'Problemy z serwerem';
        dispatch({ type: FETCH_BASKET_PRODUCTS_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const removeBasketProduct = (model, color, size) => async dispatch =>{
    dispatch({ type: REMOVE_BASKET_PRODUCT_REQUEST });
    const { token, user } = getUserData();

    try{
        const body = await JSON.stringify({ model, color, size, email: user.email });
        await axios.delete('/basket/remove', { headers: { body, token } });
        dispatch({ type: REMOVE_BASKET_PRODUCT_SUCCESS, payload: { model, color, size } });
    }catch(err){
        const msg = err.response.data.msg || 'Problemy z serwerem';
        dispatch({ type: REMOVE_BASKET_PRODUCT_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const addPorductToBasket = ( product, color, size, img ) => async dispatch =>{
    dispatch({ type: ADD_PRODUCT_TO_BASKET_REQUEST});
    const { token, user } = getUserData();
    
    const {name, model, shoesType, type, brand, price, discount, height, weight, rates, ratesAmount} = product; 
    const newProductInBasket = { name, model, shoesType, type, brand, price, discount, height, weight, rates, ratesAmount, color, size, img, amountInBasket: 1, email:user.email };

    try{
        const addProductReq = await axios.post('/basket/add', newProductInBasket, { headers: { token } } );
        dispatch({ type: ADD_PRODUCT_TO_BASKET_SUCCESS, payload: { product: addProductReq.data } });
        setMessage( dispatch, 'success', 'Produkt dodano do koszyka' );

    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: ADD_PRODUCT_TO_BASKET_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const changeAmountInBasket = ( model, color, size, amountInBasket ) => async dispatch =>{
    dispatch({ type: CHANGE_AMOUNT_IN_BASKET_REQUEST });
    const { token, user } = getUserData();

    try{
        await axios.put('/basket/change-amount',{ model, size, color, amountInBasket, email: user.email }, { headers: { token } });
        dispatch({ type: CHANGE_AMOUNT_IN_BASKET_SUCCESS, payload: { model, size, color, amountInBasket } });

    }catch(err){
        const msg = err.response.data.msg || 'Problemy z serwerem';
        dispatch({ type: CHANGE_AMOUNT_IN_BASKET_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const resetBasket = () => async dispatch =>{
    dispatch({ type: RESET_BASKET_REQUEST });
    const { token, user } = getUserData(); 

    try{ 
        await axios.delete('/basket/remove-all', { headers: { token, email: user.email } });
        dispatch({ type: RESET_BASKET_SUCCESS, payload: { success: true } });

        setMessage(dispatch, 'success', "Płatność dokonana pomyślnie");
        setTimeout(()=>{
            dispatch({ type: "AFTER_BASKET_RESET" });
        },500);
        
    }catch(err){
        const msg = err.response.data.msg || 'Problemy z serwerem';
        dispatch({ type: RESET_BASKET_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}