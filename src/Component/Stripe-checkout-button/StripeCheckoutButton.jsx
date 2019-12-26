import React from 'react';
import CheckoutButton from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeKey = 'pk_test_5PIDjXVc65gEiEwA6BzBkjNs00xV5NEMHB';
  const onToken = token => {
    console.log(token);
    alert('payment successful');
  };
  return (
    <CheckoutButton
      label="Pay Now"
      name="E-COM Inc."
      description={`Your Total Price $${price}`}
      amount={priceForStripe}
      stripeKey={stripeKey}
      shippingAddress
      billingAddress
      token={onToken}
      image="http://svgshare.com/i/CUz.svg"
    />
  );
};

export default StripeCheckoutButton;
