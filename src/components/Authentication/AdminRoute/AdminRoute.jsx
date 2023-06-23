import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";
import useAdmin from "../../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [admin, loadingAdmin] = useAdmin(user?.uid);
  //   const [isAdminLoading, setIsAdminLoading] = useState(true);
  const location = useLocation();

  if (loading || loadingAdmin) {
    return (
      <div className="m-6">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }
  if (user && user.uid && admin) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
};
export default AdminRoute;
