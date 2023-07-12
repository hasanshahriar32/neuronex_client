import { Outlet } from "react-router";
import ProfileNav from "../../components/Header/profileNav";
import ProfileNavigation from "../../pages/profile/ProfileNavigation/ProfileNavigation";

const ProfileLayout = () => {
    return (
        <div className="drawer lg:drawer-open absolute top-0">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  items-center justify-center overflow-scroll">

                <div className="  z-20 w-full">
                    <ProfileNav />
                </div>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <ProfileNavigation></ProfileNavigation>
                </ul>
            </div>
        </div>
    );
};

export default ProfileLayout;
