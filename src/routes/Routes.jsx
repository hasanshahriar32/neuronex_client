import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Compose from "../pages/Dashboard/Compose/Compose";
import Home from "../pages/Home/Home";
import ProfileLayout from "../layout/Profile/Profile";
import Profile from "../components/profile/Profile";
import ProfileEdit from "../layout/Profile/ProfileEdit";
import AllUsers from "../layout/Dashboard/AllUsers/AllUsers";

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
      path: "/profile",
      element: (
        <PrivateRoute>
          {" "}
          <ProfileLayout></ProfileLayout>
        </PrivateRoute>
      ),
      children: [
        { path: "/profile/", element: <Profile></Profile> },
        { path: "/profile/edit", element: <ProfileEdit></ProfileEdit> },
        { path: "/profile/all-users", element: <AllUsers /> },
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
          element: <Compose></Compose>,
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
