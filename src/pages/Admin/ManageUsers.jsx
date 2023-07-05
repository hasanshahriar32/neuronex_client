import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

const ManageUsers = () => {
    const [userData, setUserData] = useState();
    const handleDelete = (id) => {
        try {
            const user = async () => {
                const user = localStorage.getItem("token");
                const config = {
                    headers: {
                        Authorization: `Bearer ${user}`,
                    },
                };
                const { data } = await axios.delete(
                    `https://neuronex-server-test.vercel.app/admin/user/${id}`,

                    config
                );
                console.log(data);
                alert("user deleted");
            };
            user();
        } catch (error) {
            console.log(error);
            alert(error.response.data.msg);
            alert("something went wrong");
            console.log("something went wrong");
        }
    };
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
                    `https://neuronex-server-test.vercel.app/user/all`,

                    config
                );
                setUserData(data);
            };
            user();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="w-full lg:w-[750px]">
            {!userData ? (
                <LoadingAnimation></LoadingAnimation>
            ) : (
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th> */}
                                <th>Name</th>
                                <th>Credential</th>
                                <th>About</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {userData?.map((userData) => (
                                <tr
                                    data-aos-duration="3000"
                                    data-aos="fade-left"
                                    key={userData._id}
                                >
                                    {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox " />
                    </label>
                  </th> */}
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={userData?.pic} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{userData?.name}</div>
                                                <div className="text-sm opacity-50">Bangladesh</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {userData?.email}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">
                                            {userData?.uid}
                                        </span>
                                    </td>
                                    <td>Buyer</td>
                                    <th>
                                        {/* <button className="btn btn-ghost btn-xs">
                      Make Verified
                    </button> */}
                                        <button
                                            onClick={() => handleDelete(userData?._id)}
                                            className="btn btn-danger btn-xs"
                                        >
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            ))}
                            {/* row 2 */}
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <div className="flex  justify-end w-[100%]">
                                {/* <th></th>
                <th>Name</th>
                <th>Credential</th>
                <th>About</th>
                <th></th> */}

                                <div className="flex flex-col items-center">
                                    {/* <!-- Help text --> */}
                                    <span className="text-sm text-gray-700 dark:text-gray-400">
                                        Showing{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            1
                                        </span>{" "}
                                        to{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            10
                                        </span>{" "}
                                        of{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            100
                                        </span>{" "}
                                        Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        {/* <!-- Buttons --> */}
                                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 mr-2"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            Prev
                                        </button>
                                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            Next
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 ml-2"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <label
                                            htmlFor="my-drawer-2"
                                            className="btn btn-sm btn-ghost btn-rounded btn-primary lg:hidden mt-2 ml-10"
                                        >
                                            Open drawer
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageUsers;
