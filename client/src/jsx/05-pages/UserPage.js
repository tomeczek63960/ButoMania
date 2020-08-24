import React from 'react';
import { Link  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import { logout } from 'jsx/00-redux/actions/authActions';


const UserPage = () => {
    const dispatch = useDispatch();
    const userRedux = useSelector(state => state.authReducer.user);
    const userStorage = JSON.parse(localStorage.getItem('user'));
    const user = userRedux ? userRedux : userStorage;
    const { name, surname, email} = user;
    const logoutAction = () =>{
        dispatch( logout() );
    }
    return ( 
        <>
          
            <PageTemplate>
                <div className="user-page">
                    <h4 className="user-page__heading">Witamy {name}!</h4>  
                    <h6 className="user-page__subheading">Dane konta</h6>
                    
                    <div className="user-page__base-data">
                        <p className="icon--user">{name} {surname}</p>
                        <p className="icon--email">{email}</p>

                        <div className="btn-wrapper">
                            <Link to='/account/edit' className="user-page__user-edit btn--secondary">Edytuj</Link>
                            <Link to='/' className='btn--secondary' onClick={logoutAction}>Wyloguj</Link>
                        </div>

                    </div>
                    <h4 className="user-page__heading">Adres dostawy</h4>
                    <div className="user-page__delivery-adress">
                        
                        {user.deliveryAdress ? 
                            ( () => {
                                const { street, number, city, postalCode, country, contactNumber } = user.deliveryAdress;

                                return(
                                <>
                                    <p>ulica: <strong>{ street }</strong></p>
                                    <p>number: <strong>{ number }</strong></p>
                                    <p>miasto: <strong>{ city }</strong></p>
                                    <p>kod pocztowy: <strong>{ postalCode }</strong></p>
                                    <p>kraj: <strong>{ country }</strong></p>
                                    <p>Numer kontaktowy: <strong>{ contactNumber }</strong></p>
                                </>
                            )})()
                            : 
                            <p>Brak adresu dostawy</p>
                        
                        }

                    </div>
                    <Link to='/account/edit-delivery' className='btn--secondary'>Edytuj adres</Link>
                </div>

            </PageTemplate>
        </>
     );
}
 
export default UserPage;