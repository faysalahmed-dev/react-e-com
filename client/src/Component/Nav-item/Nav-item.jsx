import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav-item.module.scss';

const navItem = ({ children, to, ...others }) => (
	<li className={styles.navList}>
		<NavLink exact to={to} {...others} className={styles.navLink}>
			{children}
		</NavLink>
	</li>
);
export default navItem;
