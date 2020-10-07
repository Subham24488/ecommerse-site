import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceFroStripe = price * 100;
  const publishableKey =
    "pk_test_51HZXhKLyUlRsMk23H0bJnT0AjPAFThjWJzjYz4zDNoRcaCLXWVH7hpGYDXoScInVE3zLWdKAxmrimWIS9lpWhikb00gRG1Hj7k";
  const onToken = (token) => {
    console.log(token);
    alert("payment recieved");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Chothes ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceFroStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
