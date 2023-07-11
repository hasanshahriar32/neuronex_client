import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usePayment } from "../../Contexts/PaymentContext/PaymentContext";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import "../../index.css";
import { AiContext } from "../../Contexts/FormContext/FormContext";

// eslint-disable-next-line no-unused-vars
const CheckoutForm = ({ agreeTerms, setModalOpen }) => {
  const { setAiConfig } = useContext(AiContext);
  const { packagE, setPackage, setReload } = usePayment();
  console.log(packagE);
  const stripe = useStripe();
  console.log(stripe);
  //load user
  const { user } = useContext(AuthContext);
  const elements = useElements();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const id = packagE?._id;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://neuronex-server.vercel.app/payment/create-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  }, [id]);

  const addToDb = (product) => {
    setModalOpen(true);
    console.log(product);
    fetch("https://neuronex-server.vercel.app/payment/resolve-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.status === "Confirmed") {
          setReload(true);
          toast.success("Payment Successful", {
            theme: "dark",
          });
          setAiConfig([]);
          setPackage(null);
        }
        setModalOpen(false);
      })
      .catch((err) => {
        setReload(false);
        toast.error(err.message);
        setModalOpen(false);
        console.log(err.message);
      });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error);
    } else {
      setError(null);
    }
    const { paymentIntent, error: confirmationError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });
    if (confirmationError) {
      setError(confirmationError);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const confirmPayment = {
        paymentID: paymentIntent.id,
        ...packagE,
        date: new Date().toDateString(),
        status: "Confirmed",
        uid: user?.uid,
        max: null,
      };
      addToDb(confirmPayment);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" m-5">
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
          type="submit"
          className="btn-warning btn tracking-wide btn-md mt-6"
          disabled={!stripe || !clientSecret || !agreeTerms}
        >
          Recharge Now
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
