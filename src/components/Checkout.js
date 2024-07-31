import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Checkout = ({ amount }) => {
  const handleToken = async (token) => {
    try {
      await axios.post('http://localhost:5000/api/payment', { amount, token });
      alert('Payment successful');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StripeCheckout
      stripeKey="your_stripe_public_key"
      token={handleToken}
      amount={amount * 100}
      name="Canteen Payment"
      currency="USD"
    />
  );
};

export default Checkout;
