import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useAddToCart } from '../../Context/AddToCatd';
import UserContext, { AuthContext } from '../../Contexts/UserContext/UserContext';
import "../../index.css";

const CheckoutForm = ({ product, setProduct }) => {
    const stripe = useStripe();
    const { refetch } = useAddToCart()
    //load user
    const { user } = UserContext(AuthContext)
    const elements = useElements();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads

        fetch("https://iconic-server-v2.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handelDelete = (product) => {
        fetch(`https://iconic-server-v2.vercel.app/api/v2/cart/payment?email=${user?.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                setProduct(null)
            })
    }
    const addToDb = (product) => {
        console.log(product);

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement);

        if (card == null) { return; }
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
                        email: product?.userEmail,
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
                address,
                ...product,
                data: new Date().toDateString(),
                status: 'Confirmed',
                max: null,
            }
            addToDb(confirmPayment)
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className=" ">
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
                <button type="submit" className='btn-warning btn btn-sm mt-6' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;