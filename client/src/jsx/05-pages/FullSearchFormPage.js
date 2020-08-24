import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import FlexTemplate from 'jsx/04-templates/FlexTemplate';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFullSearchProducts } from 'jsx/00-redux/actions/productActions';
import FullSearchForm from 'jsx/03-organisms/FullSearchForm';
import Product from 'jsx/02-molecules/Product';

const FullSearchFormPage = () => {
        const location = useLocation();
        const dispatch = useDispatch();
        const filter = location.state.filter;
        const fullSearchProducts = useSelector(state => state.productReducer.fullSearchProducts);

        useEffect(()=>{
            dispatch( fetchFullSearchProducts(filter) );
        },[dispatch, filter]);

    return (  
        <>
            <PageTemplate>
                <FullSearchForm defaultValues = { filter }/>

                <FlexTemplate heading='Wyniki wyszukiwania' >
                    {fullSearchProducts.map(product=> <Product key={product._id} product={product} /> )}
                </FlexTemplate>
            </PageTemplate>
        </>
    );
}
 
export default FullSearchFormPage;