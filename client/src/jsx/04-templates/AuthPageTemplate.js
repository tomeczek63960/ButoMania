import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from './PageTemplate';
import PropTypes from 'prop-types';

const AuthPageTemplate = ({ children, login }) => {

    return ( 
        <>
            <PageTemplate>
                <div className="auth-page-template">
                    <h4 className="auth-page-template__heading">{ login ? "Logowanie" : "Rejestracja" }</h4>
                   
                    <div className="auth-page-template__content">
                        {children}
                    </div>

                     <p className='auth-page-template__text'> {login ? "Nie posiadasz konta?" : 'Posiadasz już konto?'} </p> 
                    <Link to={login ? '/register' : '/login'} className='btn--primary'>{login ? "Załóż konto": "Zaloguj"}</Link>
                </div>
            </PageTemplate>
        </>
     );
}
AuthPageTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    login: PropTypes.string
};

export default AuthPageTemplate;