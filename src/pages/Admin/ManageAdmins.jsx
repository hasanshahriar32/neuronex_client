import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, useToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
const ManageAdmins = () => {
  const [admin, setAdmin] = useState([]);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [adminToRemove, setAdminToRemove] = useState();
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
          `https://ai-chatbot-server.vercel.app/admin/all`,

          config
        );
        setAdmin(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toast = useToast;
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
          `https://ai-chatbot-server.vercel.app/user/user?search=${search}`,

          config
        );
        setUsers(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  const btnClose = () => {
    setSearch("");
    setUsers([]);
    selectedUser();
  };
  // console.log(users);
  const selectedUser = (user) => {
    // console.log(id);
    setSelectedId(user);
  };
  const addAdmin = () => {
    const modal = document.getElementById("my-modal-6");
    modal.checked = true;
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    // console.log(e.target.confirmAdd.value);
    const data = {
      id: selectedId?._id,
      adminmakerpass: e.target.confirmAdd.value,
      adminmaker: localStorage.getItem("user_id"),
    };
    // console.log(data);
    try {
      const user = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      };
      const response = await axios.post(
        "https://ai-chatbot-server.vercel.app/admin",
        data,
        config
      );
      console.log("admin added");
      btnClose();
      setAdmin([...admin, response.data]);
      // console.log([...admin, response]);
      const modal = document.getElementById("my-modal-6");
      modal.checked = false;
      // toast.success("admin added");
    } catch (error) {
      // console.log(error);
      alert(error?.response?.data?.error || error?.response?.data?.msg);
      toast.error("something went wrong");
    }
  };
  // const handleRemove = async (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.confirmRemove.value);
  //   const data = {
  //     adminterminator: localStorage.getItem("user_id"),
  //     adminterminatorpass: e.target.confirmRemove.value,
  //   };
  //   // console.log(data);
  //   try {
  //     const user = localStorage.getItem("token");
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${user}`,
  //       },
  //     };
  //     const url = `https://ai-chatbot-server.vercel.app/admin/${adminToRemove?._id}`;
  //     // console.log(url);
  //     const response = await axios.delete(url, data, config);
  //     console.log(response.data);
  //     btnClose();
  //     // setAdmin([...admin, data]);
  //     const modal = document.getElementById("my-modal-5");
  //     modal.checked = false;
  //     // toast.success("admin added");
  //     alert("admin removed");
  //   } catch (error) {
  //     console.log(error);
  //     alert("something went wrong");
  //     // toast.error("something went wrong");
  //   }
  // };
  const handleRemove = async (e) => {
    e.preventDefault();

    // const adminToRemove = // some code to get the admin object you want to delete
    const adminterminatorpass = e.target.confirmRemove.value;
    const adminterminator = localStorage.getItem("user_id");
    const jwtToken = localStorage.getItem("token");

    const data = { adminterminator, adminterminatorpass };
    const headers = { Authorization: `Bearer ${jwtToken}` };

    try {
      const response = await axios.delete(
        `https://ai-chatbot-server.vercel.app/admin/${adminToRemove._id}`,
        { data, headers }
      );

      console.log(response.data);
      alert("admin removed");
      const modal = document.getElementById("my-modal-5");
      modal.checked = false;
      btnClose();
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  const handleAdminDelete = (admin) => {
    setAdminToRemove(admin);
    const modal = document.getElementById("my-modal-5");
    modal.checked = true;
  };
  return (
    <div className="w-full">
      {admin.length == 0 ? (
        <LoadingAnimation></LoadingAnimation>
      ) : (
        <section className=" p-3 sm:p-5">
          <h2 className="text-4xl font-bold mb-5">Manage Admins</h2>
          <div className="mx-auto px-2 lg:px-4  min-h-[80vh]">
            {/* <!-- Start coding here --> */}
            <ToastContainer></ToastContainer>
            <div className="relative shadow-md sm:rounded-lg overflow-hidden ">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 ">
                <div className="w-full md:w-1/2 md:-ml-3">
                  <div className="flex items-center">
                    <label className="sr-only">Search</label>
                    {!selectedId ? (
                      <div className="relative flex flex-row w-full ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          {search.length < 1 && (
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {search.length !== 0 && (
                            <button
                              className="btn relative  btn-ghost cursor-pointer btn-outline btn-xs btn-circle"
                              onClick={btnClose}
                            >
                              {" "}
                              <AiOutlineCloseCircle className="text-3xl -mt-[5px]" />
                            </button>
                          )}
                        </div>
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          id="simple-search"
                          value={search}
                          className="md:max-w-xl input input-secondary text-gray-900 text-md rounded-lg  block w-full pl-10 p-2"
                          placeholder="Search"
                          required=""
                        />
                      </div>
                    ) : (
                      <div className="flex border border-solid p-2 rounded-md justify-evenly flex-row flex-wrap items-center w-full">
                        <button>{selectedId?.name}</button>
                        <button
                          onClick={() => {
                            btnClose();
                          }}
                          className="btn btn-ghost btn-xs btn-outline btn-circle"
                        >
                          <AiOutlineCloseCircle className="text-3xl -mt-[5px]" />
                        </button>
                      </div>
                    )}
                    {search && !selectedId && (
                      <div className="relative  top-6">
                        <ul className="absolute menu p-2 shadow bg-base-200 rounded-box  z-40 min-w-[200px] right-0">
                          {users.map((user) => (
                            <li
                              className="flex flex-row overflow-clip"
                              key={user?._id}
                            >
                              <a
                                className="w-full"
                                onClick={() => {
                                  selectedUser(user);
                                }}
                              >
                                {" "}
                                <img
                                  src={user?.pic}
                                  className="w-6"
                                  alt=""
                                />{" "}
                                {user?.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  {selectedId && (
                    <div className="">
                      <button
                        onClick={addAdmin}
                        type="button "
                        className="justify-center text-white  rounded-lg text-sm px-4 py-2 "
                      >
                        <svg
                          className="h-3.5 w-3.5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          />
                        </svg>
                        Add admin
                      </button>
                    </div>
                  )}
                  {/* The button to open modal */}
                  {/* <label htmlFor="my-modal-6" className="btn">
                  open modal
                </label> */}

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        You are about to set {selectedId?.name} as an admin!
                      </h3>
                      <p className="py-4">
                        Please enter your password to confirm
                      </p>
                      <form onSubmit={handleAdd} action="">
                        <input
                          className="bg-gray-50 input input-secondary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="password"
                          name="confirmAdd"
                          placeholder="••••••••"
                          // defaultValue={users?.email}
                          id="confirmAdd"
                          // onBlur={handleEventBlur}
                          required=""
                        />

                        <div className="modal-action">
                          <button type="submit" className="btn">
                            Submit
                          </button>
                          <label
                            onClick={() => {
                              btnClose();
                            }}
                            htmlFor="my-modal-6"
                            className="btn"
                          >
                            Cancel
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 w-full justify-around ">
                    <button
                      id="actionsDropdownButton"
                      data-dropdown-toggle="actionsDropdown"
                      className="w-auto flex items-center justify-center px-4 text-md font-medium cursor-pointer btn btn-disabled"
                      type="button"
                    >
                      <svg
                        className="-ml-1 mr-1.5 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                      Actions
                    </button>
                    <div
                      id="actionsDropdown"
                      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="actionsDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mass Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete all
                        </a>
                      </div>
                    </div>
                    <button
                      id="filterDropdownButton"
                      data-dropdown-toggle="filterDropdown"
                      className="w-auto flex items-center justify-center px-4 text-md font-medium  btn btn-disabled"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-4 w-4 mr-2 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Filter
                      <svg
                        className="-mr-1 ml-1.5 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                    </button>
                    <div
                      id="filterDropdown"
                      className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <h6 className="mb-3 text-sm font-medium text-gray-900">
                        Choose brand
                      </h6>
                      <ul
                        className="space-y-2 text-sm"
                        aria-labelledby="filterDropdownButton"
                      >
                        <li className="flex items-center">
                          <input
                            id="apple"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Apple (56)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="fitbit"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Microsoft (16)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="razor"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Razor (49)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="nikon"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Nikon (12)
                          </label>
                        </li>
                        <li className="flex items-center">
                          <input
                            id="benq"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            BenQ (74)
                          </label>
                        </li>
                      </ul>
                    </div>
                    {/* <label
                      htmlFor="my-drawer-2"
                      className="w-auto flex items-center justify-center  text-sm  cursor-pointer btn btn-info lg:hidden"
                    >
                      Open drawer
                    </label> */}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <table className="table text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Admin name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-4 py-3 hidden md:block">
                          Verified
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Action
                        </th>
                        <th scope="col" className="px-4 py-3 hidden md:block">
                          Email
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {admin.map((adminData) => (
                        <tr key={adminData._id} className="">
                          <th
                            scope="row"
                            className=" font-medium text-gray-900 whitespace-nowrap"
                          >
                            {adminData?.name}
                          </th>
                          <td className="">
                            {adminData?.isSuperAdmin ? "Super Admin" : "Admin"}
                          </td>
                          <td className="px-4 py-3 hidden md:block">
                            {adminData?.verified ? "Verified" : "Not Verified"}
                          </td>
                          <td className="">
                            <button
                              onClick={() => handleAdminDelete(adminData)}
                              className={
                                adminData?.isSuperAdmin
                                  ? "btn btn-sm btn-error btn-outline btn-disabled"
                                  : "btn btn-sm btn-error btn-outline"
                              }
                            >
                              Delete
                            </button>
                          </td>
                          <td className="hidden md:block">
                            {adminData?.email}
                          </td>
                          <td className=" flex items-center justify-end">
                            <div
                              className="tooltip  tooltip-left"
                              data-tip={adminData?.email}
                            >
                              <button
                                id="apple-imac-27-dropdown-button"
                                data-dropdown-toggle="apple-imac-27-dropdown"
                                className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none md:hidden"
                                type="button"
                              >
                                <svg
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                              </button>
                            </div>

                            <div
                              id="apple-imac-27-dropdown"
                              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="apple-imac-27-dropdown-button"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Show
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Edit
                                  </a>
                                </li>
                              </ul>
                              <div className="py-1">
                                <a
                                  href="#"
                                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    You are about to remove {adminToRemove?.name} from admin!
                  </h3>
                  <p className="py-4">Please enter your password to confirm</p>
                  <form onSubmit={handleRemove} action="">
                    <input
                      className="bg-gray-50 input input-secondary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      name="confirmRemove"
                      placeholder="••••••••"
                      // defaultValue={users?.email}
                      id="confirmRemove"
                      // onBlur={handleEventBlur}
                      required=""
                    />

                    <div className="modal-action">
                      <button type="submit" className="btn">
                        Submit
                      </button>
                      <label
                        onClick={() => {
                          btnClose();
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
          </div>
        </section>
      )}
    </div>
  );
};

export default ManageAdmins;
