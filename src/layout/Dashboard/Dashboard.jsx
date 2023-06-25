import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AiContext } from "../../components/FormComposed/FormContext/FormContext";

const Dashboard = () => {
  const { setAiConfig } = useContext(AiContext);
  const navigate = useNavigate();
  return (
    <div className="drawer absolute h-screen top-0 mt-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      {/* <Header /> */}
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary fixed top-0 right-0 drawer-button "
        >
          Open drawer
        </label>
        {/* <AiQuery2 /> */}
        <ToastContainer />
        <Outlet />
      </div>
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-[250px] gap-3 lg:w-[300px] h-full bg-base-200 text-lg text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setAiConfig([]);
                navigate("/dashboard/compose");
              }}
            >
              New Session
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
