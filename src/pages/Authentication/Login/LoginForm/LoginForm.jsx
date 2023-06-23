import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../components/Authentication/UserContext/UserContext";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import AuthProvider from "../../../../components/Authentication/AuthProvider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../../../configs/firebase.config";
import useToken from "../../../../hooks/useToken";

const auth = getAuth(app);
const LoginForm = () => {
  const { signin } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [changePassword, setChangePassword] = useState(true);
  const changeIcon = changePassword === true ? false : true;
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
        toast.success("Successfully Login!");
        localStorage.setItem('userAccessToken', user?.accessToken);
        navigate('/')
      })

      .catch((error) => {
        console.log(error);
        toast.error("Something is wrong! Please Check and Try again");
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
      toast.error("Please enter your email address");
    } else {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          toast.info("password reset sent");
        })
        .catch((er) => {
          toast.error(er.message);
          console.error(er);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content ">
          <div className="card bg-white border-b-4 border-b-rose-400 flex-shrink-0 lg:w-[700px]  shadow-2xl">
            <div className="card-body">
              <h3 className="font-serif text-center text-2xl text-background">
                login Now
              </h3>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-background">
                      Email
                    </span>
                  </label>
                  <input
                    onBlur={handleEmailForResetPassword}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-grey border-0 text-white text-lg py-7"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-background">
                      Password
                    </span>
                  </label>
                  <div className="flex text-xl bg-grey border-0 rounded-lg">
                    <input
                      type={changePassword ? "password" : "text"}
                      name="password"
                      placeholder="password"
                      className="input bg-grey border-0 text-white w-full text-lg py-7 input-bordered"
                    />
                    <span
                      className=" flex items-center mx-2 text-background cursor-pointer"
                      onClick={() => {
                        setChangePassword(changeIcon);
                      }}
                    >
                      {changeIcon ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </span>
                  </div>
                  <label className="label">
                    <p
                      onClick={handleForgetPassword}
                      className="label-text-alt text-background text-xl link link-hover hover:underline text-start"
                    >
                      Forgot password?
                    </p>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn text-xl h-10 text-white">Login</button>
                </div>
              </form>

              <label className="label">
                <p className="label-text-alt text-background link text-xl link-hover hover:underline text-start">
                  <Link to="/register">create a new account</Link>
                </p>
              </label>

              <AuthProvider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
