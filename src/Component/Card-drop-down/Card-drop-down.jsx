import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItem } from '../../Redux/Cart/Cart.selector';
import { toggleCart } from '../../Redux/Cart/Cart.actions';
import Button from '../Button/Button';
import CartList from '../Cart-list/Cart-list';

import styles from './Card-drop-down.module.scss';

const cardDropDown = ({ cartItems, history, dispatch }) => {
	const handleClick = () => {
		dispatch(toggleCart());
		history.push('/checkout');
	};
	return (
		<div className={styles.dropDownManu}>
			<ul>
				{cartItems.length ? (
					cartItems.map((item) => <CartList key={item.id} {...item} />)
				) : (
					<p className={styles.emptyMeg}>Your Cart is Empty</p>
				)}
			</ul>
			<Button onClick={handleClick}>Go The Checkout Page</Button>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItem
});
// if we don't pass seconde argument mapDispatchToProps it automaticly pass dispatch
export default withRouter(connect(mapStateToProps)(cardDropDown));
