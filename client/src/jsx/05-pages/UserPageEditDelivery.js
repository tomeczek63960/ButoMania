import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageTemplate from 'jsx/04-templates/PageTemplate';

import Form from 'jsx/03-organisms/Form';
import FormField from 'jsx/02-molecules/FormField';
import ErrorInputMessage  from 'jsx/01-basics/ErrorInputMessage';
import { phoneValidation, postalCodeValidation } from 'jsx/00-helpers/authValidation';


const UserPageEditDelivery = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));

    const deliveryAdress = user.deliveryAdress;
    return ( 
        <>
            <PageTemplate>
                <div className="user-page user-page__edit">
                    <Link className='user-page__edit-back' to={ (location.state && location.state.from) ? `/${location.state.from}` : '/account'} >Powrót</Link>
                    <h4 className="user-page__heading">{deliveryAdress ? 'Edytuj adres dostawy' : 'Dodaj adres dostawy'}</h4>  
                    
                    <div className="user-page__base-data">
                        <Form action='/edit-delivery' 
                            initialValues={{
                                street: deliveryAdress ? deliveryAdress.street : "",
                                number: deliveryAdress ? deliveryAdress.number : "",
                                city: deliveryAdress ? deliveryAdress.city : "",
                                postalCode: deliveryAdress ? deliveryAdress.postalCode : "",
                                country: deliveryAdress ? deliveryAdress.country : "",
                                contactNumber: deliveryAdress ? deliveryAdress.contactNumber : "",
                            }}
                            fields={[ 'street','number','city','postalCode','country','contactNumber' ]}
                            fieldsValidation={{
                                street:(value) => value !== '' ? ({ valid: true, msg: null }) : ({ valid: false, msg:"Pole wymagane"}),
                                number:(value) => value !== '' ? ({ valid: true, msg: null }) : ({ valid: false, msg:"Pole wymagane"}),
                                city:(value) => value !== '' ? ({ valid: true, msg: null }) : ({ valid: false, msg:"Pole wymagane"}),
                                postalCode:postalCodeValidation,
                                country:(value) => value !== '' ? ({ valid: true, msg: null }) : ({ valid: false, msg:"Pole wymagane"}),
                                contactNumber:phoneValidation,
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
                                            inputName='street' 
                                            placeholder='Ulica:' 
                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            value={formData.street}
                                            touched = { touched.street }
                                            inValid = { errors.street }
                                        />
                            
                                        { !touched.street && <ErrorInputMessage msg={ errors.street } /> }
                                    </div>       
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='number' 
                                            inputName='number' 
                                            placeholder='Number:' 
                                            value={formData.number}

                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            
                                            touched = { touched.number }
                                            inValid = { errors.number }
                                        />

                                        { !touched.number && <ErrorInputMessage msg={ errors.number } /> }
                                    </div>       
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='text' 
                                            inputName='city' 
                                            placeholder='Miasto:' 
                                            value={formData.city}
                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            
                                            touched = { touched.city }
                                            inValid = { errors.city }
                                        />

                                        { !touched.city && <ErrorInputMessage msg={ errors.city } /> }
                                    </div>       
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='text' 
                                            inputName='postalCode' 
                                            placeholder='Kod pocztowy:' 
                                            value={formData.postalCode}
                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            
                                            touched = { touched.postalCode }
                                            inValid = { errors.postalCode }
                                        />

                                        { !touched.postalCode && <ErrorInputMessage msg={ errors.postalCode } /> }
                                    </div>       
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='text' 
                                            inputName='country' 
                                            placeholder='Kraj:' 
                                            value={formData.country}
                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            
                                            touched = { touched.country }
                                            inValid = { errors.country }
                                        />

                                        { !touched.country && <ErrorInputMessage msg={ errors.country } /> }
                                    </div>       
                                    <div className="form-field__wrapper">
                                        <FormField 
                                            inputType='tel' 
                                            inputName='contactNumber' 
                                            placeholder='Telefon kontaktowy:' 
                                            value={formData.contactNumber}
                                            onChange={ onChange } 
                                            onBlur={ onBlur }
                                            
                                            touched = { touched.contactNumber }
                                            inValid = { errors.contactNumber }
                                        />

                                        { !touched.contactNumber && <ErrorInputMessage msg={ errors.contactNumber } /> }
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
 
export default UserPageEditDelivery;