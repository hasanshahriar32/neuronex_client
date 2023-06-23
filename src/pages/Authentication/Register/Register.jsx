import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/Authentication/UserContext/UserContext";

const Register = () => {
  const { createUser, userprofile, loading, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

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
                password,
                image: imgData.data.url,
              };

              //! Save User info to the database....
              fetch("https://neuronex-server-test.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(addedUser),
              })
                .then((res) => res.json())
                .then((result) => {
                  console.log(result);

                  navigate("/login");
                  logOut();
                  toast.success("Registration successful");
                });
            }
          });
      })
      .catch((err) => console.error(err));
  };

  const updateUserDetails = (name, photoURL) => {
    userprofile(name, photoURL)
      .then(() => {
        toast.success("Profile Updated");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //! Loading . . .
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="text-center lg:text-left"></div>
          <div className="card border-t-4 border-t-rose-400 flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body">
              <h3 className="font-serif text-2xl">Register Here</h3>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <div className="form-control mx-1 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Full Name </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {})}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-control mx-1 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">email </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {})}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex">
                  <div className="form-control mx-1 w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password </span>
                    </label>
                    <div className="">
                      <input
                        type={changePassword ? "password" : "text"}
                        {...register("password", {})}
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.password && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                      <span
                        className="flex items-center mx-2"
                        onClick={() => {
                          setChangePassword(changeIcon);
                        }}
                      >
                        {changeIcon ? (
                          <p className="flex group cursor-pointer">
                            <span className="mr-2 group-hover:underline">
                              Hidden Password
                            </span>
                            <BsEyeSlashFill className="mt-1" />
                          </p>
                        ) : (
                          <p className="flex group cursor-pointer">
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

                <div className="form-control mx-1 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    {...register("img", {
                      required: "Photo is Required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.img && (
                    <p className="text-red-500">{errors.img.message}</p>
                  )}
                </div>

                <input
                  className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white w-full mt-4"
                  value="Register"
                  type="submit"
                />
              </form>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
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
