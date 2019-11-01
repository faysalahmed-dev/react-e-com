import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import CartList from '../Cart-list/Cart-list';
import styles from './Card-drop-down.module.scss';

const cardDropDown = ({ cartItem }) => {
	return (
		<div className={styles.dropDownManu}>
			<ul>{cartItem.map((item) => <CartList key={item.id} {...item} />)}</ul>
			<Button>Go The Checkout Page</Button>
		</div>
	);
};
const mapStateToProps = ({ cart: { cartItem } }) => ({
	cartItem
});
export default connect(mapStateToProps)(cardDropDown);
