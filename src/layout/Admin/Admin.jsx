import { Outlet } from "react-router";
import NavBarAdmin from "../../components/Header/NavBarAdmin";
import AdminNavigation from "../../pages/Admin/AdminNavigation/AdminNavigation";

const AdminLayout = () => {
    return (
        <div className="drawer lg:drawer-open absolute top-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <NavBarAdmin />
                <Outlet></Outlet>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <AdminNavigation />
                </ul>
            </div>
        </div>
    );
};

export default AdminLayout;
