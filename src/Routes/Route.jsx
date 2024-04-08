import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Products/Product";
import Dashboard from "../Root/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import User from "../Pages/Dashboard/User";
// import AddProduct from "../Pages/Dashboard/AddProduct";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddProducts from "../Pages/Dashboard/Admin/Addproducts";
// import Details from "../Pages/Products/Details";
    
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        // {
        //   path: "/details/:id",
        //   loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        //   element:<Details></Details>
        // },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/product',
          element:<PrivateRoute><Product/></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'user',
          element:<User/>
        },
        {
          path:'addProduct',
          element:<AddProducts/>
        },
        {
          path:'allUser',
          element:<AllUser/>,
       
        }
      ]
    }
  ]);
  export default router;