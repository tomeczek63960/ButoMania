import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bars = forwardRef(({ navbarWrapperRef }, ref) => {

  const handleClick = (e) =>{
    const navbar = navbarWrapperRef.current.children[0]; 

    e.target.classList.toggle('bars--active');
    document.body.classList.toggle('body-nav--active');
    navbar.classList.toggle('page-nav__navbar--active');
    navbarWrapperRef.current.classList.toggle('page-nav__navbar-wrapper--active');
  }

    return (
        <button className='bars' ref={ref} onClick={handleClick} ><span className="bars__line"></span></button>
      );
})

Bars.propTypes = {
  navbarWrapperRef:PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
}

export default Bars;