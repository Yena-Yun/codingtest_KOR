import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './Modules';
import { createStore } from 'redux';

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
