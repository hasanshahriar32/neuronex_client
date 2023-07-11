import axios from "axios";
import { BsFillSendFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ManageProfitModal = ({ packageInfo, setPackageInfo, setRefetch }) => {
  const inputData = [
    { ref: "Name", filed: "Add Name", value: packageInfo?.plan },
    {
      ref: "Price",
      filed: "Add Price",
      value: packageInfo?.price,
      type: "number",
    },
    { ref: "validity", filed: "Add validity", value: packageInfo?.validity },
    {
      ref: "Generation",
      filed: "Add Generation",
      value: packageInfo?.estimatedGeneration,
    },
    { ref: "profit", filed: "Service Charge", value: packageInfo?.profit },
    { ref: "password", filed: "password", value: "", type: "password" },
  ];
  const getSessions = async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const { data: dataGet } = await axios.patch(
        `https://neuronex-server.vercel.app/package/${localStorage.getItem(
          "user_id"
        )}`,
        {
          _id: packageInfo?._id,
          plan: data.plan,
          price: data.price,
          estimatedGeneration: data.estimatedGeneration,
          validity: data.validity,
          profit: data.profit,
          password: data.password || "",
        },
        config
      );
      if (dataGet?._id) {
        setRefetch(true);
        setPackageInfo();
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
      }
    } catch (error) {
      console.log(error);
      toast.error({
        title: "Error Occurred!",
        description: "Failed to fetch user session data.",
        status: "error",
        duration: 4000,
        isClosable: true,
        theme: "dark",
      });
    }
  };
  const handleUpdatePrice = (event) => {
    event.preventDefault(); // Prevent form submission reload
    // Perform your update logic here
    const form = event.target;
    const updatedPackage = {
      plan: form.Name.value,
      price: form.Price.value,
      validity: form.validity.value,
      estimatedGeneration: form.Generation.value,
      profit: form.profit.value,
    };
    getSessions(updatedPackage);
  };
  return (
    <div className="">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative ">
          <label
            onClick={() => setPackageInfo()}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Update Pricing Info</h3>
          <form onSubmit={handleUpdatePrice} className="">
            <div className="">
              <div className=" px-1 pt-4">
                <div>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-2 sm:mb-5 ">
                    {inputData.map((data, index) => (
                      <div key={index} className="sm:col-span-2">
                        <label
                          htmlFor={data.ref}
                          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 font-bold"
                        >
                          <input
                            type={data.type || "text"}
                            name="name"
                            min="21"
                            step="0.01"
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
    </div>
  );
};

export default ManageProfitModal;
