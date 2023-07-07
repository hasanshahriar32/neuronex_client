import { useState } from "react";
import TransactionTableBody from "./TransactionTableBody";


const TransactionHistory = () => {

    const [currentAmount, setCurrentAmount] = useState()

    return (
        <div className="w-full h-screen p-10">
            {/* Transaction Heading */}
            <div className="my-10 flex justify-between">
                <div>
                <h1 className="text-white text-3xl font-semibold font-sans">Neuro Nex</h1>
                <p className="text-white text-sm">All Transaction History</p>
                <p className="text-white text-sm">UID : {currentAmount?.uid}</p>
                </div>

                <div>
                    <p className="text-sm">Current Amount : ${currentAmount?.currentBalance}</p>
                    <p className="text-sm">validity : {currentAmount?.validity?.slice(0,10)}</p>
                </div>
            </div>

            {/* Transaction Query */}
            <div className="flex justify-between">
            <div className="flex">
                <div className="relative">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                        <span className="sr-only">Search</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        </button>
                    </span>
                </div>

                <div className="-mt-5 mx-5">
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                    Date
                    </label>

                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        {
                            currentAmount?.transactions.map((option, idx) => 
                            <option key={idx} value="">{option?.updatedAt?.slice(0,10)}</option>
                            ) }
                    </select>
                </div>
                
            </div>


            <div className="-mt-5">
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                    Plan
                    </label>

                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        {
                            currentAmount?.transactions.map((option, idx) => 
                            <option key={idx} value="">{option?.plan}</option>
                            ) }
                    </select>
                </div>

            </div>


            {/* Transaction Body */}
            <div>
                <TransactionTableBody setCurrentAmount = {setCurrentAmount} />
            </div>
        </div>
    );
};

export default TransactionHistory;