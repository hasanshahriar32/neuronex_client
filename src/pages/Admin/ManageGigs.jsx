import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageProfitModal from "./ManageProfitModal";

const ManageGigs = () => {
  const [pricingData, setPricingData] = useState([]);
  const [packageInfo, setPackageInfo] = useState({});
  const [modelPriceConfig, setModelPriceConfig] = useState({});
  const [modelRefetch, setModelRefetch] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const getPackage = async () => {
    const { data: dataGet } = await axios.get(
      `https://ai-chatbot-server.vercel.app/package/all`
    );
    setPricingData(dataGet);
  };
  useEffect(() => {
    setRefetch(false);
    getPackage();
  }, [refetch]);

  const inputData = [
    {
      ref: "initBalance",
      filed: "Add initBalance",
      value: modelPriceConfig?.initBalance,
      type: "number",
    },
    {
      ref: "initDuration",
      filed: "Add initDuration",
      value: modelPriceConfig?.initDuration,
      type: "number",
    },
    {
      ref: "inPrice",
      filed: "Add inPrice",
      value: modelPriceConfig?.inPrice,
      type: "number",
    },
    {
      ref: "outPrice",
      filed: "Add outPrice",
      value: modelPriceConfig?.outPrice,
      type: "number",
    },
    { ref: "password", filed: "password", value: "", type: "password" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission reload
    const form = event.target;
    const updatedPackage = {
      initBalance: form.initBalance.value,
      initDuration: form.initDuration.value,
      inPrice: form.inPrice.value,
      outPrice: form.outPrice.value,
      password: form.password.value || "",
    };
    handleUpdatePrice(updatedPackage);
  };

  const handleUpdatePrice = async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data: dataGet } = await axios.patch(
        `https://ai-chatbot-server.vercel.app/ai/${localStorage.getItem(
          "user_id"
        )}`,
        {
          _id: modelPriceConfig?._id,
          initBalance: data.initBalance,
          initDuration: data.initDuration,
          inPrice: data.inPrice,
          outPrice: data.outPrice,
          password: data.password || "",
        },
        config
      );
      if (dataGet?._id) {
        setModelRefetch(true);
        getModelConfig();
      }
      toast.success("update Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      if (error?.response?.status === 403) {
        toast.error("Wrong password", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.success("Something went wrong", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const getModelConfig = async () => {
    const { data: dataGet } = await axios.get(
      `https://ai-chatbot-server.vercel.app/ai/all`
    );
    setModelPriceConfig(dataGet[0]);
  };
  useEffect(() => {
    setModelRefetch(false);
    getModelConfig();
  }, [modelRefetch]);
  return (
    <div className="p-2 md:p-5 ">
      <div className=" gap-4 lg:block">
        <h1 className="text-3xl md:text-4xl mt-3 font-bold ">
          Update, price and profit :
        </h1>
        <div className="">
          {/* <label
            htmlFor="my-drawer-2"
            className="cursor-pointer btn btn-sm lg:hidden mt-5"
          >
            Open drawer{" "}
          </label> */}
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-4">
          {pricingData.map((data) => (
            <label
              key={data?.price}
              className="tooltip tooltip-bottom text-left tooltip-info"
              data-tip="click to edit"
              htmlFor="my-modal-3"
              onClick={() => {
                setPackageInfo(data);
              }}
            >
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
      </div>
      <div className="mt-10 mx-6 ">
        <h3 className="text-xl">Ai model Config:</h3>
        <div className="">
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <div className=" px-1 pt-4">
                <div className="container">
                  <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-2 sm:mb-5 ">
                    {inputData.map((data, index) => (
                      <div key={index} className="">
                        <label
                          htmlFor={data.ref}
                          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 font-bold"
                        >
                          <input
                            type={data.type || "text"}
                            name="name"
                            min="0.00"
                            step="0.000001"
                            required={data.type === "password" ? false : true}
                            id={data.ref}
                            defaultValue={data.value}
                            placeholder={data.ref}
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm font-normal"
                          />
                          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                            {data.filed}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="w-full">
                    <button type="submit" className="btn btn-info w-full">
                      <BsFillSendFill className="mt-1 mx-2 text-md" />
                      <p className="text-md">Update</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {packageInfo && (
        <ManageProfitModal
          packageInfo={packageInfo}
          setPackageInfo={setPackageInfo}
          setRefetch={setRefetch}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default ManageGigs;
