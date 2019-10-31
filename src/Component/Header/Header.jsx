import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import NavItem from '../Nav-item/Nav-item';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logoContainer}>
				<Logo />
			</Link>
			<nav>
				<ul className={styles.navItems}>
					{[ 'contact', 'shop', 'singin' ].map((item) => <NavItem to={item}>{item}</NavItem>)}
				</ul>
			</nav>
		</header>
	);
};
export default Header;
