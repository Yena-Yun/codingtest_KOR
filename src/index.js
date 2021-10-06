import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import rootReducer from './Modules';
// import { rootSaga } from "./Modules";
// import createSagaMiddleware from "redux-saga";
// import { createStore, applyMiddleware, compose } from 'redux';

// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware)
//     // ,
//     // (window as any).__REDUX_DEVTOOLS_EXTENSION__
//     //   ? composeWithDevTools()
//     //   : (f) => f
//   )
// );

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);
