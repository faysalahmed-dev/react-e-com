import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../Redux/Cart/Cart.actions';
import Button from '../Button/Button';
import styles from './CollectionItem.module.scss';

const collectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className={styles.collectionItem}>
			<div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}>
				{/* <div className={styles.overLay} /> */}
				<Button vareint='light' onClick={() => addItem(item)}>
					Add To Cart
				</Button>
			</div>
			<div className={styles.collectionFooter}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem(item) {
		dispatch(addItemToCart(item));
	}
});

export default connect(null, mapDispatchToProps)(collectionItem);
