import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Molki from "./pages/Molki";
import HomePage from "./pages/HomePage/HomePage";
import Profil from "./pages/Profil/Profil";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Category from "./pages/Admin/Category/Category.jsx";
import AddCategory from "./pages/Admin/Category/AddCategory.jsx";
import EditCategory from "./pages/Admin/Category/EditCategory.jsx";

//lazy loading

// @ts-ignore



export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: '/profil',
                element: <Profil/>
            },
            {
                path: '/molki',
                element: <Molki/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: '/admin/category',
                element: <Category />
            },
            {
                path: '/admin/category/add',
                element: <AddCategory/>
            },

            {
                path: '/admin/category/edit/:id',
                element: <EditCategory />
            },


            // {
            //     path: '/users',
            //     element: <AdminUsers/>
            // }
        ]
    }




    // { il n'aura pas le header et le footer
    //     path: '/molki',
    //     element: <Molki />
    // }
]);