import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Products/Product";
import Dashboard from "../Root/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import User from "../Pages/Dashboard/User";

import AllUser from "../Pages/Dashboard/Admin/AllUser";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddProducts from "../Pages/Dashboard/Admin/Addproducts";
import ManageItem from "../Pages/Dashboard/Admin/ManageItem";
import Update from "../Pages/Dashboard/Admin/Update";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentFail from "../Pages/Dashboard/Payment/PaymentFail";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";

import AboutPage from "../Pages/AboutPage/AboutPage";

import ManageBooking from "../Pages/Dashboard/Admin/ManageBooking/ManageBooking";
// import AboutPage from "../Pages/AboutPage/AboutPage";
// import AdminRoute from "./AdminRoute";
// import Details from "../Pages/Products/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/details/:id",
      //   loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      //   element:<Details></Details>
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aboutPage",
        element:<AboutPage/>

      },
      {
        path: "/product",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
        
      },
      {
        path:'payment/success/:tranId',
        element:<PaymentSuccess/>

      },
      {
        path:'payment/fail/:tranId',
        element:<PaymentFail/>
      }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
       path:'adminHome',
       element:<AdminHome/>
      },
      {
        path: "addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "manageItem",
        element: <ManageItem />,
      },
      {
        path:'booking',
        loader:()=>fetch('http://localhost:5000/order'),
        element:<ManageBooking/>

      },
      {
        path: "update/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`), 
        element: <Update></Update>,
      },
      {
        path: "allUser",
        element: <AllUser />,
      },
      {
        path: "payment",
        element:<Payment/>
      }
    ],
  },
]);
export default router;
