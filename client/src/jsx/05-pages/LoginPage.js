import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthPageTemplate from 'jsx/04-templates/AuthPageTemplate';
import Form from 'jsx/03-organisms/Form';
import FormField from 'jsx/02-molecules/FormField';
import ErrorInputMessage  from 'jsx/01-basics/ErrorInputMessage';
import { emailValidation, passwordValidation } from 'jsx/00-helpers/authValidation';

const LoginPage = () => {

    const reduxUser = useSelector( state => state.authReducer.user );
    const storageUser = JSON.parse( localStorage.getItem('user') );
    const user = reduxUser ? reduxUser : storageUser;

    const location = useLocation();
    return ( 
        <>
        {
            user ? <Redirect to={(location.state && location.state.from) ? location.state.from : '/account'} />
            :
            <AuthPageTemplate login='true'>
                <Form action='/login'
                    initialValues={{email:"", password:""}}
                    fields={['email','password']}
                    fieldsValidation={{
                        email:emailValidation,
                        password:passwordValidation
                    }}
                >

                    {({
                        onChange,
                        onBlur,
                        errors,
                        touched,
                        formData
                    }) => (
                            <>

                                <div className="form-field__wrapper">
                                    <FormField 
                                        inputType='email' 
                                        inputName='email' 
                                        placeholder='E-mail:' 
                                        value={formData.email}
                                        onChange={ onChange } 
                                        onBlur={ onBlur }
                                        
                                        touched = { touched.email }
                                        inValid = { errors.email }
                                    />

                                    { !touched.email && <ErrorInputMessage msg={ errors.email } /> }
                                </div>                                    
                                <div className="form-field__wrapper">
                                    <FormField 
                                        inputType='password' 
                                        inputName='password' 
                                        placeholder='Hasło:' 
                                        value={formData.password}
                                        onChange={ onChange } 
                                        onBlur={ onBlur }
                                        
                                        touched = { touched.password }
                                        inValid = {errors.password}
                                        
                                    />

                                    { !touched.password && <ErrorInputMessage msg={ errors.password } /> }
                                </div>                                    
                                
                                <button type='submit' className='btn--primary'>Zaloguj się</button>
                            </>
                        )
                    }
                </Form>
            </AuthPageTemplate>
         }
          
        </>
     );
}
 
export default LoginPage;