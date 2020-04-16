import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

/*
 * Introduction to selectors, example selectCartItemsCount:
 * Passing the whole reducer state into the selectCartItemsCount selector 
 * which references selectCartItems, which references selectCart.
 * The whole reducer state reaches selectCart which gets the cart object and 
 * returns cart object into the cart function (in selectCartItems) which parses 
 * the cartItems object and returns the cartItems objects into the cartItems 
 * function (in selectCartItemsCount) which perform reduce() js array method
 * and gets the total count. The itemCount is than passed as prop into the 
 * CartIcon component.
 */
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

/*
 * connect() as the glue or interface between the component and the store.
 *
 * mapDispatchToProps
 * Takes the dispatch functions in your component and executes them against the Redux Reducer when that function is fired.
 * This function directs the dispatching or sending of an action by pointing it to 
 * an action creator. The action creator is made available to the component as a prop, 
 * which is usually tied to an event handler function contained in the component (
 * see toggleCartHidden in the code).
 * 
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);