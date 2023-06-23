import AuthProvider from "../../../components/Authentication/AuthProvider/AuthProvider";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      <LoginForm />
      <AuthProvider />
    </div>
  );
};

export default Login;
