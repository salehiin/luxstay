import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Estates from "../pages/Estates/Estates";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import Agents from "../pages/Agents/Agents";
import AuthProvider from "../providers/AuthProvider";
import ErrorPage from "../pages/ErrorPage/ErrorPage";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estates.json')
            },
            {
                path: '/estates/:id/',
                element: <PrivateRoute><Estates></Estates></PrivateRoute>,
                loader: () => fetch('/estates.json')
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/agents',
                element: <PrivateRoute><Agents></Agents></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])



export default router;


// V-4, 03:00 