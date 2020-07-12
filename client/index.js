import 'core-js';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

import 'normalize.css';
import './index.css';

import Main from './Main';

const vehicle = createStore(reducer);

const rootElement = document.createElement('div');
rootElement.className = 'root';
document.body.appendChild(rootElement);
console.log(vehicle);
render(
  <React.StrictMode>
    <Provider store={vehicle}>
      <Main />
    </Provider>
  </React.StrictMode>,
  rootElement
);
