import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
// import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
    
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
    
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    },
  ]);
  export default router;