import React from "react";

import Header from "../../../../Shared/Header";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order");

      return res.data;
    },
  });
  console.log(users);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/order/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="">
        <Header title="ManageBooking" />
      </div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All order</h2>
        <h2 className="text-3xl">Total orders:{users.length}</h2>
      </div>
      <div className="overflow-x-auto bg-gray-500 text-white ">
        <table className="table  w-96 md:w-full border-2">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold text-white text-center">
              <th>#</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>Address</th>
              <th>Phone</th>
              <th>price</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody className="  ">
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="text-center">
                <th>{index + 1}</th>
                <td className="border-2 text-center">
                  <div className="flex items-center gap-3">
                    <div className="avatar text-center">
                      <div className="mask mask-squircle w-16 h-16 ">
                        <img
                          src={user?.image}
                          alt="Avatar Tailwind CSS Component"
                          className="text-center"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-md md:text-xl font-bold border-2 text-center">
                  {user?.order?.name}
                </td>
                <td className="text-lg font-bold border-2 text-center">
                  {user?.order?.address}
                </td>
                <td className="text-md md:text-xl font-bold border-2 text-center">
                  {user?.order?.phone}
                </td>
            
               <td className="text-md md:text-xl font-bold border-2 text-center">
                  {user?.order?.price}
                </td>
             
                <th className="text-xl font-bold border-2 text-center">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn text-2xl text-red-400 ml-8"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
