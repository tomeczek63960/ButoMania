import axios from 'axios';
import getUserData from 'jsx/00-helpers/getUserData';
import setMessage from 'jsx/00-helpers/setMessage';
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    CHANGE_USER_DATA_REQUEST,
    CHANGE_USER_DATA_SUCCESS,
    CHANGE_USER_DATA_FAILURE,
    CHANGE_USER_DELIVERY_REQUEST,
    CHANGE_USER_DELIVERY_SUCCESS,
    CHANGE_USER_DELIVERY_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from '../types/auth';

export const registerUser = ( newUser ) => async dispatch =>{
    dispatch({ type: REGISTER_USER_REQUEST });
    
    try{
        await axios.post('/auth/register', newUser);
        dispatch({ type: REGISTER_USER_SUCCESS });
        setMessage(dispatch, 'success', "Konto utworzone pomyślnie!");

    }catch(err){
        const msg = err.response.data.msg || 'Problemy z serwerem';
        dispatch({ type: REGISTER_USER_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
} 
export const loginUser = ( body ) => async dispatch =>{
    dispatch({ type: LOGIN_USER_REQUEST });

    try{
        const loginRequest = await axios.post("/auth/login",body);

        localStorage.setItem('token',loginRequest.data.token);
        localStorage.setItem('user', JSON.stringify( loginRequest.data.user ) );
        dispatch({ type: LOGIN_USER_SUCCESS, payload:{user: loginRequest.data.user }});
    }catch(err){

        const msg = err.response.data.msg || 'Problemy z serwerem';    
        dispatch({ type: LOGIN_USER_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const changeUserData = ( newData ) => async dispatch =>{
    dispatch({ type: CHANGE_USER_DATA_REQUEST });
    const { token, user } = getUserData();
    const data = { ...newData, prevEmail: user.email };

    try{    
        const changeReq = await axios.put('/auth/change', data, { headers: { token } });

        localStorage.setItem('user',JSON.stringify(changeReq.data));
        dispatch({ type: CHANGE_USER_DATA_SUCCESS, payload: { user: changeReq.data } });
        setMessage(dispatch, 'success', 'Dane zmienione pomyślnie!');

    }catch(err){
        const msg = err.response.data.msg || "Problemy z serwerem";
        dispatch({ type: CHANGE_USER_DATA_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const changeUserDelivery = ( data ) => async dispatch =>{
    dispatch({ type: CHANGE_USER_DELIVERY_REQUEST });
    const { token, user } = getUserData();

    try{
        const fetchReq = await axios.put('/auth/change-delivery', { data, email: user.email, password: user.password }, { headers: { token } });

        localStorage.setItem('user', JSON.stringify( fetchReq.data ));
        dispatch({ type: CHANGE_USER_DELIVERY_SUCCESS, payload: { user: fetchReq.data } });
        setMessage(dispatch, 'success', 'Dane zmienione pomyślnie');
   
    }catch(err){
        const msg = err.response.data.msg || 'Problemy z serwerem';
        dispatch({ type: CHANGE_USER_DELIVERY_FAILURE });
        setMessage(dispatch, 'error', msg);
    }
}
export const logout = () => dispatch =>{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT_USER_SUCCESS });
}