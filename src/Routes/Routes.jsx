import Dashboard from "../Dashboard/Dashboard";
import Main from "../Layouts/Main";
import About from "../Pages/About";
import AddProducts from "../Pages/AddProducts";
import Allbuyers from "../Pages/Allbuyers";
import AllSellers from "../Pages/AllSellers";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyOrders from "../Pages/MyOrders";
import MyProducts from "../Pages/MyProducts";
import MyWishlist from "../Pages/MyWishlist";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import AdminPrivate from "../Private/AdminPrivate";
import PrivateRoute from "../Private/PrivateRoute";
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
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allSellers',
                element: <AdminPrivate><AllSellers></AllSellers></AdminPrivate>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminPrivate><Allbuyers></Allbuyers></AdminPrivate>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myWishlist',
                element: <MyWishlist></MyWishlist>
            }
        ]
    },
])