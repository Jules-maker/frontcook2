import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Molki from "./pages/Molki";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        index: true,
    },
    {
        path: '/molki',
        element: <Molki />
    }
]);