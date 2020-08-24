import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import NavbarSearchForm from 'jsx/03-organisms/NavbarSearchForm';
import PropTypes from 'prop-types';

const PageNavbar = forwardRef(({ barsRef }, ref) => {
   
    const openSubmenu = (e) =>{
        e.target.nextElementSibling.classList.add('page-nav__navbar__submenu--active');
    }
    const closeSubmenu = (e) =>{
        e.target.parentElement.classList.remove('page-nav__navbar__submenu--active');
    }
    const closeMenu = () =>{
        const navbar = ref.current.children[0];
        
        navbar.classList.toggle('page-nav__navbar--active');
        barsRef.current.classList.remove('bars--active');
        document.body.classList.remove('body-nav--active');
        ref.current.classList.remove('page-nav__navbar-wrapper--active');
    }

    return (    
        <div className='page-nav__navbar-wrapper' ref={ ref }>  
            <ul className='page-nav__navbar' >
                <li className="page-nav__navbar__close" onClick={closeMenu}></li>
                <li className='page-nav__navbar__item'> <NavbarSearchForm barsRef={barsRef} navbarWrapperRef={ref}/> </li>
                
                <li className='page-nav__navbar__item'><Link to='/account' className='page-nav__navbar__link' onClick={closeMenu} >Moje Konto</Link></li>

                <li className='page-nav__navbar__item'><button className='page-nav__navbar__toggler' onClick={openSubmenu} >Obuwie Damskie</button>
                    <ul className='page-nav__navbar__submenu'>
                        <li onClick={closeSubmenu} ><button className='page-nav__navbar__submenu__item--back' >Obuwie damskie</button></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie" }, heading:"Kategoria: Wszyskie/damskie" } }} className='page-nav__navbar__submenu__item' > Wszystko </Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie", shoesType:"sportowe" }, heading:"Kategoria: Sportowe/Damskie" } }} className='page-nav__navbar__submenu__item' > Sportowe </Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie", shoesType:"sneakersy"}, heading:"Kategoria: Sneakersy/Damskie" } }} className='page-nav__navbar__submenu__item' > Sneakersy </Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie", shoesType:"trampki" }, heading:"Kategoria: Trampki/Damskie" } }} className='page-nav__navbar__submenu__item' > Trampki </Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie", shoesType:"tenisówki" }, heading:"Kategoria: Tenisówki/Damskie" } }} className='page-nav__navbar__submenu__item' > Tenisówki </Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie", shoesType:"szpilki" }, heading:"Kategoria: Szpilki/Damskie" } }} className='page-nav__navbar__submenu__item' > Szpilki </Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"damskie", shoesType:"klapki" }, heading:"Kategoria: Klapki/Damskie" } }} className='page-nav__navbar__submenu__item' > Klapki </Link></li>
                    </ul>
                </li>

                <li className='page-nav__navbar__item'><button  className='page-nav__navbar__toggler' onClick={openSubmenu}>Obuwie Męskie</button>
                    <ul className='page-nav__navbar__submenu'>
                        <li onClick={closeSubmenu} ><button className="page-nav__navbar__submenu__item--back">Obuwie męskie</button></li>
                        <li ><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"meskie" }, heading:"Kategoria: Wszyskie/Męskie" }}} className='page-nav__navbar__submenu__item' >Wszystko</Link></li>
                        <li ><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"meskie", shoesType:"sportowe" }, heading:"Kategoria: Sportowe/Męskie" }}} className='page-nav__navbar__submenu__item' >Sportowe</Link></li>
                        <li ><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"meskie", shoesType:"sneakersy" }, heading:"Kategoria: Sneakersy/Męskie" }}} className='page-nav__navbar__submenu__item' >Sneakersy</Link></li>
                        <li ><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"meskie", shoesType:"trampki" }, heading:"Kategoria: Trampki/Męskie" }}} className='page-nav__navbar__submenu__item' >Trampki</Link></li>
                        <li ><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"meskie", shoesType:"tenisówki" }, heading:"Kategoria: Tenisówki/Męskie" }}} className='page-nav__navbar__submenu__item' >Tenisówki</Link></li>
                        <li ><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { type:"meskie", shoesType:"klapki" }, heading:"Kategoria: Klapki/Męskie" }}} className='page-nav__navbar__submenu__item' >klapki</Link></li>
                    </ul>
                </li>

                <li className='page-nav__navbar__item'><button  className='page-nav__navbar__toggler' onClick={openSubmenu}>Marki</button>
                    <ul className='page-nav__navbar__submenu'>
                        <li onClick={closeSubmenu} ><button className="page-nav__navbar__submenu__item--back">Marki</button></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "nike"  }, heading:"Marka: nike" } }} className='page-nav__navbar__submenu__item' >Nike</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "puma"  }, heading:"Marka: puma" } }} className='page-nav__navbar__submenu__item' >Puma</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "adidas"  }, heading:"Marka: adidas" } }} className='page-nav__navbar__submenu__item' >Adidas</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "tommy hilfiger" }, heading:"Marka: tommy hilfiger"  } }} className='page-nav__navbar__submenu__item' >Tommy Hilfiger</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "converse"  }, heading:"Marka: converse" } }} className='page-nav__navbar__submenu__item' >Converse</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "umbro"  }, heading:"Marka: umbro" } }} className='page-nav__navbar__submenu__item' >Umbro</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "reebok"  }, heading:"Marka: reebok" } }} className='page-nav__navbar__submenu__item' >Reebok</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "new balance" }, heading:"Marka: new balance"  } }} className='page-nav__navbar__submenu__item' >New Balance</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "ralph lauren" }, heading:"Marka: ralph lauren"  } }} className='page-nav__navbar__submenu__item' >Ralph Lauren</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "wrangler"  }, heading:"Marka: wrangler" } }} className='page-nav__navbar__submenu__item' >Wrangler</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "s.oliver" }, heading:"Marka: s.oliver"  } }} className='page-nav__navbar__submenu__item' >s.oliver</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "gino rossi" }, heading:"Marka: gino rossi"  } }} className='page-nav__navbar__submenu__item' >gino rossi</Link></li>
                        <li><Link onClick={closeMenu} to={{ pathname:"/filter", state: { filter: { brand: "solo femme" }, heading:"Marka: solo femme"  } }} className='page-nav__navbar__submenu__item' >solo femme</Link></li>
                    </ul>
                </li>

            </ul>
        </div>
     );
});

PageNavbar.propTypes ={
    barsRef:PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
      ])
};
 
export default PageNavbar;