import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Compose from "../pages/Dashboard/Compose/Compose";
import UserProfile from "../pages/Dashboard/Profile/userProfile";
import Home from "../pages/Home/Home";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                { path: "/", element: <Home></Home> },

                { path: "/login", element: <Login></Login> },
                { path: "/register", element: <Register></Register> },
            ],
        },
        {
            path: "/dashboard",
            element: (
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            ),
            children: [
                {
                    path: "/dashboard/",
                    element: <UserProfile></UserProfile>,
                },
                {
                    path: "/dashboard/profile",
                    element: <UserProfile></UserProfile>,
                },

                {
                    path: "/dashboard/compose",
                    element: <Compose></Compose>,
                },
            ],
        },

    ]);
    return (
        <div className="bg-page-gradient pt-navigation-height">
            {" "}
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;
