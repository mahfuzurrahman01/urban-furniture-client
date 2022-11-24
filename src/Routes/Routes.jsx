import Main from "../Layouts/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
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
            }

        ]
    }
])