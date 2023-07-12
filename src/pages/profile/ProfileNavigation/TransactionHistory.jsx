import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { usePayment } from "../../../Contexts/PaymentContext/PaymentContext";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import LoadingAnimation from "../../../components/LoadingAnimation/LoadingAnimation";
import PaymentModal from "../../../components/Payment/PaymentModal";
import TransactionTableBody from "./TransactionTableBody";

const TransactionHistory = () => {
    const { packagE, setPackage, setReload, reload } = usePayment();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [payment, setPayment] = useState([]);

    //pricing
    const [pricingData, setPricingData] = useState([]);
    const getPackage = async () => {
        const { data: dataGet } = await axios.get(
            `https://neuronex-server.vercel.app/package/all`
        );
        setPricingData(dataGet);
    };
    const [selectedPackage, setSelectedPackage] = useState(pricingData[0]?._id);
    const handlePayment = () => {
        const id = document.getElementById("HeadlineAct").value;
        const data = pricingData?.find((item) => item._id === id);
        setReload(false);
        console.log(data);
        setPackage(data);
    };

    useEffect(() => {
        getPackage();
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://neuronex-server.vercel.app/transaction/all/${localStorage.getItem(
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
    }, [reload]);

    return (
        <div className="w-full h-screen p-4 md:p-6 lg:p-10">
            {/* Transaction Heading */}
            <div className="my-10 flex justify-between">
                <div>
                    <h1 className="text-white text-3xl font-semibold font-sans">
                        Neuro Nex
                    </h1>
                    <p className="text-white text-sm">All Transaction History</p>
                    <p className="text-white text-sm">UID : {payment?.uid}</p>
                </div>

                <div className="mt-10">
                    <p className="text-sm font-bold uppercase">
                        Current Amount : ${payment?.currentBalance?.toFixed(4)}
                    </p>
                    <p className="text-sm">
                        validity : {payment?.validity?.slice(0, 10)}
                    </p>
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
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                        {/* <label
              htmlFor="my-drawer-2"
              className="cursor-pointer btn lg:hidden"
            >
              Open drawer{" "}
            </label> */}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className="pb-1 text-sm hidden md:block font-bold text-white">
                        {" "}
                        Recharge Now!{" "}
                    </p>
                    <div>
                        <p className="pb-1 text-sm md:hidden "> Recharge Now! </p>
                        <select
                            name="HeadlineAct"
                            id="HeadlineAct"
                            className="mt-1.5  md:w-[150px] rounded-lg border-gray-300 text-gray-700 sm:text-sm select select-secondary"
                            onChange={(e) => setSelectedPackage(e.target.value)}
                            value={selectedPackage}
                        >
                            {pricingData?.map((option, idx) => (
                                <>
                                    {idx === 0 && (
                                        <option key={idx} disabled selected value="">
                                            Select Package
                                        </option>
                                    )}
                                    <option key={idx} id="package" value={option?._id}>
                                        {option?.plan}
                                    </option>
                                </>
                            ))}
                        </select>
                    </div>
                    <label
                        disabled={!selectedPackage}
                        onClick={handlePayment}
                        className="btn btn-md group-hover:scale-125 group-hover:ml-3 tracking-wide btn-warning mt-4 md:mt-0"
                        htmlFor="my-modal-3"
                    >
                        Pay
                    </label>
                </div>
            </div>

            {/* Transaction Body */}
            <div className="">
                {loading ? (
                    <LoadingAnimation />
                ) : (
                    <TransactionTableBody transaction={payment?.transactions} />
                )}
            </div>

            {packagE && <PaymentModal />}
            <ToastContainer />
        </div>
    );
};

export default TransactionHistory;
