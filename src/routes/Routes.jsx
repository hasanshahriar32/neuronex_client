import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main/Main";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Home from "../pages/Home/Home";
import Compose from "../pages/Dashboard/Compose/Compose";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";

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
