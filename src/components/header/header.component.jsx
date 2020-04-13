import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

/*
 * Connect is a higher order component that lets
 * us modify our component to have access to things 
 * related to redux.
 * Higher order components are just funtions that take components
 * as arguments and returns enhanced component.
 */
import { connect } from 'react-redux';

import {ReactComponent as Logo } from '../../assets/crown-logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
