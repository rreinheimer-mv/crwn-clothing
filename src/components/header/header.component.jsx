import React from 'react';
import { Link } from 'react-router-dom';

/*
 * Connect is a higher order component that lets
 * us modify our component to have access to things 
 * related to redux.
 * Higher order components are just funtions that take components
 * as arguments and returns enhanced component.
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo } from '../../assets/crown-logo.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>  
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

/*
 * The createStructuredSelector method allows to pass state implicitely, so this:
 * mapStateToProps = state => ({ currentUser: selectCurrentUser(state) })
 * can be represented like this:
 * mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser })
 * 
 */
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
