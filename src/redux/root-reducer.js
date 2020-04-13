/*
 *  Base reducer object that represet application state.
 *  Reducers are written on their own object and imported here.
 */

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});