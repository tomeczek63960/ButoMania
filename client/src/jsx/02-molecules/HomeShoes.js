import React,{  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FlexTemplate from 'jsx/04-templates/FlexTemplate';
import { fetchPopularProducts } from 'jsx/00-redux/actions/productActions';
import Product from './Product';

const HomeShoes = () => {
    const dispatch = useDispatch();
    const popularProducts = useSelector( state => state.productReducer.popularProducts );

    useEffect(()=>{
        dispatch( fetchPopularProducts() );
    },[dispatch]);

    return ( 
        <>
            <FlexTemplate heading='Popularne Wybory'>
               {popularProducts.map(product => <Product key={product._id} product={product} /> )}
            </FlexTemplate>
        </>
     );
}
 
export default HomeShoes;