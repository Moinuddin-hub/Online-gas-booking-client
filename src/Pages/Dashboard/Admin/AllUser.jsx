import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/user/admin/${id}`).then((res) => {
      // console.log(res);
      refetch();
    });
  };

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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
    <>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users:{users.length}</h2>
      </div>
      <div className="overflow-x-auto bg-gray-500 text-white ">
        <table className="table  w-96 md:w-full border-2">
          {/* head */}
          <thead>
            <tr className="text-xl font-bold text-white text-center">
              <th>#</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>email</th>
              <th>Role</th>
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
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                          className="text-center"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-md md:text-xl font-bold border-2 text-center">
                  {user.name}
                </td>
                <td className="text-lg font-bold border-2 text-center">
                  {user.email}
                </td>
                <th>
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn text-2xl text-red-400 ml-8"
                    >
                      <FaUsers />
                    </button>
                  )}
                </th>
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
    </>
  );
};

export default AllUser;
