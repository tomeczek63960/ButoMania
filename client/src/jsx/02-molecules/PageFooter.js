import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => {

    const handleLinksVisibility = (e) =>{
        if(window.innerWidth >= 900) return;
        e.target.nextElementSibling.classList.toggle('page-footer__row__content--active');
        e.target.classList.toggle('page-footer__row__heading--active');
    }
    return ( 
        <>
            <footer className="page-footer">
                <div className="page-footer__media">
                    
                    <div className="page-footer__media-row">
                        <a href="https://www.facebook.com/" target="blank" className='icon--facebook'>Facebook</a>
                        <a href="https://www.instagram.com/" target="blank" className='icon--instagram'>Instagram</a>
                        <a href="https://www.youtube.com/" target="blank" className='icon--youtube'>Youtube</a>
                    </div>

                    <div className="page-footer__media-row">
                        <a href="tel:000000000" className='icon--phone'>phoe</a>
                        <a href="mailto:butomania@o2.pl.com" className='icon--mail'>mail</a>
                    </div>

                </div>

                <div className="page-footer__content">
                    <div className="page-footer__row">
                        <h5 className="page-footer__row__heading" onClick={handleLinksVisibility}>Informacje</h5>
                        
                        <div className="page-footer__row__content">
                            <Link to='/' className='page-footer__link'>Kontakt</Link>
                            <Link to='/' className='page-footer__link'>O nas</Link>
                            <Link to='/' className='page-footer__link'>Polityka Prywatności</Link>
                            <Link to='/' className='page-footer__link'>Ochrona Danych osobowych</Link>
                            <Link to='/' className='page-footer__link'>Kody Rabatowe</Link>
                            <Link to='/' className='page-footer__link'>Regulamin</Link>
                        </div>

                    </div>
                    <div className="page-footer__row">
                        <h5 className="page-footer__row__heading" onClick={handleLinksVisibility}>Obsługa klienta </h5>
                        
                        <div className="page-footer__row__content">
                            <Link to='/' className='page-footer__link'>Subskrypcje i zgody</Link>
                            <Link to='/' className='page-footer__link'>Koszt i termin dostawy</Link>
                            <Link to='/' className='page-footer__link'>Metody płatności</Link>
                            <Link to='/' className='page-footer__link'>Zwroty/Reklamacje</Link>
                            <Link to='/' className='page-footer__link'>FAQ</Link>
                        </div>
                    </div>

                    <div className="page-footer__newsletter">

                        <p className="page-footer__newsletter__heading">Zapisz się na Newsletter. </p>
                        <p className="page-footer__newsletter__heading-2"> Zyskaj 40zł</p>
                        <form className="page-footer__newsletter-form">
                            <input type="text" name="newsletter" className='page-footer__newsletter__form-control' id="newsletter" placeholder="Twój E-mail" />
                            <button type='submit' className="page-footer__newsletter__btn">Zapisz</button>
                        </form>
                        <p className="page-footer__newsletter__text">Otrzymój informacje o nowościach i promocjach</p>

                    </div>

                </div>
                
                <table className="page-footer__payments" ><tbody><tr><td align="center"></td></tr><tr><td align="center"><a href="https://www.paypal.com/pl/webapps/mpp/paypal-popup" target='blank'  >
                      <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/banner_pl_just_pp_319x110.jpg"  alt='payments' /></a></td></tr></tbody></table>
            </footer>
        </>
     );
}
 
export default PageFooter;