

const TransactionHistory = () => {
    return (
        <div className="w-full h-screen p-10">
            <div className="my-10">
                <h1 className="text-white text-3xl font-semibold font-sans">Neuro Nex</h1>
                <p className="text-white text-lg">All Transaction History</p>
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
                        Headliner
                    </label>

                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </div>
                
            </div>


            <div className="-mt-5">
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                        Headliner
                    </label>

                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </div>

            </div>


            {/* Transaction Body */}
            <div>
                
            </div>
        </div>
    );
};

export default TransactionHistory;