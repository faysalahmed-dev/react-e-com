import React from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, removeItem, addItemToCart } from '../../Redux/Cart/Cart.actions';

import styles from './Checkout-item.module.scss';

const CheckOutItem = ({ item, removeItemFromCartList, addItem, removeItem }) => {
	const { imageUrl, name, price, quantity } = item;
	return (
		<div>
			<div className={styles.table}>
				<div className={styles.imgContainer}>
					<img src={imageUrl} alt='item' />
				</div>
				<p>{name}</p>
				<p className={styles.quantityContainer}>
					<button className={styles.arrow} onClick={() => removeItem(item)}>
						&#10094;
					</button>
					<span className={styles.quantity}>{quantity}</span>
					<button className={styles.arrow} onClick={() => addItem(item)}>
						&#10095;
					</button>
				</p>
				<p>{price}</p>
				<button className={styles.removeItem} onClick={() => removeItemFromCartList(item)}>
					X
				</button>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	removeItemFromCartList: (item) => dispatch(removeItemFromCart(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
