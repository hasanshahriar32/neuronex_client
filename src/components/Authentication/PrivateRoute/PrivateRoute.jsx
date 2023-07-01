import { useContext } from "react";
// import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="m-6">
        <LoadingAnimation></LoadingAnimation>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
