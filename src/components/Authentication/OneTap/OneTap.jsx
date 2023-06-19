import { useGoogleOneTapLogin } from "react-google-one-tap-login";

const OneTap = () => {
  useGoogleOneTapLogin({
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: (res) => {
      console.log("res", res);
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

  return <div></div>;
};

export default OneTap;
