import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AiContext } from "../../components/FormComposed/FormContext/FormContext";
import DrawerToggle from "./DrawerToggle";

const Dashboard = () => {
  const { setAiConfig, drawerOpen, setDrawerOpen } = useContext(AiContext);
  const navigate = useNavigate();
  const drawerRef = useRef(null);
  const [drawerCheckboxChecked, setDrawerCheckboxChecked] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !event.target.classList.contains("drawer-toggle")
      ) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setDrawerOpen]);

  useEffect(() => {
    const modal = document.getElementById("my-drawer-2");
    modal.checked = drawerOpen;
    setDrawerCheckboxChecked(modal.checked);
  }, [drawerOpen]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerCheckboxChecked);
    setDrawerCheckboxChecked(!drawerCheckboxChecked);
  };

  return (
    <div className="drawer lg:drawer-open -mt-12" ref={drawerRef}>
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerCheckboxChecked}
        onChange={handleDrawerToggle}
      />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <div className="">
          <Outlet />
        </div>
        <ToastContainer />
      </div>
      <div className="drawer-side  z-30">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-[250px] gap-3 lg:w-[300px] h-full bg-base-200 text-lg text-base-content">
          {/* Sidebar content here */}
          <DrawerToggle />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
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
