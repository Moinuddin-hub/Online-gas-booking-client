import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Products/Product";
// import Details from "../Pages/Products/Details";
    
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
          element:<Product/>
        }
      ]
    },
  ]);
  export default router;