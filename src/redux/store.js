/*
    Middlewares are functions that recive action in, 
    do something with them and pass them out to root reducer
*/
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Loggger middlewares is an array
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;