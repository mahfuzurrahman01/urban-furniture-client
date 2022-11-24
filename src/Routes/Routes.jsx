import Dashboard from "../Dashboard/Dashboard";
import Main from "../Layouts/Main";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import Error from "../Shared/Error";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    }
])