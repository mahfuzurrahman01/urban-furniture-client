import ProductDetails from "../Category/ProductDetails";
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
import Payment from "../Payment/Payment";
import AdminPrivate from "../Private/AdminPrivate";
import BuyerPrivate from "../Private/BuyerPrivate";
import PrivateRoute from "../Private/PrivateRoute";
import SellerPrivate from "../Private/SellerPrivate";
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
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://urban-eta.vercel.app/products/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                }),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
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
                element: <SellerPrivate><MyProducts></MyProducts></SellerPrivate>
            },
            {
                path: '/dashboard/addProducts',
                element: <SellerPrivate><AddProducts></AddProducts></SellerPrivate>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerPrivate><MyOrders></MyOrders></BuyerPrivate>
            },
            {
                path: '/dashboard/myWishlist',
                element: <BuyerPrivate><MyWishlist></MyWishlist></BuyerPrivate>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`https://urban-eta.vercel.app/product/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    },
])