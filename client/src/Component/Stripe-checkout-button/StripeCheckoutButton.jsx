import React from 'react';
import CheckoutButton from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeKey = 'pk_test_5PIDjXVc65gEiEwA6BzBkjNs00xV5NEMHB';
  const onToken = token => {
    axios.post('/payment',{
      token, 
      amount:priceForStripe
    }).then(res => {
      if(res.data.status === 200) {
        alert('payment success')
      }
      else throw new Error(res)
    }).catch(err =>{
      console.log(err)
      alert(err)
    })
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
