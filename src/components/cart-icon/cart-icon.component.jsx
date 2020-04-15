import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

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
    null,
    mapDispatchToProps
)(CartIcon);