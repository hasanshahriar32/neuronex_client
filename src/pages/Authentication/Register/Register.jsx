import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/UserContext/UserContext";
// import useToken from "../../../hooks/useToken";

const Register = () => {
  const { createUser, userprofile } = useContext(AuthContext);
  // const [createdUserEmail, setCreatedUserEmail] = useState("");
  // const [token] = useToken(createdUserEmail);
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  const navigate = useNavigate();

  // if (token) {
  //   navigate("/login");
  // }

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
                  // setCreatedUserEmail(result?.email);
                  localStorage.setItem("token", result.token);
                  // navigate("/login");
                  // logOut();
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
          <div className="card border-secondary bg-page-gradient inset-0 border-2 border-dashed shadow-transparent/90 shadow-primary shadow-lg flex-shrink-0 lg:w-[700px] w-[90vw] shadow-2xl">
            <div className="card-body">
              <h3 className="font-serif font-semibold text-center text-3xl text-secondary">
                Register Here
              </h3>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="card-body"
              >
                <div className="form-control mx-1 w-full">
                  <label className="label">
                    <span className="label-text text-xl text-secondary">
                      Full Name{" "}
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {})}
                    className="input input-secondary border-secondary focus:border-dotted border-solid  bg-ghost  text-lg py-7"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-control mx-1 w-full">
                  <label className="label">
                    <span className="label-text text-xl text-secondary">
                      email{" "}
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {})}
                    className="input input-secondary border-secondary focus:border-dotted border-solid  bg-ghost  text-lg py-7"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex">
                  <div className="form-control mx-1 w-full">
                    <label className="label">
                      <span className="label-text text-xl text-secondary">
                        Password{" "}
                      </span>
                    </label>
                    <div className="">
                      <input
                        type={changePassword ? "password" : "text"}
                        {...register("password", {})}
                        className="input input-secondary border-secondary focus:border-dotted border-solid  bg-ghost w-full text-lg py-7"
                      />
                      {errors.password && (
                        <p className="label-text text-xl text-secondary">
                          {errors.password.message}
                        </p>
                      )}
                      <span
                        className="flex items-center mx-2 label-text text-xl text-secondary"
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
                    <span className="label-text text-xl text-secondary">
                      Photo
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("img", {
                      required: "Photo is Required",
                    })}
                    className="input input-secondary border-secondary focus:border-dotted border-solid  bg-ghost w-full text-xl h-12"
                  />
                  {errors.img && (
                    <p className="text-red-500">{errors.img.message}</p>
                  )}
                </div>

                <input
                  className="btn text-xl btn-lg btn-secondary w-full mt-7"
                  value="Register"
                  type="submit"
                />
              </form>

              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-secondary link text-lg link-hover hover:underline text-start"
                >
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
