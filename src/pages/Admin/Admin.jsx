import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

const Admin = () => {
    const [adminData, setAdminData] = useState([]);
    useEffect(() => {
        try {
            const user = async () => {
                const user = localStorage.getItem("token");
                const config = {
                    headers: {
                        Authorization: `Bearer ${user}`,
                    },
                };
                const { data } = await axios.get(
                    `https://neuronex-server-test.vercel.app/admin/${localStorage.getItem(
                        "user_id"
                    )}`,

                    config
                );
                setAdminData(data);
                // console.log(data);
            };
            user();
        } catch (error) {
            console.log(error);
        }
    }, []);
    const handleChange = () => {
        const modal = document.getElementById("my-modal-5");
        modal.checked = true;
    };
    const handleChangePass = async (e) => {
        e.preventDefault();
        const form = e.target;
        const oldPass = form.oldPass.value;
        const newPass = form.newPass.value;
        // console.log(oldPass, newPass);

        const currentPassword = oldPass;
        const newPassword = newPass;
        const jwtToken = localStorage.getItem("token");

        const data = { currentPassword, newPassword };
        const headers = { Authorization: `Bearer ${jwtToken}` };
        // console.log(data);
        try {
            const response = await axios.patch(
                `https://neuronex-server-test.vercel.app/admin/${localStorage.getItem(
                    "user_id"
                )}`,
                data,
                { headers }
            );

            console.log(response.data);
            alert("pass changed");
            const modal = document.getElementById("my-modal-5");
            modal.checked = false;
            //   btnClose();
        } catch (error) {
            console.log(error);
            alert(error.response.data.msg || "something went wrong");
        }
    };
    return (
        <div className="">
            {adminData.length == 0 ? (
                <LoadingAnimation></LoadingAnimation>
            ) : (
                <div className="">
                    <figure className="md:flex bg-slate-100 rounded-xl p-8">
                        {adminData?.pic ? (
                            <img
                                className="md:w-[240px] md:h-auto md:rounded-none rounded-full mx-auto w-24 h-24"
                                src={adminData?.pic}
                                alt={adminData?.name}
                                width="384" height="512"
                            />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-24 h-24"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-medium">
                                    {adminData?.name} <br />
                                    {adminData?.email}
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    <p className="">_id: {adminData?._id}</p>
                                    <p className="">uid: {adminData?.uid}</p>
                                </div>
                                <div className="text-slate-700 flex items-center justify-center">
                                    <p className="">
                                        {adminData?.verified ? "Verified ✅" : "Not Verified "}
                                    </p>
                                    <div className="">
                                        <button
                                            onClick={handleChange}
                                            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                        >
                                            Change Admin Password
                                        </button>
                                    </div>

                                </div>
                                <label
                                    htmlFor="my-drawer-2"
                                    className="btn btn-sm btn-ghost btn-rounded btn-primary"
                                >
                                    Open drawer
                                </label>
                            </figcaption>
                        </div>
                    </figure>
                    <div>
                    </div>

                    <div className="w-full">
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-6">
                                    You are about to change your password!
                                </h3>
                                <form onSubmit={handleChangePass} action="">
                                    <div>
                                        <label className="py-4" htmlFor="">
                                            Please enter your old password
                                        </label>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="password"
                                            name="oldPass"
                                            placeholder="••••••••"
                                            // defaultValue={users?.email}
                                            id="oldPass"
                                            // onBlur={handleEventBlur}
                                            required=""
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="py-4 " htmlFor="">
                                            Please enter your new password
                                        </label>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            type="password"
                                            name="newPass"
                                            placeholder="••••••••"
                                            // defaultValue={users?.email}
                                            id="newPass"
                                            // onBlur={handleEventBlur}
                                            required=""
                                        />
                                    </div>

                                    <div className="modal-action">
                                        <button type="submit" className="btn">
                                            Submit
                                        </button>
                                        <label
                                            onClick={() => {
                                                //   btnClose();
                                            }}
                                            htmlFor="my-modal-5"
                                            className="btn"
                                        >
                                            Cancel
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>

    );
};
export default Admin;
