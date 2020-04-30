import React from 'react';

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

import { 
    HeaderContainter, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink 
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainter>  
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            { currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainter>
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
