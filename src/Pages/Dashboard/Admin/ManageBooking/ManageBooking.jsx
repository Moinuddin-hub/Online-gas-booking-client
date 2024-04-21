import React from "react";
import { useLoaderData } from "react-router-dom";
import Booking from "./Booking";
import Header from "../../../../Shared/Header";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageBooking = () => {
  const loader = useLoaderData();
  console.log(loader);
  return (
    <div>
      <div className="">
        <Header title="ManageBooking"/>
      </div>
      {loader?.map((booking, index) => (
        <div key={index} className="">
          <Booking booking={booking}></Booking>
        </div>
      ))}
    </div>
  );
};

export default ManageBooking;
