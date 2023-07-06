import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import UserContext, { AuthContext } from '../../Contexts/UserContext/UserContext';
import "../../index.css";

// eslint-disable-next-line no-unused-vars
const CheckoutForm = ({ packagE, setPackage }) => {
    const stripe = useStripe();
    //load user
    const { user } = UserContext(AuthContext)
    const elements = useElements();
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const id = packagE?._id;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://neuronex-server-test.vercel.app/payment/create-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [id]);

    const addToDb = (product) => {
        console.log(product);

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement);

        if (card == null) { return; }
        // eslint-disable-next-line no-unused-vars
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card, });

        if (error) {
            setError(error)
        } else { setError(null) }
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                    },
                },
            },
        );
        if (confirmationError) {
            setError(confirmationError); return;
        }
        if (paymentIntent.status === "succeeded") {
            const confirmPayment = {
                paymentID: paymentIntent.id,
                ...packagE,
                data: new Date().toDateString(),
                status: 'Confirmed',
                max: null,
            }
            addToDb(confirmPayment)
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className=" m-5">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn-warning btn tracking-wide btn-md mt-6' disabled={!stripe || !clientSecret}>
                    Recharge Now
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;