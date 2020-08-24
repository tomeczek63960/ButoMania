import { SET_MSG, REMOVE_MSG } from 'jsx/00-redux/types/msg';

const msgReducer = ( state = { msg: null }, action ) =>{

    switch(action.type){
        case SET_MSG:
            return{
                ...state,
                msg: { type: action.payload.type, info: action.payload.msg }
            };
        case REMOVE_MSG:
            return{
                ...state,
                msg: null
            };
        default:
            return state;
    }
}

export default msgReducer;