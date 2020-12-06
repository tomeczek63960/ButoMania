import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'css/index.css';
import Root from 'jsx/Root';
import store from 'jsx/00-redux/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

