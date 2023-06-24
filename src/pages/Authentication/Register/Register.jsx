import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/Authentication/UserContext/UserContext";
import useToken from "../../../hooks/useToken";

const Register = () => {
  const { createUser, userprofile, logOut } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const navigate = useNavigate();

  if (token) {
    navigate("/login");
  }

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
              fetch("https://neuronex-server-test.vercel.app/user", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addedUser),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);
                  setCreatedUserEmail(result?.email);
                  // navigate("/login");
                  logOut();
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
                });
            }
          });
      })
      .catch((err) => console.error(err));
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

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="text-center"></div>
          <div className="card bg-white lg:w-[700px] border-t-4 border-t-rose-400 dark:border-t-white flex-shrink-0 shadow-2xl ">
            <div className="card-body">
              <h3 className="font-serif text-2xl text-background underline">
                Register Here
              </h3>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <div className="form-control mx-1 w-full">
                  <label className="label">
                    <span className="label-text text-xl text-background">
                      Full Name{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {})}
                    className="input input-bordered w-full bg-grey border-0 text-white text-lg py-5"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-control mx-1 w-full">
                  <label className="label">
                    <span className="label-text text-xl text-background">
                      email{" "}
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {})}
                    className="input input-bordered w-full bg-grey border-0 text-white text-lg py-5"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex">
                  <div className="form-control mx-1 w-full">
                    <label className="label">
                      <span className="label-text text-xl text-background">
                        Password{" "}
                      </span>
                    </label>
                    <div className="">
                      <input
                        type={changePassword ? "password" : "text"}
                        {...register("password", {})}
                        className="input input-bordered w-full bg-grey border-0 text-white text-lg py-5"
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                      <span
                        className="flex items-center mx-2 text-background"
                        onClick={() => {
                          setChangePassword(changeIcon);
                        }}
                      >
                        {changeIcon ? (
                          <p className="flex group cursor-pointer text-xl">
                            <span className="mr-2 group-hover:underline">
                              Hidden Password
                            </span>
                            <BsEyeSlashFill className="mt-1" />
                          </p>
                        ) : (
                          <p className="flex group cursor-pointer text-xl">
                            <span className="mr-2 group-hover:underline">
                              Show Password
                            </span>
                            <BsEyeFill className="mt-1" />
                          </p>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-control mx-1 w-full">
                  <label className="label">
                    <span className="label-text text-xl text-background">
                      Photo
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("img", {
                      required: "Photo is Required",
                    })}
                    className="input input-bordered bg-grey border-0 text-white w-full text-xl h-10"
                  />
                  {errors.img && (
                    <p className="text-red-500">{errors.img.message}</p>
                  )}
                </div>

                <input
                  className="btn btn-lg text-white w-full mt-4 text-xl"
                  value="Register"
                  type="submit"
                />
              </form>

              <label className="label">
                <a href="#" className="underline text-background text-xl">
                  <Link to="/login">Already have an account?</Link>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
