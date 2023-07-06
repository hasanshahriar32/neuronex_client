import { Outlet } from "react-router";
import AdminNavigation from "../../pages/Admin/AdminNavigation/AdminNavigation";

const AdminLayout = () => {
    return (
        <div className="drawer lg:drawer-open absolute top-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center justify-center h-auto">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <AdminNavigation />
                </ul>
            </div>
        </div>
    );
};

export default AdminLayout;
