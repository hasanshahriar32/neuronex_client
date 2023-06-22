import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Main from "../layout/Main/Main";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Home from "../pages/Home/Home";
import Compose from "../pages/Compose/Compose";
import PrivateRoute from "../components/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/compose",
          element: (
            <PrivateRoute>
              <Compose></Compose>
            </PrivateRoute>
          ),
        },
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
    },
  ]);

  return (
    <div className="bg-page-gradient pt-navigation-height">
      <RouterProvider router={router}>
        <AnimatePresence mode="wait">
          <Outlet>
            {({ route }) => (
              <motion.div
                key={route.path}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {route.element}
              </motion.div>
            )}
          </Outlet>
        </AnimatePresence>
      </RouterProvider>
    </div>
  );
};

export default Routes;
