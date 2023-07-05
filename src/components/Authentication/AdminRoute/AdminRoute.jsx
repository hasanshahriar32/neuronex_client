import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import LoadingAnimation from "../../LoadingAnimation/LoadingAnimation";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [admin, loadingAdmin] = useAdmin(localStorage.getItem("user_id"));
  //   const [isAdminLoading, setIsAdminLoading] = useState(true);
  const location = useLocation();

  if (loading || loadingAdmin) {
    return (
      <div className="m-6">
        <LoadingAnimation></LoadingAnimation>
      </div>
    );
  }
  if (user && user.uid && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
export default AdminRoute;
