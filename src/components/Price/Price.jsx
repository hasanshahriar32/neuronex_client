const Price = () => {

    const pricingData = [
        {
            plan: 'Basic',
            price: 19.99,
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
        {
            plan: 'Standard',
            price: 29.99,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            plan: 'Premium',
            price: 49.99,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        },
    ];



    return (
        <div id="price">
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
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div></>
                )}

            </div>
        </div>
    );
};

export default Price;