import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItem } from '../../Redux/Cart/Cart.selector';
import Button from '../Button/Button';
import CartList from '../Cart-list/Cart-list';
import styles from './Card-drop-down.module.scss';

const cardDropDown = ({ cartItems, history }) => {
	return (
		<div className={styles.dropDownManu}>
			<ul>
				{cartItems.length ? (
					cartItems.map((item) => <CartList key={item.id} {...item} />)
				) : (
					<p className={styles.emptyMeg}>Your Cart is Empty</p>
				)}
			</ul>
			<Button onClick={() => history.push('/checkout')}>Go The Checkout Page</Button>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItem
});
export default withRouter(connect(mapStateToProps)(cardDropDown));
