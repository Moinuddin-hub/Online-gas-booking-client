import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

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
    </>
  );
};

export default Root;
