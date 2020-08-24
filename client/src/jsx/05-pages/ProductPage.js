import React, { useEffect,useState  } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useHistory }from 'react-router-dom';

import FlexTemplate from 'jsx/04-templates/FlexTemplate';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import { fetchCurrentProduct, fetchFilterProducts } from 'jsx/00-redux/actions/productActions';
import { scrollTop } from 'jsx/00-helpers/scrollTop';
import { addPorductToBasket } from 'jsx/00-redux/actions/basketActions';
import Advertise from 'jsx/01-basics/Advertise';
import ErrorInputMessage from 'jsx/01-basics/ErrorInputMessage';
import Product from 'jsx/02-molecules/Product';

const ProductPage = (props) => {
 
    const dispatch = useDispatch();
    const history = useHistory();
    const [activeUrl, setActiveUrl] = useState(''); 
    const [activeColor,setActiveColor] = useState('');
    const [activeSize, setActiveSize] = useState('');
    const [error, setError] = useState('');

    const currentProduct = useSelector(state => state.productReducer.currentProduct);
    const filterProducts = useSelector(state => state.productReducer.filterProducts);
    const category = currentProduct[0] &&  currentProduct[0].shoesType;
    const user = JSON.parse(localStorage.getItem('user'));

    const handleActiveUrl = (e) =>{
        const color = e.target.dataset.color;
        setActiveUrl(e.target.src);
        setActiveColor(color);
    } 
    const addToBasket = (e,product) =>{
        e.preventDefault();
        if(!user) return history.push({pathname:'/login', state:{from:`/product/${props.match.params.id}`}} )
        if(activeSize === '') return setError('Rozmiar jest wymagany');

        setError('');
        dispatch( addPorductToBasket(product, activeColor, activeSize, activeUrl ) );
    }
    useEffect(()=>{
        const _id = props.match.params.id;
        dispatch( fetchCurrentProduct(_id) );
    },[props.match, dispatch]);

    useEffect(()=>{
        if(!currentProduct[0]) return;
        setActiveUrl(currentProduct[0].info[0].img);
        setActiveColor(currentProduct[0].info[0].color);
    },[currentProduct]);

    useEffect(()=>{
        if(!currentProduct[0]) return;
        dispatch( fetchFilterProducts({shoesType: category}) );
    },[category, currentProduct, dispatch]);

    const handleClick = (e) =>{
        e.target.classList.toggle('product-page__details__heading--active');
        e.target.nextElementSibling.classList.toggle('product-page__details__content--active');
    }
    return ( 
        <>  
            <PageTemplate>
                <Advertise/>
                {currentProduct.map(product =>{
                    const {_id, price, discount, name, model, shoesType, type, rates, ratesAmount, info, height, weight, purpose, interior, insert, size, brand, season} = product;
                    const beforeDiscount = price / (100 - discount) * 100;
                    
                    return(
                        <section key={_id}>
                            <div className="product-page__product" >
                                
                                <div className="product-page__product__img">
                                   
                                    {discount ? 
                                        <div className="product-page__product__discount"><p>-{discount}%</p></div>
                                        : ''
                                    }
                                    <img src={activeUrl} alt="sneakersy"/>

                                    <div className="product-page__product__options">
                                        <div className='product-page__product__color'>
                                            {info.map(data =>(
                                                <div key={data.color}><img onClick={handleActiveUrl} data-color={data.color} src={data.img} alt={product.name}/></div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="product-page__product__content">
                                
                                    <h5 className="product-page__product__content__heading">{name}</h5>
                                    <p className="product-page__product__content__model">{model}</p>
                                    <p className="product-page__product__content__model">Typ: {shoesType}</p>
                                    <div className="product-page__product__content__info">
                                        <p className="product-page__product__content__discount">{discount > 0 ? `${beforeDiscount.toFixed(2)}zł`  :""}</p>
                                        <p className="product-page__product__content__price">{price.toFixed(2)}zł</p>
                                    </div>
                                    <div className="product-page__product__content__opinion">
                                        <p className='product-page__product__content__opinion__text'>({ratesAmount}) opinii</p>
                                        <div className="product-page__product__content__rates">
                                            <span className="product-page__product__content__rates--active" style={{width:`${rates * 20}px`}}></span>
                                        </div>
                                    </div>

                                    <form className='product-page__product__content__form' onSubmit={(e) => addToBasket(e, product)}>
                                        {error && <ErrorInputMessage msg={error}/>}

                                        <select type="number" onChange={(e)=> setActiveSize(e.target.value)} name="size" id="size" className='product-page__product__content__form__select'>
                                            <option value="" >Wybierz rozmiar</option>
                                            {size.map(option =>(
                                                <option key={option} value={option} >{option}</option>
                                            ))}
                                        </select>

                                        <button className="product-page__product__content__form__btn" type='submit' >Dodaj do koszyka</button>
                                        
                                    </form>
                                </div>
                                
                            </div>

                            <div className="product-page__details">
                                <p className="product-page__details__heading" onClick={handleClick}>Opis produktu</p>
                               
                                <div className="product-page__details__content">
                                    <div className='product-page__details__row'>
                                        <p>Rodzaj obuwia: <strong>{shoesType}</strong></p>
                                        <p>Marka: <strong> {brand}</strong></p>
                                        <p>Przeznaczenie: <strong>{purpose}</strong></p>
                                        <p>Sezon: <strong>całoroczne</strong></p>

                                        <p className='product-page__details__row-space'>Kolor: <strong>{activeColor}</strong></p>
                                        <p>Wkładka: <strong>{interior}</strong></p>
                                        <p>Wnętrze: <strong>{insert}</strong></p>
                                        <p>Rodzaj podeszwy: <strong>materiał syntetyczny</strong></p>
                                        <p>Waga buta: <strong>{weight}g</strong></p>
                                        <p>wysokość buta: <strong>{height}cm</strong></p>
                                    </div>
                                    <div className="product-page__details__row product-page__details__row--black">
                                        <h5 className="product-page__details__row__heading">{name}</h5>
                                        <p className='product-page__details__row__text'>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quod dolor beatae nisi, quia minima aperiam similique. Eaque blanditiis aperiam atque dignissimos minus, dicta similique quis maxime, velit veniam cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias animi illo obcaecati modi quidem.
                                        </p>
                                        <div className="product-page__details__row__text">
                                            <p>Cechy produktu:</p>
                                            <p>lekki model</p>
                                            <p>Sezon: {season}</p>
                                            <p>miękka podeszwa</p>
                                            <p>kolor: {activeColor}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    )}
                )}

                <FlexTemplate heading='Pobodne Wyszukiwania'>
                    {filterProducts.map(product => <Product key={product._id} product={product} onClick={scrollTop}/> )}
                </FlexTemplate>
            </PageTemplate>
        </>
     );
}
 
export default ProductPage;