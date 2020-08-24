import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productReducer from './reducers/productReducer.js';
import authReducer from './reducers/authReducer';
import basketReducer from './reducers/basketReducer';
import msgReducer from './reducers/msgReducer';

const reducers = combineReducers({ productReducer, authReducer, basketReducer, msgReducer });
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;