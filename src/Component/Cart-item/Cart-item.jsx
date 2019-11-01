import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleCart from '../../Redux/Cart/Cart.actions';
import { ReactComponent as CartIcon } from '../../Assets/shopping-bag.svg';
import styles from './Cart-item.module.scss';

function cart({ totalItem, toggleCartItem }) {
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className={styles.CartIconContainer} onClick={toggleCartItem}>
			<CartIcon className={styles.CartIcon} />
			<span className={styles.CartItemNumber}>{totalItem}</span>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => ({
	toggleCartItem() {
		dispatch(toggleCart());
	}
});
cart.propTypes = {
	totalItem: PropTypes.number.isRequired,
	toggleCartItem: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(cart);
