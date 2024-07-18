import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Profil from "./pages/Profil/Profil";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Order from "./pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
    
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
