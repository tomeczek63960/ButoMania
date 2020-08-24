import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarSearchForm = ({ barsRef, navbarWrapperRef }) => {
    const searchInputRef = useRef();
    const history = useHistory();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const navbar = navbarWrapperRef.current.children[0];

        const inp = searchInputRef.current;
        const filter = inp.value;
        if(filter === '') return;

        history.push({pathname:'/search', state: { filter }});
        
        barsRef.current.classList.remove('bars--active');
        navbar.classList.toggle('page-nav__navbar--active');
        navbarWrapperRef.current.classList.remove('page-nav__navbar-wrapper--active');
        document.body.classList.remove('body-nav--active');
    }
    return ( 
        <>
            <form className="page-nav__navbar__search"  onSubmit={handleSubmit}>
                <div className="page-nav__navbar__search__content">
                    <input type="text" ref={searchInputRef} name="search" id="search" className='page-nav__navbar__search__form-control' placeholder='Wyszukaj: marka/nazwa/typ'/>
                    <button type='submit' className='page-nav__navbar__search__btn'></button>
                </div>
            </form>
        </>
     );
}
NavbarSearchForm.propTypes = {
    barsRef:PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    navbarWrapperRef:PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
};
 
export default NavbarSearchForm;