import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { isSafari } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { usePayment } from "../../Contexts/PaymentContext/PaymentContext";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import PaymentModal from "../Payment/PaymentModal";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0,
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const headingVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const tableVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Price = () => {
  const { packagE, setPackage } = usePayment();
  const [pricingData, setPricingData] = useState([]);
  const { user } = useContext(AuthContext);
  // useInView hook
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
    threshold: 0.1, // Adjust the threshold value as per your needs
  });

  const getPackage = async () => {
    const { data: dataGet } = await axios.get(
      `https://ai-chatbot-server.vercel.app/package/all`
    );
    setPricingData(dataGet);
  };
  useEffect(() => {
    getPackage();
  }, []);

  return (
    <div ref={ref} className="-mt-[250px] lg:px-[80px] ">
      <div className="mb-4">
        <motion.h2
          className=" text-center mb-10"
          variants={headingVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-5xl text-center ">Pricing</h2>
          <h2 className="text-2xl text-center mb-10">
            Package to suit your plan
          </h2>
        </motion.h2>
        <motion.div
          // ref={ref}
          className="overflow-x-auto border m-4 p-2 shadow-secondary"
          variants={tableVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <table className="table table-xl text-center">
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
                <td>gpt-3.5-turbo</td>
                <td>$0.0015 / 1K tokens</td>
                <td>$0.002 / 1K tokens</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
      <motion.ul
        // ref={ref} // Attach the ref to the <ul> element
        className="container"
        variants={!isSafari ? container : null}
        initial={!isSafari ? "hidden" : "visible"}
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-4">
          {pricingData.map((data) => (
            <motion.li
              variants={!isSafari ? item : null}
              key={data?.price}
              className="item"
            >
              <div
                className={`bg-[#070C1C]   shadow-lg rounded-lg overflow-hidden border  cursor-pointer
                            ${!isSafari && "hover:scale-95 duration-150 group"}
                            `}
              >
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
                  {user?.uid ? (
                    <label
                      onClick={() => setPackage(data)}
                      htmlFor="my-modal-3"
                      className="btn btn-md group-hover:scale-125 group-hover:ml-3 tracking-wide btn-warning mt-4"
                    >
                      Recharge Now!
                    </label>
                  ) : (
                    <label>
                      <Link
                        to="/login"
                        className="btn btn-md group-hover:scale-125 group-hover:ml-3 tracking-wide btn-warning mt-4"
                      >
                        Login to pay
                      </Link>
                    </label>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </div>
      </motion.ul>
      {packagE && <PaymentModal />}
      <ToastContainer />
    </div>
  );
};

export default Price;
