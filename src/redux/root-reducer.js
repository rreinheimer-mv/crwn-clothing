/*
 *  Base reducer object that represet application state.
 *  Reducers are written on their own object and imported here.
 */

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});