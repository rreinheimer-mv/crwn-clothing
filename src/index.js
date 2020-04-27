import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  /*
    The provider is a component class we get from redux that once passed the store 
    object will be able to give that redux store context to the rest of the application
    so we can dispatch actions to that store or we can pull value off the store 
    into our components.
  */
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
