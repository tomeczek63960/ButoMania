import React from 'react';
import PropTypes from 'prop-types';

const ErrorInputMessage = ( { msg }) => {
    return ( 
        <>
            {msg && 
                <div className= 'error-message' > 
                    <span >{msg}</span>
                </div>
            }
        </>
     );
}

ErrorInputMessage.propTypes = {
    msg:PropTypes.string
}
export default ErrorInputMessage;