import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const ProfileNavigation = () => {
    const [admin] = useAdmin(localStorage.getItem("user_id"));
    return (
        <div>
            <nav aria-label="Main Nav" className="flex flex-col">
                <NavLink
                    to="/"
                    title="Home"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-secondary px-4 mb-3 py-3 text-white text-md rounded-md font-medium text-center"
                            : "bg-secondary px-4 mb-3 py-3 text-white text-md rounded-md font-medium text-center"
                    }
                >
                    Neuro Nex
                </NavLink>

                <NavLink
                    to="/profile/"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>

                    <span className="text-sm font-medium"> Account </span>
                </NavLink>

                <NavLink
                    to="/profile/edit"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span className="text-sm font-medium"> Edit Profile </span>
                </NavLink>
                {/* 
                <NavLink
                    to="/admin/all-users"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>

                    <span className="text-sm font-medium"> All Users </span>
                </NavLink> */}
                {/* <NavLink
                    to="/settings/notification"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                    </svg>

                    <span className="text-sm font-medium"> Notifications </span>
                </NavLink>
                <NavLink
                    to="/settings/business_info"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>

                    <span className="text-sm font-medium"> Business Info </span>
                </NavLink> */}
                <NavLink
                    to="/profile/my-transaction/history"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                    </svg>
                    <span className="text-sm font-medium">Make Payment</span>
                </NavLink>

                <NavLink to='/ai'
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary text-white bg-primary  px-4 py-3 "
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-secondary hover:border-gray-100 hover:bg-gray-50 hover:text-secondary"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>

                    <span className="text-sm font-medium">Ai Services</span>
                </NavLink>
                {admin && <NavLink
                    to="/admin/"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center gap-2 border-l-[3px] border-secondary bg-primary px-4 py-3 text-primary-content"
                            : "flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    <span className="text-sm ">Admin Dashboard </span>
                </NavLink>}

            </nav>
        </div>
    );
};

export default ProfileNavigation;
