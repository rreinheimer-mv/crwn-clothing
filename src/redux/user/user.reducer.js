import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

/* 
 * A reducer function is a function that gets 2 properties: a state 
 * and an action. The action is an object that has a type and
 * optionally a payload. A payload can be anything.
*/

/*
 * The construct of this function uses an ES6 feature for functions that 
 * allows developer to pass a default value. So if state doesn't exist 
 * INITIAL_STATE will be used but id state is null INITIAL_STATE won't be used.
*/
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            } 
        default:
            return state;
    }
}

export default userReducer;