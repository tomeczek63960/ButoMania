import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, changeUserData,registerUser, changeUserDelivery } from 'jsx/00-redux/actions/authActions';
import PropTypes from 'prop-types';

const Form = ({children,action, initialValues, fields, fieldsValidation }) => {
    const dispatch = useDispatch();
    const initialErrors = {};
    let initialTouched ={};

    fields.forEach(field =>{
        initialErrors[field] = null;
        initialTouched[field] = true;
    });

    const [ touched, setTouched ] = useState( initialTouched );  
    const [ formData, setFormData ] = useState( initialValues ); 
    const [ errors, setErrors ] = useState( initialErrors );

    const onChange = (e) =>{
        const type  = e.target.name;
        setFormData( {...formData, [type]: e.target.value } )
        
        const validationResult = type ==='passwordConfirm' ?  
            fieldsValidation[type](e.target.value, formData.password) 
            :
            fieldsValidation[type](e.target.value);

        if( validationResult.valid ) return setErrors( { ...errors, [type]: null } );
        setErrors( {...errors, [type]: validationResult.msg } );
    }

    const onBlur = (e) =>{
        const type = e.target.name;
        setTouched( { ...touched, [type]: false } );

        const validationResult = type ==='passwordConfirm' ?  
            fieldsValidation[type](e.target.value, formData.password) 
            :
             fieldsValidation[type](e.target.value);

        if(!validationResult) return;
        if( validationResult.valid ) return setErrors( { ...errors, [type]: null } );
        setErrors( { ...errors, [type]: validationResult.msg } );
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        fields.forEach(field =>{
            touched[field] = false;
        });

        let valid = true;
        let validationResults = {}
        let resetValues = {};
        
        fields.forEach(field =>{
            resetValues[field] = '';

            const validationResult = field === 'passwordConfirm' ? 
                fieldsValidation[field]( formData[field], formData.password ) 
                : 
                fieldsValidation[field]( formData[field] );

            validationResults[field] = validationResult.msg;
            
            if(validationResult.valid) return;
            valid = false;
        });

        setErrors(validationResults);
        if(!valid) return;

        if(action.includes('/login')){

            const user = {
                email:formData.email,
                password:formData.password
            };
            dispatch( loginUser( user ) );

        }else if(action.includes('/register')){
            e.target.querySelector('.btn--primary').focus();

            const newUser = {
                email: formData.email, 
                password: formData.password,
                passwordConfirm:formData.passwordConfirm,
                name:formData.name,
                surname:formData.surname
            } 

            dispatch( registerUser( newUser ) );
            setFormData(resetValues);

        }else if(action.includes('/edit-user')){
            
            const changedData = {
                email:formData.email,
                password:formData.password,
                name:formData.name,
                surname:formData.surname
            }

            dispatch(changeUserData(changedData));
        }else if(action.includes('/edit-delivery')){
            
            const {street, number, city, postalCode, country, contactNumber } = formData;
            const changedData = { street, number, city, postalCode, country, contactNumber };

            dispatch( changeUserDelivery( changedData ) );
        }
    }

    return (
        <form className='auth-form' action={action} onSubmit={handleSubmit}  autoComplete='off'  noValidate>  
            {
                children({ 
                        onChange,
                        onBlur,
                        errors:errors,
                        touched:touched,
                        formData
                    })
            }
        </form>
    )
      
}

Form.propTypes = {
    children: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    initialValues: PropTypes.object.isRequired,
    fields: PropTypes.array.isRequired,
    fieldsValidation: PropTypes.object.isRequired
};

export default Form;