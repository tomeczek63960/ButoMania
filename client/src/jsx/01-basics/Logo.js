import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' href='#' className='page-logo'>Buto<span className='page-logo__span'>Mania</span></Link>
    );
}
 
export default Logo;