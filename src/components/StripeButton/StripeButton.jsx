import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IiuBNH5bjDRD7S4OdohcA9268RhTOSOtRXWZMzDfxOeS2F9nrUIBqQSHJAzIlVMtdAnzjovI9opH9rysu25B9Hf00ESZgr1YQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Shop Ltd."
      billingAddress
      shippingAddress
      //   image="https://sendeyo.com/up/d/1f94a4b02d"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
