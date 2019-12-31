import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import CheckoutPage from './Pages/CheckoutPage/Checkout-page';

import SingInAndSingUpPage from './Pages/Singin-and-singup-page/SingIn-and-Singup-Page';
import Header from './Component/Header/Header';

import userAction from './Redux/User/User.actions';
import { selectCurrentUser } from './Redux/User/User.selector';

const App = ({ checkSession, currentUser }) => {
    useEffect(() => {
        checkSession();
    }, [checkSession]);
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/singin"
                    render={() =>
                        currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <SingInAndSingUpPage />
                        )
                    }
                />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
    checkSession: () => dispatch(userAction.checkUserSession())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
