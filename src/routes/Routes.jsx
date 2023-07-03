import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import Profile from "../components/profile/Profile";
import AllUsers from "../layout/Dashboard/AllUsers/AllUsers";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import ProfileLayout from "../layout/Profile/Profile";
import ProfileEdit from "../layout/Profile/ProfileEdit";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Compose from "../pages/Dashboard/Compose/Compose";
import Home from "../pages/Home/Home";
import AdminRoute from "../components/Authentication/AdminRoute/AdminRoute";
import AdminLayout from "../layout/Admin/AdminLayout";
import AllUsers from "../layout/Admin/AllUsers/AllUsers";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{ path: "/", element: <Home></Home> }],
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
      ],
    },
    {
      path: "/admin",
      element: (
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      ),
      children: [{ path: "/admin/all-users", element: <AllUsers /> }],
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
  ]);
  return (
    <div className="bg-page-gradient pt-navigation-height">
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
