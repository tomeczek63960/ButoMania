export const emailValidation = ( email ) =>{
    if( email === "" ) return { valid: false, msg: "Wymagane pole" };

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = regex.test( email );

    return validate ? { valid: true } : { valid: false , msg: "Niepoprawny E-mail" };
}
export const passwordValidation = ( password ) =>{
    if( password === '' ) return { valid: false, msg: 'Wymagene pole' };

    const validate = password.length > 4;   
    return validate ? { valid: true } : { valid: false, msg: "Hasło musi zawierać conajmniej 5 znaków" };
}
export const passwordConfirmValidation = ( password, passwordConfirm ) =>{
   if( !passwordConfirm.length ) return { valid: false, msg: "Wymagene pole" };
    const validate = password === passwordConfirm;
    
    return validate ? { valid: true } : { valid: false, msg: "Hasła nie są zgodne" };
}
export const nameValidation = ( name ) =>{
   if( !name.length ) return { valid: false, msg: "Wymagene pole" };
    if(name.length < 3) return { valid: false, msg: "Wymagane 3 znaki" };

    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    
    const validate = regex.test(name);
    return validate ? { valid: true } : { valid: false, msg: "Niedozwolone znaki specjalne" };
}
export const surnameValidation = ( surname ) =>{
   if( !surname.length ) return { valid: false, msg: "Wymagene pole" };
    if( surname.length < 3) return { valid: false, msg: "Wymagane 3 znaki" }
   
    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const validate = regex.test(surname);

    return validate ? { valid: true } : { valid: false, msg: "Niedozwolone znaki specjalne" };
}
export const phoneValidation = ( number ) =>{
    if( number.length === 0 ) return { valid: false, msg: 'Wymagene pole' };
    
    const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const validate = regex.test(number);
    
    return validate ? { valid: true } : { valid: false, msg: "Niedozwolone znaki specjalne" };
}
export const postalCodeValidation = value =>{
    if( !value.length ) return { valid: false, msg: "Wymagane pole" };

    const regex = /[0-9]{2}\-[0-9]{3}/;
    const validate = regex.test(value);

    return validate ? { valid: true } : { valid: false, msg: "Niepoprawna składnia" };
}