import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getAuth, updateProfile } from "firebase/auth";
import app from "../../configs/firebase.config";
import { BsFillSendFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const UpdateProfile = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const notify = () => toast.success("Profile Updated !");
  const notify1 = () => toast.warning("Reload Required !");
  const notify2 = (err) => toast.error(err);
  const userUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const name = form.name.value;
    const image = form.image.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        console.log("Profile updated!");
        notify();
        notify1();
      })
      .catch((error) => {
        console.log(error);
        // alert(error.message);
        notify2(error.message);
      });
  };

  //   const { user } = useContext(AuthContext);
  //   console.log(user);
  const deleteAccount = () => {
    const agree = window.confirm(
      `Are you sure to delete account ${user?.displayName}?`
    );
    if (agree) {
      deleteUser(user)
        .then(function () {
          // User deleted..
          console.log("User deleted");
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
          alert(error);
        });
    }
  };
  return (
    <div className=" dark:bg-gray-900">
      <ToastContainer />
      <section className=" dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <div className="mb-4 text-xl font-bold text-gray-900 dark:text-white flex">
            <BiEditAlt className="mt-1 mx-2" /> <span>Update profile</span>
          </div>
          <form onSubmit={userUpdate} action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              {/* <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Profile Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={user?.displayName}
                  placeholder="Type profile name"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Profile Image Link
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={user?.photoURL}
                  placeholder="Insert image link"
                />
              </div> */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="Profile Name"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    name="name"
                    id="Profile Name"
                    defaultValue={user?.displayName}
                    placeholder="Profile Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Profile Name
                  </span>
                </label>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="Profile Image Link"
                  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    defaultValue={user?.photoURL}
                    name="image"
                    id="Profile Image Link"
                    placeholder="Profile Image Link"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Profile Image Link
                  </span>
                </label>
              </div>
              {/* <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue={user?.email}
                  placeholder="Type email"
                  //   required=""
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  //   value=""
                  placeholder="Password"
                  required=""
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  disabled
                  name="confirm"
                  id="confirm"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  //   value=""
                  placeholder="Confirm password"
                  required=""
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Bio
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write your bio here..."
                ></textarea>
              </div> */}
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white hover:text-background bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center gap-2 border-l-[3px] border-secondary bg-primary  py-3"
              >
                <BsFillSendFill className="mt-1 mx-2" /> Update profile
              </button>
              <button
                onClick={deleteAccount}
                type="button"
                className="text-red-600 inline-flex items-center hover:text-background border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-red-600 dark:hover:bg-red-600 dark:focus:ring-red-900 gap-2 border-l-[3px] border-secondary text-white bg-red hover:bg-red py-3"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete account
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
