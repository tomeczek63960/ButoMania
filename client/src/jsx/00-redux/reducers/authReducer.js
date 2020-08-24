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
    CHANGE_USER_DELIVERY_FAILURE
} from '../types/auth';

const defaultState = {
    user:null,
    loading:false
}

const authReducer = (state = defaultState, action) =>{

    switch(action.type){
        case LOGIN_USER_REQUEST:
            return{
                ...state,
                user:null,
                loading:true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading:false,
            };
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                user:null,
                loading:false
            };
        
        case LOGOUT_USER_SUCCESS:
            return{
                ...state,
                user: null,
                loading:false
            };
        
        case CHANGE_USER_DATA_REQUEST:
            return{
                ...state,
                loading:true,
            };
        case CHANGE_USER_DATA_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                loading:false
            };
        case CHANGE_USER_DATA_FAILURE:
            return{
                ...state,
                loading:false
            }; 
        
        case CHANGE_USER_DELIVERY_REQUEST:
            return{
                ...state,
                loading:true
            };
        case CHANGE_USER_DELIVERY_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                loading:false
            };
        case CHANGE_USER_DELIVERY_FAILURE:
            return{
                ...state,
                loading:false
            };  
        
        default: 
            return state;
    }
}

export default authReducer