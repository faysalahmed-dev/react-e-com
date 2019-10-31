import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SingInAndSingUpPage from './Pages/Singin-and-singup-page/SingIn-and-Singup-Page';
import Header from './Component/Header/Header';
import { auth } from './FireBase/FireBase.utils';
import {
    createDocument,
    getUserData
} from './FireBase/Controller/UserController';
import './App.style.scss';

class App extends React.Component {
    state = {
        currentUser: null
    };
    unSubscribeFromAuth = null;

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                // get user ref
                const userRef = await createDocument(user);
                // get user data from firebase and set the state
                getUserData(userRef, userData => {
                    this.setState({ currentUser: userData }, () =>
                        console.log(this.state.currentUser)
                    );
                });
            } else {
                this.setState({ currentUser: null });
            }
        });
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
