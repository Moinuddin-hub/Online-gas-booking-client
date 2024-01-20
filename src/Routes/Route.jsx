import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
    
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
        }
      ]
    },
  ]);
  export default router;