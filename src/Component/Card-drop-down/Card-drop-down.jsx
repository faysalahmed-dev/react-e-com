import React from 'react';
import Button from '../Button/Button';
import styles from './Card-drop-down.module.scss';

const cardDropDown = () => {
	return (
		<div className={styles.dropDownManu}>
			<ul>
				<li>some</li>
				<li>item</li>
				<li>some</li>
			</ul>
			<Button>Go The Checkout Page</Button>
		</div>
	);
};
export default cardDropDown;
