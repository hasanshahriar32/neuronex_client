import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../components/Authentication/UserContext/UserContext";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AuthProvider from "../../../../components/Authentication/AuthProvider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../../../configs/firebase.config";

const auth = getAuth(app);
const LoginForm = () => {
  const { signin } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

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
            localStorage.setItem("token", result.token);
          })

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

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content ">
          <div className="card border-primary bg-page-gradient border-dashed shadow-transparent/90 shadow-primary shadow-lg border flex-shrink-0 shadow-2xl">
            <div className="card-body">
              <h3 className="font-serif font-semibold text-center text-3xl text-secondary">
                Login Now
              </h3>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-secondary">
                      Email
                    </span>
                  </label>
                  <input
                    onBlur={handleEmailForResetPassword}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-secondary border-secondary focus:outline-none border-dotted  bg-ghost  text-lg py-5"
                  />
                </div>

                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text text-xl text-secondary">
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
                  <div className="mt-5 flex items-center justify-between">
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

                <div className="form-control mt-6">
                  <button className="btn text-xl btn-lg btn-secondary w-1/2 mx-auto ">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider text-md mt-6 mb-4">OR</div>
              <AuthProvider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
