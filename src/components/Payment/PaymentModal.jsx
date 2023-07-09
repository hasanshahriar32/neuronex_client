import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { usePayment } from "../../Contexts/PaymentContext/PaymentContext";
import "../../index.css";
import CheckoutForm from "./ CheckoutForm";

const PaymentModal = () => {
    const { setPackage } = usePayment();

    const [agreeTerms, setAgreeTerms] = useState(false);
    const stripePromise = loadStripe(
        "pk_test_51LEJNMB95tAlnqnFFTycKfYO8NSYd3h0YEpTQdCbyoq3SDCHwly1lXBvNlzTqCae9wGjv1XEJRzMcYCtq8ZppehG00OUL8d9WB"
    );

    const handleCheckboxChange = (event) => {
        setAgreeTerms(event.target.checked);
    };
    const [modalOpen, setModalOpen] = useState(null);
    useEffect(() => {
        const modal = document.getElementById("my-modal-3");
        modal.checked = modalOpen;
    }, [modalOpen]);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        onClick={() => setPackage(null)}
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-warning btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-4">Terms and Conditions</h3>
                        <p className="mb-4">
                            Welcome to our academic assistance service! Before using our
                            platform, we kindly request you to read and agree to the following
                            terms and conditions:
                        </p>
                        <ol className="list-decimal pl-6 mb-4">
                            <li>
                                Our service provides academic assistance and guidance to
                                students. We aim to help you with your academic queries and
                                provide relevant information.
                            </li>
                            <li>
                                The information and guidance provided by our service are for
                                educational purposes only. We do not guarantee the accuracy or
                                completeness of the information provided.
                            </li>
                            <li>
                                Our service does not promote or condone plagiarism or any form
                                of academic dishonesty. We encourage students to use our
                                assistance ethically and responsibly.
                            </li>
                        </ol>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="terms-checkbox"
                                className="mr-2 checkbox checkbox-warning"
                                checked={agreeTerms}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="terms-checkbox">
                                I agree to the Terms and Conditions
                            </label>
                        </div>
                        <Elements stripe={stripePromise}>
                            {<CheckoutForm
                                setModalOpen={setModalOpen}
                                agreeTerms={agreeTerms}
                            />}
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
