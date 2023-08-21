import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

const AuthProvider = () => {
  const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handlegooglelogin = () => {
    handleGoogleSignIn()
      .then((res) => {
        // console.log(res.user);
        const name = res.user?.displayName;
        const email = res.user?.email;
        const uid = res.user?.uid;
        const pic = res.user?.photoURL;
        const verified = res.user?.emailVerified;
        const userAbout = "member";
        saveUserToDb(name, pic, email, uid, userAbout, verified);
        const notify = () =>
          toast.success("Login Successful", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        // navigate(from, { replace: true });

        notify();
      })
      .catch((err) => {
        const notify = () => toast.error(err.message);
        notify();
      });
  };
  const handlegithublogin = () => {
    handleGithubSignIn()
      .then((res) => {
        // console.log(res.user);
        const name = res.user?.displayName;
        const email = res.user?.email;
        const pic = res.user?.photoURL;
        const verified = res.user?.emailVerified;
        const uid = res.user?.uid;
        const userAbout = "member";
        saveUserToDb(name, pic, email, uid, userAbout, verified);
        const notify = () => toast.success("Login Successful");
        // navigate(from, { replace: true });
        notify();
      })
      .catch((err) => {
        const notify = () => toast.error(err.message);
        notify();
      });
  };
  const saveUserToDb = (name, pic, email, uid, userAbout, verified) => {
    fetch("https://ai-chatbot-server.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, pic, email, uid, userAbout, verified }),
    })
      .then((res) => res.json())
      .then((data) => {
        // localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user_id", data?._id);
        navigate(from, { replace: true });
      })
      .catch((err) => {
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
        console.log(err);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="">
        <button
          onClick={handlegooglelogin}
          className="w-full tracking-wide btn-neutral  btn h-10 btn-lg my-1"
        >
          login with google
        </button>
        <button
          onClick={handlegithublogin}
          className="w-full tracking-wide btn-neutral  btn h-10 btn-lg my-1"
        >
          login with github
        </button>
      </div>
    </div>
  );
};

export default AuthProvider;
