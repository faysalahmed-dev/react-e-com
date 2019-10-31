/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SingInAndSingUpPage from './Pages/Singin-and-singup-page/SingIn-and-Singup-Page';
import Header from './Component/Header/Header';
import { auth } from './FireBase/FireBase.utils';
import './App.style.scss';

class App extends React.Component {
    state = {
        currentUser: null
    };
    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>
            this.setState({ currentUser: user })
        );
    }
    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/singin"
                        component={SingInAndSingUpPage}
                    />
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default App;
