import React from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../Redux/Cart/Cart.actions';

import styles from './Checkout-item.module.scss';

const CheckOutItem = ({ item, removeItem }) => {
	const { imageUrl, name, price, quantity } = item;
	return (
		<div>
			<div className={styles.table}>
				<div className={styles.imgContainer}>
					<img src={imageUrl} alt='item' />
				</div>
				<p>{name}</p>
				<p>{quantity}</p>
				<p>{price}</p>
				<p className={styles.removeItem} onClick={() => removeItem(item)}>
					X
				</p>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	removeItem(item) {
		dispatch(removeItemFromCart(item));
	}
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
