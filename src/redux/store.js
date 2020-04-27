/*
    Middlewares are functions that recive action in, 
    do something with them and pass them out to root reducer
*/
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

//Loggger middlewares is an array
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };