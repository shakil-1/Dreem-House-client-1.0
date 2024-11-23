import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAgreements from "../../../hooks/useAgreements";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCoupons from '../../../hooks/useCoupons';

const CheckOutFrom = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [agreements] = useAgreements();
  const filteredUsers = agreements.filter(user => user.status === 'checked');
  const result = filteredUsers.reduce((total, item) => total + item.rent, 0);

// copon related code 
const [couponCode, setCouponCode] = useState("");
const [appliedCoupon, setAppliedCoupon] = useState(null);
const [coupons] = useCoupons();


const coupon = coupons[0]?.coupon;
const percents = coupons[0]?.parcentage;
const description = coupons[0]?.description;
let totalPrice = result;
let descount ;
if (coupon === appliedCoupon) {
  const amountPrice = (result * percents) / 100;
  const remainingAmout = result - amountPrice;
  const totalRemaningAmout = parseInt(remainingAmout + 0.5);
  totalPrice = totalRemaningAmout;
  descount = amountPrice;
} else {
  console.log('lksdflsd');
}

const handleInputChange = (event) => {
  setCouponCode(event.target.value);
};

const handleApplyCoupon = () => {
  setAppliedCoupon(couponCode);
};

// copon related code end 
console.log('clientSecret',clientSecret);
  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handelSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    if (!stripe || !elements) {
      return;
    }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("paymentt", error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }

    // payment
    const { paymentIntent, error:ConfirmError } =
    await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anoymous",
            name: user?.displayName || "anonymous",
          },
          
        },
      });
    if (ConfirmError) {
      console.log(ConfirmError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("tranjition id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          data: new Date(),
          bookingIds: agreements.map(item => item._id),
          roomId:agreements.map(item => item.roomId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you payment successfull!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div>

       {agreements.length ?  <div className="text-center">
            <div>
              <input
                className="input input-bordered input-secondary mr-2"
                type="text"
                value={couponCode}
                onChange={handleInputChange}
                placeholder="Enter coupon code"
              />
              <button className="btn" onClick={handleApplyCoupon}>
                Apply Coupon
              </button>
              <h2 className="text-2xl mt-2 font-medium flex text-orange-300 justify-center items-center">
              {description}
            </h2>
            <h2 className='text-green-500'>
            {
                descount ? <p>Descount ${parseInt(descount)}</p> :''
              }
            </h2>
            </div>
            <h3 className="text-3xl font-bold ">
              Room : {filteredUsers.length}
            </h3>
            <h3 className="text-3xl font-bold ">
              Total Price : ${totalPrice}
            </h3>
          </div> : ''}


      {/* ------------------------------- */}
    <form onSubmit={handelSubmit} className='w-full md:w-3/5 lg:w-1/3 mx-auto mt-4'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
      
        className="btn btn-sm btn-primary my-4 w-full "
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your transaction id: {transactionId}</p>
      )}
    </form>


   </div>
  );
};

export default CheckOutFrom;
