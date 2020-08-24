import React, { useState, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';

const Select = forwardRef(({ children, defaultValues, resetInputRef }, ref) => {
    const [valuesArray, setValuesArray ] = useState(['wszystkie']);
    const sliderResetIconRef = useRef();
    const inputsWrapperRef = useRef();
    const selectRef = useRef();

    const handleChange = (e) =>{
        const formFields = [...inputsWrapperRef.current.children];
       
        if(e.target.value === 'wszystkie'){
            formFields.forEach( field =>{
                field.children[0].checked = false;
            });

            e.target.checked = true;
            sliderResetIconRef.current.classList.remove('select__close-icon--active');

        }else{
            if(valuesArray[0] === 'wszystkie'){
                 valuesArray.shift();
            }
            
            sliderResetIconRef.current.classList.add('select__close-icon--active');
            resetInputRef.current.checked = false;
        }

        const values = [];

        formFields.forEach(field =>{
            const input = field.children[0];

            if(!input.checked) return;
            values.push(input.value);
        });
        
        if(!values[0]){
            setValuesArray(['wszystkie']);
            resetInputRef.current.checked = true;
        }else{
            setValuesArray(values);
        }
    }
    const  setSliderVisibility = (e) =>{
        if(!e.target.classList.contains('select') ) return;
        e.target.classList.toggle('select--active')
    }
    const resetColor = (e) =>{
        const formFields = [...inputsWrapperRef.current.children];
        setValuesArray(['wszystkie']);
        
        formFields.forEach(field =>{
            field.children[0].checked = false;
        });

        resetInputRef.current.checked = true;
        e.target.classList.remove('select__close-icon--active');
    }
 
    useEffect(()=>{
        resetInputRef.current.checked = true;
        if(!defaultValues) return;
        if(defaultValues[0] === 'wszystkie') return;

        setValuesArray(defaultValues)
        sliderResetIconRef.current.classList.add('select__close-icon--active');
        resetInputRef.current.checked = false;
    },[]);

    return ( 
        <>
            <div className="select" onClick={setSliderVisibility} ref={selectRef}>
                <p className='select__close-icon' onClick={resetColor} ref={sliderResetIconRef}></p>
                <p className='select__content'>{valuesArray.join('/')}</p>
                <div className="select-slider" ref = { inputsWrapperRef } >
                   { children( handleChange, valuesArray )} 

                </div>
            </div>
        </>
     );
});
 
Select.propTypes = {
    children: PropTypes.func,
    defaultValues:PropTypes.array,
    resetInputRef:PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
};

export default Select;