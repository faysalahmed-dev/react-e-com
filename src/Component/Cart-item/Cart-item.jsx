import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../Redux/Cart/Cart.selector';
import { toggleCart } from '../../Redux/Cart/Cart.actions';
import { ReactComponent as CartIcon } from '../../Assets/shopping-bag.svg';
import styles from './Cart-item.module.scss';

function cart({ cartItemCount, toggleCartItem }) {
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div className={styles.CartIconContainer} onClick={toggleCartItem}>
			<CartIcon className={styles.CartIcon} />
			<span className={styles.CartItemNumber}>{cartItemCount}</span>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => ({
	toggleCartItem() {
		dispatch(toggleCart());
	}
});
const mapStateToProps = createStructuredSelector({
	cartItemCount: selectCartItemCount
});
cart.propTypes = {
	// cartItemCount: PropTypes.number.isRequired,
	toggleCartItem: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);
