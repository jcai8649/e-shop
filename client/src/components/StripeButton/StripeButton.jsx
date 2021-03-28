import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IiuBNH5bjDRD7S4OdohcA9268RhTOSOtRXWZMzDfxOeS2F9nrUIBqQSHJAzIlVMtdAnzjovI9opH9rysu25B9Hf00ESZgr1YQ";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error", JSON.parse(error));
        alert("There was an issue with your payment.");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Shop Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
