import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './Stylesheet/main.css'
import 'milligram'
import {Provider} from 'react-redux'
import {store} from './Components/chat'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


