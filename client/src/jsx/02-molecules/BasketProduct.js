import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import { removeBasketProduct, changeAmountInBasket } from 'jsx/00-redux/actions/basketActions';

const BasketProduct = ({item : { amountInBasket, model,color,size,discount, name,price,img }}) => {
    const dispatch = useDispatch();
    const [basketAmount, setBasketAmount] = useState(amountInBasket);
    const beforeDiscount = price / (100 - discount) * 100;
    
    const removeItem = ( ) =>{
        dispatch( removeBasketProduct( model, color, size ));
    }
    const changeAmount = () =>{
        if(amountInBasket === basketAmount) return;
        dispatch( changeAmountInBasket( model, color, size, basketAmount ) );
    }

    const onChangeAmount = (e) =>{
        const value = e.target.value;
       
        if(value < 1 ){
            setBasketAmount(1);
        }else{
            setBasketAmount(value)
        }
    }
    return (  
        <>
            
            <section className='basket-page__product'>
                <div className="basket-page__product__flex">
                    <div className="basket-page__product__content">
                        <div className="basket-page__product__img">
                            <LazyLoadImage effect="blur" src={img} alt={name}/>
                        </div>
                        <div className="basket-page__product__data">
                            <h4 className="basket-page__product__name">{name}</h4>
                            <p className="basket-page__product__model">{model}</p>

                            <div className="basket-page__product__data__details">
                                <div className='basket-page__product__inp'>
                                    <label htmlFor='inp-amount' className='inp__change-amount' >Ilość: </label>
                                    <input type="number" name="inp-amount" id="inp-amount" value={basketAmount} onChange={onChangeAmount} onBlur={changeAmount}/>
                                </div>
                                <p className="basket-page__product__color">Kolor: {color} </p>
                                <p className="basket-page__product__size">Rozmiar: {size} </p>
                            </div>
                        </div>
                    </div>

                    <div className="basket-page__product__price-info">
                        <div className='basket-page__product__price-info-1'>
                            {discount ? <p className="basket-page__product__discount-price">{ beforeDiscount.toFixed(2) } zł</p> :""}
                            <p className="basket-page__product__price">{price}zł</p>
                        </div>
                        {discount ? <p className="basket-page__product__discount">-{discount}%</p> : ""}
                    
                    </div>
                </div>
                <div className="basket-page__product__remove__info">
                    <p  className="basket-page__product__remove" >Informacje o produkcie</p>
                    <p className="basket-page__product__remove" onClick={removeItem}>X Usuń produkt</p>
                </div>
            </section>

        </>
    );
}
BasketProduct.propTypes = {
    item: PropTypes.shape({
        amountInBasket: PropTypes.number.isRequired,
        model: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    })
}
export default BasketProduct;