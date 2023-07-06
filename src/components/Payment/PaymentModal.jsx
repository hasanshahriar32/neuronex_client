import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "../../index.css";
import CheckoutForm from "./ CheckoutForm";

const PaymentModal = ({ packagE, setPackage }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const stripePromise = loadStripe(
    "pk_test_51M6D28BetmksUXSc82ENaSvliF6HG6MDJv4cL2aTFQDKZVA00yZpVctAPBfcXjQq7PaRET9GUVg5DJVm7qCdbBDZ00c5vWBKMp"
  );

  const handleCheckboxChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  const stripePromise = loadStripe(
    "pk_test_51M6D28BetmksUXSc82ENaSvliF6HG6MDJv4cL2aTFQDKZVA00yZpVctAPBfcXjQq7PaRET9GUVg5DJVm7qCdbBDZ00c5vWBKMp"
  );
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setPackage(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Elements stripe={stripePromise}>
            <CheckoutForm setPackage={setPackage} packagE={packagE} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
