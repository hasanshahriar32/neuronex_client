import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../../Contexts/UserContext/UserContext";
import AuthProvider from "../../../../components/Authentication/AuthProvider/AuthProvider";
import app from "../../../../configs/firebase.config";

const auth = getAuth(app);
const LoginForm = () => {
  const { signin } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //! login By User Email
    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Login.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        const addedUser = {
          name: user.displayName,
          email: user.email,
          pic: user.photoURL,
          uid: user?.uid,
          userAbout: "user",
          verified: user?.emailVerified,
        };

        //! Save User info to the database....
        fetch("https://ai-chatbot-server.vercel.app/user", {
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
          });
      })

      .catch((error) => {
        console.log(error);
        toast.error("Something is wrong! Please Check and Try again", {
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

  const handleTestUser = () => {
    const userEmail = "paradoxtechbd@outlook.com";
    const userPassword = "neuronex";

    // Call handleLogin with the test user credentials
    handleLogin({
      preventDefault: () => {},
      target: {
        email: { value: userEmail },
        password: { value: userPassword },
      },
    });
  };

  //! handle Forget Password
  const handleEmailForResetPassword = (e) => {
    const email = e.target.value;
    setUserEmail(email);

    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      toast.error("Please enter your email address", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          toast.info("password reset sent", {
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
        .catch((er) => {
          toast.error(er.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.error(er);
        });
    }
  };

  if (user?.uid && localStorage.getItem("token")) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <ToastContainer />
      <div className="flex items-center justify-center h-[90vh]">
        <div className="max-w-xl">
          <div className="card shadow-transparent/90 shadow-primary  shadow-2xl">
            <div className="card-body">
              <h3 className="font-serif font-semibold text-center text-2xl text-secondary w-full">
                Login
              </h3>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-md text-secondary mb-1">
                      Email
                    </span>
                  </label>
                  <input
                    onBlur={handleEmailForResetPassword}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-secondary border-secondary focus:outline-none border-dotted  bg-ghost  text-md py-5"
                  />
                </div>

                <div className="form-control my-2">
                  <label className="label">
                    <span className="label-text text-md text-secondary mb-1">
                      Password
                    </span>
                  </label>
                  <div className="flex text-xl bg-ghost border border-secondary border-dotted rounded-lg">
                    <input
                      type={changePassword ? "password" : "text"}
                      name="password"
                      placeholder="password"
                      className="input focus:outline-none bg-ghost  w-full text-lg py-5"
                    />
                    <span
                      className=" flex items-center mx-2 text-secondary cursor-pointer"
                      onClick={() => {
                        setChangePassword(changeIcon);
                      }}
                    >
                      {changeIcon ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <label className="label">
                      <p
                        onClick={handleForgetPassword}
                        className="label-text-alt  text-secondary text-sm link link-hover hover:underline text-start"
                      >
                        Forgot password?
                      </p>
                    </label>
                    <label className="label">
                      <p className="label-text-alt text-secondary link text-sm link-hover hover:underline text-start">
                        <Link to="/register">create a new account</Link>
                      </p>
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6 ">
                  <button className="btn text-md  btn-secondary w-full ">
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={handleTestUser}
                className="btn mt-2 text-md  btn-primary w-full "
              >
                Test Account
              </button>
              <div className="divider text-md mt-6 ">OR</div>
              <AuthProvider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
