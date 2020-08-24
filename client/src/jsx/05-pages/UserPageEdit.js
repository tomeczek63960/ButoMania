import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageTemplate from 'jsx/04-templates/PageTemplate';

import Form from 'jsx/03-organisms/Form';
import FormField from 'jsx/02-molecules/FormField';
import ErrorInputMessage  from 'jsx/01-basics/ErrorInputMessage';
import { nameValidation, emailValidation, surnameValidation, passwordValidation } from 'jsx/00-helpers/authValidation';


const UserPageEdit = () => {

    const userRedux = useSelector(state => state.authReducer.user);
    const userStorage = JSON.parse(localStorage.getItem('user'));
    const user = userRedux ? userRedux : userStorage;

    const {name,surname, password, email} = user;
    return ( 
        <>
            <PageTemplate>
                <div className="user-page user-page__edit">
                    <Link className='user-page__edit-back' to='/account'>Powrót</Link>
                    <h4 className="user-page__heading">Edytuj informacje o koncie!</h4>  
                    
                    <div className="user-page__base-data">
                   
                        <Form action='/edit-user' 
                            initialValues={{ name, surname, email, password }}
                            fields={['name','surname','password','email']}
                            fieldsValidation={{
                                name:nameValidation,
                                surname:surnameValidation,
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
                                            inputType='text' 
                                            inputName='name' 
                                            placeholder='Imię:' 
                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            value={formData.name}
                                            touched = { touched.name }
                                            inValid = { errors.name }
                                        />
                            
                                        { !touched.name && <ErrorInputMessage msg={ errors.name } /> }
                                    </div>       
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='text' 
                                            inputName='surname' 
                                            placeholder='Nazwisko:' 
                                            value={formData.surname}

                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            
                                            touched = { touched.surname }
                                            inValid = { errors.surname }
                                        />

                                        { !touched.surname && <ErrorInputMessage msg={ errors.surname } /> }
                                    </div>       
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
                                            inValid = { errors.password }
                                        />

                                        { !touched.password && <ErrorInputMessage msg={ errors.password } /> }
                                    </div>       
                                    <button className="user-page__user-edit btn--primary" type='submit'>Zapisz</button>

                                </>
                                )
                            }
                        </Form>

                    </div>

                </div>
            </PageTemplate>
        </>
     );
}
 
export default UserPageEdit;