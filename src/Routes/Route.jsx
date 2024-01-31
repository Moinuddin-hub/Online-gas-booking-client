import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Products/Product";
    
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
          path:'/home',
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
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/product',
          element:<Product/>
        }
      ]
    },
  ]);
  export default router;