import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from 'jsx/05-pages/HomePage';
import ProductPage from 'jsx/05-pages/ProductPage';
import LoginPage from 'jsx/05-pages/LoginPage';
import RegisterPage from 'jsx/05-pages/RegisterPage';
import FilterPage from 'jsx/05-pages/FilterPage';
import SearchPage from 'jsx/05-pages/SearchPage';
import UserPage from 'jsx/05-pages/UserPage';
import UserPageEdit from 'jsx/05-pages/UserPageEdit';
import BasketPage from 'jsx/05-pages/BasketPage';
import UserPageEditDelivery from './05-pages/UserPageEditDelivery';
import PrivateRoute from './03-organisms/PrivateRoute';
import PaymentPage from './05-pages/PaymentPage';
import FullSearchFormPage from './05-pages/FullSearchFormPage';
import LoaderComponent from 'jsx/01-basics/LoaderComponent';
import MessageComponent from './01-basics/MessageComponent';

function Root() {
  return (
      <>
        <MessageComponent/>
        <LoaderComponent />
      
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            
            <Route path="/brand/:brand"  component={FilterPage} />
            <Route path='/filter' component={FilterPage} />
            <Route path="/category/:category"  component={FilterPage} />

            <Route path='/search' component={SearchPage} />
            <Route path='/full-search' component={FullSearchFormPage} />

            <PrivateRoute path='/basket' component={BasketPage} />
            <PrivateRoute path='/account' exact component={UserPage}/>
            <PrivateRoute path='/account/edit' component={UserPageEdit}/>
            <PrivateRoute path='/account/edit-delivery' component={UserPageEditDelivery}/>
            <PrivateRoute path='/payment' component={PaymentPage} />

          </Switch>
        </BrowserRouter>
      </>
  );
}

export default Root;