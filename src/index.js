import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import InvoiceEditor from './components/invoice-editor';

import './components/reset.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <InvoiceEditor />
  </Provider>,
  document.getElementById('root')
);
