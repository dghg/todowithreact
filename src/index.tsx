import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configure/store';
import App from './pages/App';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}><App /></Provider>
  ,document.getElementById('root'));

