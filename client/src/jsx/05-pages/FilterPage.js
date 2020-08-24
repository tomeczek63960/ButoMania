import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import FlexTemplate from 'jsx/04-templates/FlexTemplate';
import { fetchFilterProducts } from 'jsx/00-redux/actions/productActions';
import FullSearchForm from 'jsx/03-organisms/FullSearchForm';
import Advertise from 'jsx/01-basics/Advertise';
import Product from 'jsx/02-molecules/Product';

const FilterPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const filterProducts = useSelector(state => state.productReducer.filterProducts);

    useEffect(()=>{
        dispatch( fetchFilterProducts( location.state.filter ) );
    },[location, dispatch]);

    return ( 
        <>
            <PageTemplate>
                <Advertise/>
                <FullSearchForm/>

                <FlexTemplate heading={`${ location.state.heading || "Wyniki wyszukiwania"}`}>
                    {filterProducts.map(product=> <Product key={product._id} product={product} /> )}
                </FlexTemplate>
            </PageTemplate>
        </>
     );
}
export default FilterPage;