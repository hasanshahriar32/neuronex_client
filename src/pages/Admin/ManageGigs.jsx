import axios from "axios";
import { useEffect, useState } from "react";
import ManageProfitModal from "./ManageProfitModal";


const ManageGigs = () => {
    const [pricingData, setPricingData] = useState([]);
    const [packageInfo, setPackageInfo] = useState({});
    const [refetch, setRefetch] = useState(false);

    const getPackage = async () => {
        const { data: dataGet } = await axios.get(
            `https://neuronex-server-test.vercel.app/package/all`
        );
        setPricingData(dataGet);
    };
    useEffect(() => {
        setRefetch(false)
        getPackage();
    }, [refetch]);


    return (
        <div className="p-2 md:p-5 ">
            <h1 className="text-4xl mt-3 font-bold">
                Update, price and profit :
            </h1>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-4">
                    {pricingData.map((data) => (
                        <label key={data?.price} className="tooltip tooltip-bottom text-left tooltip-info" data-tip="click to edit"
                            htmlFor="my-modal-3"
                            onClick={() => {
                                setPackageInfo(data)
                            }}>
                            <div className="bg-[#070C1C] group  shadow-lg rounded-lg overflow-hidden border hover:scale-95 duration-150 cursor-pointer ">
                                <div className="p-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {data?.plan}
                                    </h3>
                                    <div className="flex items-center mt-3">
                                        <span className="text-gray-700 font-semibold text-lg">
                                            $
                                        </span>
                                        <span className="text-gray-900 text-2xl font-semibold">
                                            {data?.price}
                                        </span>
                                    </div>
                                    <ul className="mt-4 ">
                                        <p className="text-gray-900 text-lg font-semibold">
                                            validity : {data?.validity} Days
                                        </p>
                                        <p className="text-gray-700 font-semibold text-lg">
                                            Generation:{data?.estimatedGeneration}(EST)
                                        </p>
                                    </ul>
                                </div>
                            </div>
                        </label>
                    ))}
                </div>
                {
                    packageInfo &&
                    <ManageProfitModal packageInfo={packageInfo} setPackageInfo={setPackageInfo} setRefetch={setRefetch} />}
            </div>
            <>

            </>
        </div>
    );
};

export default ManageGigs;