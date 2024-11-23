import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutFrom></CheckOutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
