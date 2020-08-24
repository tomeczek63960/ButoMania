import React, { useRef } from 'react';

import PageNavbar from 'jsx/02-molecules/PageNavbar';
import Bars from 'jsx/01-basics/Bars';
import Logo from 'jsx/01-basics/Logo';
import LogoBasket from 'jsx/01-basics/LogoBasket';

const PageNav = () => {
    const barsRef = useRef();
    const navbarWrapperRef = useRef();

    return ( 
        <>
            <nav className="page-nav" >
                <Bars ref={barsRef}  navbarWrapperRef = { navbarWrapperRef } />
                <PageNavbar ref={navbarWrapperRef} barsRef = { barsRef }/>
                <Logo />
                <LogoBasket/>
            </nav>
        </>
     );
}
 
export default PageNav;