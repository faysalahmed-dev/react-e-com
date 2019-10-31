import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import NavItem from '../Nav-item/Nav-item';

import styles from './Header.module.scss';
import { auth } from '../../FireBase/FireBase.utils';

const Header = ({ currentUser }) => {
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
				</ul>
			</nav>
		</header>
	);
};
export default Header;
