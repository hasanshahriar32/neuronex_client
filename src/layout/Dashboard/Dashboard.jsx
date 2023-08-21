import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { BsFillPlusCircleFill, BsPersonCircle } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AiContext } from "../../Contexts/FormContext/FormContext";
import { ChatContext } from "../../Contexts/SessionContext/SessionContext";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import SideCard from "./Components/SideCard";
import DrawerToggle from "./DrawerToggle";
const Dashboard = () => {
  const { setAiConfig, drawerOpen, setDrawerOpen } = useContext(AiContext);
  const { messages } = useContext(ChatContext);
  const navigate = useNavigate();
  const [refetch, setRefetch] = useState(false);
  const drawerRef = useRef(null);
  const [drawerCheckboxChecked, setDrawerCheckboxChecked] = useState(false);
  // const [sesstionData, setSessionData] = useState([]);
  const { sesstionData, setSessionData } = useContext(ChatContext);
  const [loadingSession, setLoadingSession] = useState(false);
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
    if (!sesstionData || sesstionData?.length === 0) {
      setLoadingSession(true);
    }
    // setSessionData({});
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data: dataGet } = await axios.post(
        "https://ai-chatbot-server.vercel.app/session/all",
        {
          page: 1,
          limit: 50,
          uid: user?.uid,
        },
        config
      );
      setSessionData(dataGet);
      setLoadingSession(false);
      setRefetch(false);
    } catch (error) {
      console.log(error);
      setLoadingSession(false);
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
  const getFavSessions = async () => {
    setSessionData({});
    setLoadingSession(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data: dataGet } = await axios.post(
        "https://ai-chatbot-server.vercel.app/session/favorite",
        {
          page: 1,
          limit: 50,
          uid: user?.uid,
        },
        config
      );
      setSessionData(dataGet);
      setLoadingSession(false);
    } catch (error) {
      console.log(error);
      setLoadingSession(false);
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
    console.log;
    getSessions();
  }, [setAiConfig, refetch, messages]);

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
        <ul className=" flex flex-col pt-6 w-[290px] h-full bg-base-200 text-lg text-base-content">
          {/* Sidebar content here */}
          <div className="flex lg:hidden flex-row items-center justify-evenly">
            <DrawerToggle />
            <ul className="menu lg:menu-horizontal bg-base-200  text-lg   rounded-box lg:mb-64">
              <li>
                <details>
                  <summary className="btn  w-[130px] text-md btn-success btn-outline ">
                    {/* <button className="btn  w-8 lg:w-full text-md lg:btn-secondary btn-ghost ">
                      <FaSort /> */}

                    <span className="flex ">Sort By</span>
                    {/* </button> */}
                  </summary>
                  <ul className="absolute bg-base-100 rounded-lg z-40">
                    <li
                      onClick={getSessions}
                      className="bg-base-100 m-2 text-lg rounded-lg"
                    >
                      <a>View All</a>
                    </li>
                    <li
                      onClick={getFavSessions}
                      className="bg-base-100 m-2 text-lg rounded-lg"
                    >
                      <a>Saved</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="chatScroll h-screen overflow-y-scroll">
            {loadingSession && (
              <div className="flex items-center h-full w-full text-3xl justify-center">
                <span className="loading loading-ring text-3xl h-12 w-12"></span>
              </div>
            )}
            {sesstionData?.length > 0 ? (
              <SideCard sesstionData={sesstionData} setRefetch={setRefetch} />
            ) : (
              <div className="w-full flex items-center justify-center h-full">
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ZudG96b3JxNTB2Z2xhcnhqMmU1ZGdob2R4amsxZTUweXp2ZnozYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dDBFDK1a7WMqD411R2/giphy.gif"
                  alt="blank"
                  className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
                />
              </div>
            )}
          </div>

          <li className="flex flex-row  items-center  gap-2 lg:justify-center mx-5 lg:mx-0 text-md lg:text-lg justify-end my-2 lg:my-0">
            <Link
              className="text-md btn btn-neutral shadow-sm btn-outline lg:text-lg"
              to="/"
            >
              <FaHome />
            </Link>

            <Link
              className="text-md btn btn-neutral shadow-sm btn-outline lg:text-lg"
              to="/profile"
            >
              <BsPersonCircle />
            </Link>

            <Link
              className="flex flex-row btn btn-neutral shadow-sm btn-outline items-center justify-center gap-2 text-md lg:text-lg"
              onClick={(e) => {
                e.preventDefault();
                setAiConfig([]);
                navigate("/ai/compose");
              }}
            >
              <span>
                <BsFillPlusCircleFill />
              </span>
              <span>NEW</span>
            </Link>
            <ul className="menu menu-horizontal hidden lg:block bg-base-200 text-lg rounded-box ">
              <li className="">
                <details className="relative">
                  <summary className="btn text-md btn-neutral shadow-sm btn-outline">
                    <span className="flex">Sort</span>
                  </summary>
                  <ul className="absolute right-0 bottom-full flex flex-col-reverse z-40">
                    <li
                      onClick={getSessions}
                      className="bg-base-100 m-2 text-lg rounded-lg"
                    >
                      <a>View All</a>
                    </li>
                    <li
                      onClick={getFavSessions}
                      className="bg-base-100 m-2 text-lg rounded-lg"
                    >
                      <a>Saved</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
