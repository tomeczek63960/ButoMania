import React, { useState } from 'react';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetBasket } from 'jsx/00-redux/actions/basketActions';

const PaymentPage = () => {
    const dispatch = useDispatch();
    const success = useSelector(state => state.basketReducer.success);
    const [err, setErr] = useState({ delivery: false, payment:false});
    const [paymentMethod, setPaymentMethod] = useState(null);
    
    const reduxUser = useSelector(state => state.authReducer.user);
    const storageUser = JSON.parse(localStorage.getItem('user')); 
    const user = reduxUser ? reduxUser : storageUser;
    const deliveryAdress = user.deliveryAdress;

    const resetBasketAction = () =>{
        if(!user.deliveryAdress) return setErr({ ...err, delivery:true });
        if(!paymentMethod) return setErr({ ...err, payment:true });
        
        dispatch( resetBasket() );
    }
    return (    
        <>
        {success ? <Redirect to="/basket" /> :
            <PageTemplate>
                <h4 className='payment-page__heading' >Adres dostawy</h4>
                <div className="payment-page__delivery">
                    {err.delivery && <p className='payment-page__error'>Wymagany adres dostawy</p>}

                    <p> ulica: <strong> {deliveryAdress && deliveryAdress.street} </strong> </p>
                    <p> numer: <strong> {deliveryAdress && deliveryAdress.number} </strong> </p>
                    <p> miasto: <strong> {deliveryAdress && deliveryAdress.city} </strong> </p>
                    <p> kod-pocztowy: <strong> {deliveryAdress && deliveryAdress.postalCode} </strong> </p>
                    <p> kraj: <strong> {deliveryAdress && deliveryAdress.country} </strong> </p>
                    <p> telefon: <strong> {deliveryAdress && deliveryAdress.contactNumber} </strong> </p>
                
                    <Link to={{pathname:'/account/edit-delivery', state:{from:'payment'}}} className="btn--secondary">{deliveryAdress ? "Zmień adres" : "Dodaj adres" }</Link>
                </div>
                
                <h4 className='payment-page__heading' >Metoda płatności</h4>
                {err.payment && <p className='payment-page__error'>Wybierz formę płatności</p>}
                
                <div className="payment-page__payment-method">
                    <div>
                        <input type="radio" name="payment" id="paypal" className='payment-page__payment-method__input' onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label className='icon--paypal' htmlFor="paypal">paypal</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" id="card" className='payment-page__payment-method__input' onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label className='icon--visa' htmlFor="card">Płatność kartą</label>
                    </div>
                    <div>
                        <input type="radio" name="payment" id="payu" className='payment-page__payment-method__input' onChange={(e) => setPaymentMethod(e.target.value)}/>
                        <label className='icon--payu' htmlFor="payu">Payu</label>
                    </div>
                </div>

                <button className='btn--primary' style={{maxWidth:"300px"}} onClick={resetBasketAction}>Zamów</button>
            </PageTemplate>
        }

        </>
    );
}
 
export default PaymentPage;