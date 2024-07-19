import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Profil from "./pages/Profil/Profil";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Order from "./pages/Order/Order";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { AuthProvider } from "./components/Auth/AuthContext";
import AuthLayout from "./layouts/AuthLayout"; // Import the new layout

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProtectedRoute element={<HomePage />} />, 
      },
      {
        path: "/profil",
        element: <ProtectedRoute element={<Profil />} />, 
      },
      {
        path: "/order",
        element: <ProtectedRoute element={<Order />} />, 
      },
      {
        path: "/admin",
        element: <ProtectedRoute element={<Admin />} />, 
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          // ajouter admin routes ici
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,  // Use the AuthLayout here
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <AuthLayout />,  // Use the AuthLayout here
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default AppRouter;
