import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { FaBook, FaCarSide, FaUsers } from "react-icons/fa";

import BarCharts from "./BarChart";

import PieCharts from "./PieChart";


const AdminHome = () => {
  const { user } = useAuth();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/admin-stats")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

// custom shape for bar chart

  return (
    <>
      <h2 className="text-3xl">
        <span>Hi,Welcome</span>
        {user?.displayName ? user.displayName : "Back to Home"}
      </h2>
      <div className="flex gap-8 mt-4">
        <div className=" bg-gray-500 flex gap-8 items-center p-8 w-60 h-24 rounded">
          <div className=" text-secondary">
            <FaUsers className="text-4xl" />
          </div>
          <div className="text-white">
          <h2 className="text-2xl font-bold">Users</h2>
          <div className="stat-value">{data.users}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        </div>
        <div className=" bg-red-200 flex gap-8 items-center p-8 w-60 h-24 rounded">
          <div className=" text-secondary">
          <FaBook className="text-4xl" />
          </div>
          <div className="">
          <h2 className="text-2xl font-bold">Products</h2>
          <div className="stat-value">{data.products}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        </div>
        <div className=" bg-red-300 flex gap-8 items-center p-8 w-60 h-24 rounded">
          <div className=" text-secondary">
          <FaCarSide className="text-4xl" />
          </div>
          <div className="">
          <h2 className="text-2xl font-bold">Orders</h2>
          <div className="stat-value">{data.orders}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        </div>
  
{/* 
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-4xl" />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{data.products}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <FaCarSide className="text-4xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{data.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div> */}
      </div>
      <div className="flex">
       <div className="w-1/2">
        <BarCharts/>
       </div>
       <div className="w-1/2">
          <PieCharts/>
       </div>
      </div>
    </>
  );
};

export default AdminHome;
