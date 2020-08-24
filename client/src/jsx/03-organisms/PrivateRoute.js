import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ path, component }) => {
    const reduxUser = useSelector(state => state.authReducer.user);
    const storageUser = localStorage.getItem('user') ;
    const user = reduxUser ? reduxUser : storageUser ;

    return ( 
            user ? 
                <Route path={path} component={component} />
                    :
                <Redirect to ={{ pathname:'/login', state: { from: path } }} />
     );
}

PrivateRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
};
export default PrivateRoute;