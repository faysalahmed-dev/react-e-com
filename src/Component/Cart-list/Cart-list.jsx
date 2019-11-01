/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import styles from './Cart-list.module.scss';

const cartList = ({ name, imageUrl, quantity, price }) => {
	return (
		<li className={styles.cartList}>
			<div className={styles.imgContainer}>
				<img src={imageUrl} alt={name} />
			</div>
			<div className={styles.info}>
				<p className={styles.name}>{name}</p>
				<p className={styles.priceInfo}>
					{quantity} x ${price}
				</p>
			</div>
		</li>
	);
};
export default cartList;
