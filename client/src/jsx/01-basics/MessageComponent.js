import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const MessageComponent = ( ) => {
    const msg = useSelector(state => state.msgReducer.msg );

    useEffect(()=>{
        msg && toast[msg.type](msg.info, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }, [msg]);
    
    return (  
        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit = {3}
            />
           
        </>
    );
}
 
export default MessageComponent;