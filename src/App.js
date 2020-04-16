import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={ () =>
              this.props.currentUser ? 
              (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

/*
 * connect() as the glue or interface between the component and the store.
 *
 * mapStateToProps:
 * Pulls in the state of a specific reducer state object 
 * from you global store and maps it to the props of your component. 
 * MapStateToProps is called everytime your store is updated. 
 * You pass in your state a retrieve that specific objects from the reducer.
 *
 * mapDispatchToProps
 * Takes the dispatch functions in your component and executes them against the Redux Reducer when that function is fired.
 * This function directs the dispatching or sending of an action by pointing it to 
 * an action creator. The action creator is made available to the component as a prop, 
 * which is usually tied to an event handler function contained in the component (
 * see setCurrentUser in the code).
 * 
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
