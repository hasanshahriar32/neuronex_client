import { useState } from "react";
import PaymentModal from "../Payment/PaymentModal";

const Price = () => {

    const pricingData = [
        {
            plan: 'Basic',
            price: 19.99,
            estimatedGeneration: 100,
            validity: 60,
        },
        {
            plan: 'Standard',
            price: 29.99,
            estimatedGeneration: 300,
            validity: 90,
        },
        {
            plan: 'Premium',
            price: 49.99,
            estimatedGeneration: 500,
            validity: 120,
        },
    ];

    const [packagE, setPackage] = useState({});

    return (
        <div className="">
            <div className="grid grid-cols-3 gap-4">
                {pricingData.map((data) =>
                    <>
                        <div className="backdrop-blur-lg shadow-lg rounded-lg overflow-hidden border ">
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900">{data?.plan}</h3>
                                <div className="flex items-center mt-3">
                                    <span className="text-gray-700 font-semibold text-lg">$</span>
                                    <span className="text-gray-900 text-2xl font-semibold">{data.price}</span>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {data.features.map((feature, index) => (
                                        <li key={index} className="text-sm text-gray-600">{feature}</li>
                                    ))}
                                </ul>
                                <label
                                    onClick={() => setPackage(data)}
                                    htmlFor="my-modal-3" className='btn btn-sm btn-warning'>PAY</label>
                            </div>
                        </div></>
                )}

            </div>
            <PaymentModal packagE={packagE} setPackage={setPackage} />
        </div>
    );
};

export default Price;