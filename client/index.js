import 'core-js';
import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './index.css';
import App from './App';

const renderElement = document.createElement('div');
document.body.appendChild(renderElement);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  renderElement
);
