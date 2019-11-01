import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/User.actions'
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SingInAndSingUpPage from './Pages/Singin-and-singup-page/SingIn-and-Singup-Page';
import Header from './Component/Header/Header';
import { auth } from './FireBase/FireBase.utils';
import { createDocument, getUserData } from './FireBase/Controller/UserController';

import './App.style.scss';

class App extends React.Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			if (user) {
				// get user ref
				const userRef = await createDocument(user);
				// get user data from firebase and set the state
				getUserData(userRef, (userData) => {
					setCurrentUser(userData);
				});
			}
			else {
				setCurrentUser(null);
			}
		});
	}
	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}
	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/shop' component={ShopPage} />
					<Route
						exact
						path='/singin'
						render={() => (currentUser ? <Redirect to='/' /> : <SingInAndSingUpPage />)}
					/>
					<Route exact path='/' component={HomePage} />
				</Switch>
			</div>
		);
	}
}
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
