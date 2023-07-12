import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
// import useToken from "../../../hooks/useToken";

const Register = () => {
  const { createUser, userprofile, user } = useContext(AuthContext);
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //! from .env.local file====>
  // const imgHostKey = process.env.REACT_APP_Imgbb_key;
  const imgHostKey =
    "https://api.imgbb.com/1/upload&key=690c200c36211dbbf9634dc12eadb291";
  // console.log(imgHostKey);

  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = data.img;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        //! ==========< Image Hosting >==========

        const formData = new FormData();

        formData.append("image", image[0]);

        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            console.log(imgData);
            if (imgData.success) {
              const photoURL = imgData.data.url;

              updateUserDetails(name, photoURL);

              const addedUser = {
                name,
                email,
                pic: photoURL,
                uid: user?.uid,
                userAbout: "user",
                verified: user?.emailVerified,
              };

              //! Save User info to the database....
              fetch("https://neuronex-server.vercel.app/user", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addedUser),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  localStorage.setItem("token", result.token);
                  localStorage.setItem("user_id", result._id);
                  navigate(from, { replace: true });
                  toast.success("Registration successful", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const updateUserDetails = (name, photoURL) => {
    userprofile(name, photoURL)
      .then(() => {
        toast.success("Profile Updated", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (user?.uid && localStorage.getItem("token")) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <ToastContainer />
      <div className="flex items-center justify-center h-[90vh] ">
        <div className="max-w-xl ">
          <div className="card  bg-page-gradient shadow-transparent/90 shadow-primary">
            <div className="px-2 pt-4">
              <h3 className="font-serif font-semibold text-center text-2xl text-secondary">
                Register Here
              </h3>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-md mb-1 text-secondary">
                      Full Name{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {})}
                    className="input  border-secondary bg-ghost  text-lg py-5"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-md text-secondary mb-1 mt-2">
                      Email{" "}
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {})}
                    className="input  border-secondary   bg-ghost  text-lg py-5"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-md mb-1 mt-2 text-secondary">
                        Password{" "}
                      </span>
                    </label>
                    <div className="">
                      <input
                        type={changePassword ? "password" : "text"}
                        {...register("password", {})}
                        className="input input-secondary  w-full text-md py-5"
                      />
                      {errors.password && (
                        <p className="label-text text-xl text-secondary">
                          {errors.password.message}
                        </p>
                      )}
                      <span
                        className="flex items-center mx-2 label-text  text-secondary"
                        onClick={() => {
                          setChangePassword(changeIcon);
                        }}
                      >
                        {changeIcon ? (
                          <p className="flex group cursor-pointer text-xs mt-1 justify-end">
                            <span className="mr-2 group-hover:underline">
                              Hidden Password
                            </span>
                            <BsEyeSlashFill className="" />
                          </p>
                        ) : (
                          <p className="flex group cursor-pointer text-xs mt-1 justify-end">
                            <span className="mr-2 group-hover:underline">
                              Show Password
                            </span>
                            <BsEyeFill className="" />
                          </p>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text text-md mb-1 text-secondary">
                      Photo
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("img", {
                      required: "Photo is Required",
                    })}
                    className="input input-secondary  bg-ghost w-full text-md h-8"
                  />
                  {errors.img && (
                    <p className="text-red-500">{errors.img.message}</p>
                  )}
                </div>

                <input
                  className="btn text-md btn-lg btn-secondary w-full mt-7"
                  value="Register"
                  type="submit"
                />
              </form>
              <label className="label">
                <span className="text-secondary  text-md link-hover hover:underline pb-4">
                  <Link className="ml-4" to="/login">
                    Already have an account?
                  </Link>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
