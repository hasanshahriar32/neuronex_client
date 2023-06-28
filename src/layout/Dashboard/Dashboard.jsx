import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiContext } from "../../components/FormComposed/FormContext/FormContext";
import DrawerToggle from "./DrawerToggle";
import SideCard from "./Components/SideCard";
import axios from "axios";
import { AuthContext } from "../../components/Authentication/UserContext/UserContext";
const Dashboard = () => {
  const { setAiConfig, drawerOpen, setDrawerOpen } = useContext(AiContext);
  const navigate = useNavigate();
  const drawerRef = useRef(null);
  const [drawerCheckboxChecked, setDrawerCheckboxChecked] = useState(false);
  const [sesstionData, setSessionData] = useState([]);
  const { user } = useContext(AuthContext);

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

  const getSessions = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data: dataGet } = await axios.post(
        "https://neuronex-server-test.vercel.app/session/all",
        {
          page: 1,
          limit: 50,
          uid: user?.uid,
        },
        config
      );
      setSessionData(dataGet);
      console.log(dataGet);
    } catch (error) {
      console.log(error);
      toast.error({
        title: "Error Occurred!",
        description: "Failed to fetch user session data.",
        status: "error",
        duration: 4000,
        isClosable: true,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    getSessions();
  }, []);

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
        <ul className=" flex flex-col p-4 w-[250px] gap-3 lg:w-[300px] h-full bg-base-200 text-lg text-base-content">
          {/* Sidebar content here */}
          <div className="flex flex-row items-center justify-evenly">
            <DrawerToggle />
            <ul className="menu lg:menu-horizontal bg-base-200  text-lg   rounded-box lg:mb-64">
              <li>
                <details open>
                  <summary className="btn   text-md lg:btn-secondary btn-ghost ">
                    {/* <button className="btn  w-8 lg:w-full text-md lg:btn-secondary btn-ghost ">
                      <FaSort /> */}

                    <span className="flex ">Sort By</span>
                    {/* </button> */}
                  </summary>
                  <ul className="absolute  z-40">
                    <li className="bg-base-100 m-2 text-lg rounded-lg">
                      <a>View All</a>
                    </li>
                    <li className="bg-base-100 m-2 text-lg rounded-lg">
                      <a>Favorite</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="chatScroll overflow-y-scroll">
            <SideCard sesstionData={sesstionData} />
          </div>

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
