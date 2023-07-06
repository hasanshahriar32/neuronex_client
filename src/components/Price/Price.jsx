import axios from "axios";
import { useEffect, useState } from "react";
import PaymentModal from "../Payment/PaymentModal";

const Price = () => {
    const [packagE, setPackage] = useState({});
    const [pricingData, setPricingData] = useState([]);
    const getPackage = async () => {
        const { data: dataGet } = await axios.get(
            `https://neuronex-server-test.vercel.app/package/all`
        );
        setPricingData(dataGet);
    };
    useEffect(() => {
        getPackage();
    }, []);

    return (
        <div className="-mt-[230px] lg:px-[80px]" id="price">
            <div className="mb-4">
                <h2 className="text-5xl text-center mb-10">
                    Package to suit your plan
                </h2>
                <div className="overflow-x-auto border m-4 p-2 shadow-secondary">
                    <table className="table table-xl text-center ">
                        {/* head */}
                        <thead>
                            <tr className="text-md">
                                <th>Model</th>
                                <th>Input</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className=" text-md">
                                <td> gpt-3.5-turbo </td>
                                <td>$0.0015 / 1K tokens</td>
                                <td>$0.002 / 1K tokens</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-4">
                {pricingData.map((data) => (
                    <>
                        <div className="backdrop-blur-lg shadow-lg rounded-lg overflow-hidden border hover:scale-95 duration-150 cursor-pointer ">
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {data?.plan}
                                </h3>
                                <div className="flex items-center mt-3">
                                    <span className="text-gray-700 font-semibold text-lg">$</span>
                                    <span className="text-gray-900 text-2xl font-semibold">
                                        {data?.price}
                                    </span>
                                </div>
                                <ul className="mt-4 ">
                                    <p className="text-gray-900 text-lg font-semibold">
                                        validity :{data?.validity}
                                    </p>
                                    <p className="text-gray-700 font-semibold text-lg">
                                        Generation:{data?.estimatedGeneration}(EST)
                                    </p>
                                </ul>
                                <label
                                    onClick={() => setPackage(data)}
                                    htmlFor="my-modal-3"
                                    className="btn btn-sm btn-warning mt-4"
                                >
                                    PAY
                                </label>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <PaymentModal packagE={packagE} setPackage={setPackage} />
        </div>
    );
};

export default Price;
