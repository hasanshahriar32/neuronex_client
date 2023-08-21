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
          `https://ai-chatbot-server.vercel.app/admin/${localStorage.getItem(
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
        `https://ai-chatbot-server.vercel.app/admin/${localStorage.getItem(
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
          <section className="relative block h-[300px]">
            <div
              className="absolute -top-12 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-18 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative -mt-[160px] bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-base-200 w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          src={adminData?.pic}
                          alt={adminData?.name}
                          className="shadow-xl rounded-full h-auto w-[200px] align-middle border-none absolute -m-[78px] -ml-20 lg:-ml-16 max-w-[150px] "
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        {/* <label
                                                    htmlFor="my-drawer-2"
                                                    className="cursor-pointer btn btn-sm lg:hidden"
                                                >
                                                    Open drawer{" "}
                                                </label> */}
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="lg:mr-4 p-3 text-center md:text-left  md:text-md">
                          <p className="">id: {adminData?._id}</p>
                          <p className="">uid: {adminData?.uid}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                      {adminData?.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">
                        {adminData?.email}
                      </i>
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      {adminData?.verified ? "Verified ✅" : "Not Verified "}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      <label
                        onClick={handleChange}
                        className=" btn-warning btn btn-lg py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        Change Admin Password
                      </label>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          An artist of considerable range, Jenna the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                      Please enter your old password (default is blank)
                    </label>
                    <input
                      className="bg-gray-50 input input-secondary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      name="oldPass"
                      placeholder=""
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
                      className="bg-gray-50 input input-secondary border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
      )}
    </div>
  );
};
export default Admin;
