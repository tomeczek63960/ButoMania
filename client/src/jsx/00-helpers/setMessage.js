import {
    SET_MSG,
    REMOVE_MSG 
}from 'jsx/00-redux/types/msg';

const setMessage = (dispatch, type, msg) =>{
    dispatch({ type: SET_MSG, payload:{ type, msg }});

    setTimeout(()=>{
        dispatch({ type: REMOVE_MSG });
    },10);
}

export default setMessage;