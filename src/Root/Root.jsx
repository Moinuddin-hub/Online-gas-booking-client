import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
// import toast, { Toaster } from 'react-hot-toast';
const Root = () => {
  const location = useLocation();
  // console.log(location);
  const noHeader =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");
  return (
    <>
      <div className=" font-sans">
        {noHeader || <Navbar />}
        <Outlet />
      
        {noHeader || <Footer />}
     
      </div>
      <Toaster/>
    </>
  );
};

export default Root;
