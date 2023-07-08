import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import LoadingAnimation from "../../../components/LoadingAnimation/LoadingAnimation";
import TransactionTableBody from "./TransactionTableBody";


const TransactionHistory = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [payment, setPayment] = useState([]);
    //pricing 
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

    useEffect(() => {
        setLoading(true)
        fetch(
            `https://neuronex-server-test.vercel.app/transaction/all/${localStorage.getItem(
                "user_id"
            )}`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ uid: user?.uid }),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                setPayment(result[0]);
                setLoading(false);
            });
    }, []);


    return (
        <div className="w-full h-screen p-10">
            {/* Transaction Heading */}
            <div className="my-10 flex justify-between">
                <div>
                    <h1 className="text-white text-3xl font-semibold font-sans">Neuro Nex</h1>
                    <p className="text-white text-sm">All Transaction History</p>
                    <p className="text-white text-sm">UID : {payment?.uid}</p>
                </div>

                <div className="mt-10">
                    <p className="text-sm font-bold uppercase">Current Amount : ${payment?.currentBalance?.toFixed(2)}</p>
                    <p className="text-sm">validity : {payment?.validity?.slice(0, 10)}</p>
                </div>
            </div>

            {/* Transaction Query */}
            <div className="flex justify-between">
                <div className="flex">
                    <div className="">
                        <p className="pb-1 text-sm">Search</p>
                        <input
                            type="text"
                            id="Search"
                            disabled
                            placeholder="Search for..."
                            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm input input-secondary"
                        />


                    </div>
                </div>
                <form
                    // onSubmit={handlePayment}
                    className="flex items-center gap-8">
                    <div className="">
                        <p className="pb-1 text-sm">Plan</p>
                        <select

                            name="HeadlineAct"
                            id="HeadlineAct"
                            className="mt-1.5 w-[120px] rounded-lg border-gray-300 text-gray-700 sm:text-sm select select-secondary"
                        >
                            {pricingData?.map((option, idx) => (
                                <option
                                    key={idx}

                                    value={option?._id}
                                >
                                    {option?.plan}
                                </option>
                            ))
                            }
                        </select>
                    </div>
                    <div className="">
                    </div>
                    <button
                        disabled
                        htmlFor="my-modal-3"
                        className="btn btn-md group-hover:scale-125 group-hover:ml-3 tracking-wide btn-warning mt-4"
                    >
                        pay
                    </button>
                </form>
            </div>

            {/* Transaction Body */}
            <div className="">
                {loading ?
                    <LoadingAnimation />
                    : <TransactionTableBody transaction={payment?.transactions} />}
            </div>
        </div>
    );
};

export default TransactionHistory;