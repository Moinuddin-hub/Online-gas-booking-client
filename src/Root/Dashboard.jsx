import { NavLink, Outlet } from "react-router-dom";
// import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart,FaHome } from "react-icons/fa";
import { IoPersonAddSharp,IoBagAddSharp, } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
const Dashboard = () => {
  const [open,setOpen]=useState(false)
  return (
    <div>
         <div className="md:hidden flex justify-end" onClick={()=>setOpen(!open)}>
          {
            open===true? <IoMdMenu className='text-2xl'/>:<IoClose className="text-2xl" />
          }
       
        </div>
    <div className="flex">
      {/* dashboard sidebar */}
      <div className={`w-64 min-h-screen -mt-6 md:mt-0 z-10 absolute md:static duration-1000
      ${open===true? "left-0": "left-[-100%]"}
      bg-[#C2DFFF]`}>
        <ul className="menu p-4"> 
          <li className="text-md font-bold">
            <NavLink to="/dashboard/user">
              <IoPersonAddSharp />
              User Home
            </NavLink>
          </li>
          <li className="text-md font-bold">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> My cart
            </NavLink>
          </li>
          <li className="text-md font-bold">
          
            <NavLink to="/dashboard/addProduct">
              <IoBagAddSharp /> Add product
            </NavLink>
          </li>
          <li className="text-md font-bold">
            <NavLink to="/">
            <FaHome/> Back to Home
            </NavLink>
          </li>
          
  
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
