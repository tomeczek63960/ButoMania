import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PageTemplate from 'jsx/04-templates/PageTemplate';
import FlexTemplate from 'jsx/04-templates/FlexTemplate';
import { fetchSearchProducts } from 'jsx/00-redux/actions/productActions';
import FullSearchForm from 'jsx/03-organisms/FullSearchForm';
import Product from 'jsx/02-molecules/Product';

const SearchPage = () => {

    const searchProducts = useSelector(state => state.productReducer.searchProducts);
    const dispatch = useDispatch();
    const history = useHistory();
    const filter = history.location.state;

    useEffect(()=>{
        dispatch( fetchSearchProducts(filter) );
    },[filter, dispatch]);
    console.log(filter)
    return ( 
        <>
            <PageTemplate>
                <FullSearchForm/>

                <FlexTemplate heading={`Wyniki dla: ${filter.filter}`} >
                    {searchProducts.map(product=> <Product key={product._id} product={product} /> )}
                </FlexTemplate>

            </PageTemplate>
        </>
     );
}
 
export default SearchPage;