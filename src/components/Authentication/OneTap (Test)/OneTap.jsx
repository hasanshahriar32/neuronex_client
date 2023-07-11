import { useGoogleOneTapLogin } from "react-google-one-tap-login";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const OneTap = () => {
  // const authenticateWithFirebase = async (idToken, accessToken) => {
  //   const credential = firebase.auth.GoogleAuthProvider.credential(
  //     idToken,
  //     accessToken
  //   );

  //   try {
  //     const userCredential = await firebase
  //       .auth()
  //       .signInWithCredential(credential);
  //     const user = userCredential.user;
  //     const uid = user.uid;

  //     console.log(uid); // Output: Firebase-generated UID for the authenticated user
  //   } catch (error) {
  //     console.log("Error signing in with Firebase:", error);
  //   }
  // };
  useGoogleOneTapLogin({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (res) => {
      // authenticateWithFirebase(res?., googleOneTapAccessToken);
      const name = res?.given_name;
      const email = res?.email;
      const pic = res?.picture;
      const verified = res?.email_verified;
      const uid = res?.kid;
      const userAbout = "member";
      saveUserToDb(name, pic, email, uid, userAbout, verified);
    },
    googleAccountConfigs: {
      client_id:
        "179292359244-p33587fda97a3fgp27s66k06q6a1gjun.apps.googleusercontent.com",
      auto_select: true,
    },
  });
  const saveUserToDb = (name, pic, email, uid, userAbout, verified) => {
    fetch("https://neuronex-server.vercel.app/user", {
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

  return <div></div>;
};

export default OneTap;
