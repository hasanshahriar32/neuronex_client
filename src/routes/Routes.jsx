import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRoute from "../components/Authentication/AdminRoute/AdminRoute";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import Docs from "../components/Docs/Docs";
import FAQ from "../components/Faq/Faq";
import Team from "../components/Team/Team";
import AdminLayout from "../layout/Admin/Admin";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import ProfileLayout from "../layout/Profile/Profile";
import Admin from "../pages/Admin/Admin";
import ManageAdmins from "../pages/Admin/ManageAdmins";
import ManageGigs from "../pages/Admin/ManageGigs";
import ManageUsers from "../pages/Admin/ManageUsers";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Compose from "../pages/Dashboard/Compose/Compose";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ProfileEdit from "../pages/profile/ProfileEdit";
import TransactionHistory from "../pages/profile/ProfileNavigation/TransactionHistory";
import ProfilePage from "../pages/profile/ProfileSection";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                { path: "/", element: <Home></Home> },
                { path: "/home", element: <Home></Home> },
                { path: "/team", element: <Team></Team> },
                { path: "/faq", element: <FAQ></FAQ> },
                { path: "/docs", element: <Docs></Docs> },
            ],
        },
        {
            path: "/profile",
            element: (
                <PrivateRoute>
                    <ProfileLayout></ProfileLayout>
                </PrivateRoute>
            ),
            children: [
                { path: "/profile/", element: <ProfilePage></ProfilePage> },
                { path: "/profile/edit", element: <ProfileEdit></ProfileEdit> },
                {
                    path: "/profile/my-transaction/history",
                    element: <TransactionHistory />,
                },
            ],
        },
        {
            path: "/admin",
            element: (
                <AdminRoute>
                    <AdminLayout />
                </AdminRoute>
            ),
            children: [
                { path: "/admin/", element: <Admin /> },
                { path: "/admin/all-users", element: <ManageUsers /> },
                { path: "/admin/all-admins", element: <ManageAdmins /> },
                { path: "/admin/manage-price", element: <ManageGigs /> },
            ],
        },
        {
            path: "/ai",
            element: (
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            ),
            children: [
                {
                    path: "/ai/",
                    element: <Compose></Compose>,
                },

                {
                    path: "/ai/compose",
                    element: <Compose></Compose>,
                },
            ],
        },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "*", element: <ErrorPage /> },
    ]);
    return (
        <div className="bg-page-gradient pt-navigation-height">
            {" "}
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;
