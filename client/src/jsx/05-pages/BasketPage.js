import React, { useEffect, useState } from 'react';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBasketProducts } from 'jsx/00-redux/actions/basketActions';
import calculateTotalPrice from 'jsx/00-helpers/calculateTotalPrice';
import BasketProduct from 'jsx/02-molecules/BasketProduct';

const BasketPage = () => {
    const dispatch = useDispatch();
    const [totalPrice,setTotalPrice] = useState(0);
    const [amountBasketProducts, setAmountBasketProducts] = useState(0);
    const basketProducts = useSelector(state => state.basketReducer.basketProducts);

    useEffect(()=>{
        dispatch( fetchBasketProducts() );
    },[dispatch]);

    useEffect(()=>{
        setTotalPrice( calculateTotalPrice(basketProducts) );
        setAmountBasketProducts(basketProducts.length)
    },[basketProducts]);

    return ( 
        <>
            <PageTemplate>
                <h4 className="basket-page__heading">Twój koszyk ( {amountBasketProducts} )</h4>
                
                <article>
                    {
                        basketProducts.map(item=> <BasketProduct key={Math.random()*10000000} item={item} /> )
                    }
                    
                    <div className="basket-page__order">
                        <p className='basket-page__order__total-price'>Wartość koszyka: <strong>{totalPrice.toFixed(2)} zł</strong></p>

                        <div className="basket-page__order__btn-group">
                            <Link to='/' className="btn--secondary">Kontynuj zakupy</Link>
                            <Link to='/payment' className="btn--primary">Przejdź do kasy</Link>
                        </div>
                    </div>
                </article>

            </PageTemplate>

        </>
     );
}
 
export default BasketPage;