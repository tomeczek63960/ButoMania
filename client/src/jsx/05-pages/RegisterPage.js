import React from 'react';
import AuthPageTemplate from 'jsx/04-templates/AuthPageTemplate';

import Form from 'jsx/03-organisms/Form';
import FormField from 'jsx/02-molecules/FormField';
import ErrorInputMessage  from 'jsx/01-basics/ErrorInputMessage';
import { emailValidation, passwordValidation, passwordConfirmValidation, nameValidation, surnameValidation } from 'jsx/00-helpers/authValidation';

const RegisterPage = () => {
    return ( 
        <>
            <AuthPageTemplate>
                <Form action="/register"
                    initialValues={{ email:"", password:"", passwordConfirm:"", name:"", surname:"" }}
                    fields={[ 'name', 'email', 'surname', 'password', 'passwordConfirm' ]}
                    fieldsValidation={{
                        email:emailValidation,
                        password:passwordValidation,
                        passwordConfirm:passwordConfirmValidation,
                        name:nameValidation,
                        surname:surnameValidation
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
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='password'
                                            inputName='passwordConfirm'
                                            placeholder='Potwierdź hasło:' 
                                            value={formData.passwordConfirm}
                                            onChange = { onChange }
                                            onBlur={ onBlur }
                                            
                                            touched = {touched.passwordConfirm}
                                            inValid={ errors.passwordConfirm }
                                        />

                                        { !touched.passwordConfirm && <ErrorInputMessage msg={ errors.passwordConfirm } /> }
                                    </div>                                
                                    
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='text'
                                            inputName='name'
                                            placeholder='Imię:' 
                                            value={formData.name}
                                            onChange = { onChange }
                                            onBlur={ onBlur }
                                            
                                            touched = {touched.name}
                                            inValid={ errors.name }
                                        />

                                        { !touched.name && <ErrorInputMessage msg={ errors.name } /> }
                                    </div>                                
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='text'
                                            inputName='surname'
                                            placeholder='Nazwisko:' 
                                            value={formData.surname}
                                            onChange = { onChange }
                                            onBlur={ onBlur }
                                            
                                            touched = {touched.surname}
                                            inValid={ errors.surname }
                                        />

                                        { !touched.surname && <ErrorInputMessage msg={ errors.surname } /> }
                                    </div>                                
                                    
                                    <button type='submit' className='btn--primary'>Załóż konto</button>
                                </>
                            )
                        }
                </Form>
            </AuthPageTemplate>
        </>
     );
}
 
export default RegisterPage;