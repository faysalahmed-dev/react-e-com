import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTyeps from 'prop-types';

import { ReactComponent as Logo } from '../../Assets/logo.svg';
import NavItem from '../Nav-item/Nav-item';
import CartItem from '../Cart-item/Cart-item';
import CardDropDown from '../Card-drop-down/Card-drop-down';
import styles from './Header.module.scss';

import { auth } from '../../FireBase/FireBase.utils';

const Header = ({ currentUser, hidden }) => {
	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logoContainer}>
				<Logo />
			</Link>
			<nav>
				<ul className={styles.navItems}>
					<NavItem to='/contact'>Contact</NavItem>
					<NavItem to='/shop'>Shop</NavItem>
					{currentUser ? (
						<NavItem to='/singin' onClick={() => auth.signOut()}>
							Sing out
						</NavItem>
					) : (
						<NavItem to='/singin'>Sing In</NavItem>
					)}
					<CartItem totalItem={0} />
				</ul>
				{hidden ? null : <CardDropDown />}
			</nav>
		</header>
	);
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});
Header.propTyeps = {
	hidden: PropTyeps.bool.isRequired
};

export default connect(mapStateToProps)(Header);
