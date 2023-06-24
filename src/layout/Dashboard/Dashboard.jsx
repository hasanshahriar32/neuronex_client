import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import AiSetting from "../../components/FormComposed/AiSetting/AiSetting";
import AiQuery2 from "../../components/FormComposed/AiQuery/AiQuery2";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <Header /> */}
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary fixed top-0 right-0 drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <AiQuery2 />

        <Outlet />
      </div>
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-[500px] h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
