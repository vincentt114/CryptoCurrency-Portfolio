import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app.jsx';
import styles from '../scss/styles.scss';
import store from '../reducers/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(

  <Provider store = {store}>
    <App />
  </Provider>,
  
  document.querySelector('#root')
);

