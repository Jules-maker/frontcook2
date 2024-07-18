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
import { AuthProvider } from "./components/Auth/AuthContext"; // Assurez-vous que ce chemin est correct

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProtectedRoute element={<HomePage />} />, // Protéger la page d'accueil
      },
      {
        path: "/profil",
        element: <ProtectedRoute element={<Profil />} />, // Protéger la page de profil
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order",
        element: <ProtectedRoute element={<Order />} />, // Protéger la page de commande
      },
      {
        path: "/admin",
        element: <ProtectedRoute element={<Admin />} />, // Protéger les pages admin
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          // Ajoutez d'autres routes pour les pages admin si nécessaire
        ],
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
