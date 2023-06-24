import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../UserContext/UserContext";

const AuthProvider = () => {
  const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
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
        notify();
      })
      .catch((err) => {
        console.log(err);
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
        notify();
      })
      .catch((err) => {
        console.log(err);
        const notify = () => toast.error(err.message);
        notify();
      });
  };
  const saveUserToDb = (name, pic, email, uid, userAbout, verified) => {
    fetch("https://neuronex-server-test.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, pic, email, uid, userAbout, verified }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        // localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(data?.token));
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="">
        <button
          onClick={handlegooglelogin}
          className="w-full btn-neutral text-xl btn h-10 btn-lg my-2"
        >
          login with google
        </button>
        <button
          onClick={handlegithublogin}
          className="w-full btn-neutral text-xl btn h-10 btn-lg my-2"
        >
          login with github
        </button>
      </div>
    </div>
  );
};

export default AuthProvider;
