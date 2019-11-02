import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { countTotalPrice,selectCartItem } from '../../Redux/Cart/Cart.selector';
import CheckOutItem from '../../Component/Checkout-item/Checkout-item';
import styles from './Checkout-page.module.scss';

const checkoutPage = ({ cartItems, totalPrice }) => {
	return (
		<section className={styles.checkoutPage}>
               <div className={styles.table}>
                    <div className={styles.tableHeader}>
                         <p>Producet</p>
                         <p>Description</p>
                         <p>Quantity</p>
                         <p>Price</p>
                         <p>Remove</p>
                    </div>
                    {cartItems.map((item) => <CheckOutItem key={item.id} item={item} />)}
                    <div>
				     <h3 className={styles.totalPrice}>Total Price : ${totalPrice}</h3>
			     </div>
               </div>
		</section>
	);
};
const mapStateToProps = createStructuredSelector({
     totalPrice: countTotalPrice,
     cartItems: selectCartItem
});

export default connect(mapStateToProps)(checkoutPage);
