import React from "react";
import Header from "../../../Shared/Header";
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import useCart from '../../../Hooks/useCart';
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
// import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useProduct from "../../../Hooks/useProduct";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
  const [product, refetch] = useProduct();

  console.log(product);

  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${item._id}`);
        console.log(res);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <>
      <div className="">
        <Header title="manageItem"></Header>
      </div>
      <div className=" bg-slate-100 shadow-2xl font-serif h-auto font-light">
        {/* <div className="flex justify-around py-4">
        <h2 className="text-3xl font-bold">Total Order:{cart.length} </h2>
        {
          <button className="btn btn-primary hidden">cupon</button>
        }
        <h2 className="text-3xl font-bold">Total Price:{total}TK </h2>
        <button className="btn btn-success">Pay</button>
      </div> */}
        <div className="overflow-x-auto bg-gray-500 text-white ">
          <table className="table  w-96 md:w-full border-2">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold text-white text-center">
                {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
                <th>#</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="  ">
              {/* row 1 */}
              {product.map((item, index) => (
                <tr key={item._id} className="text-center">
                  <th>{index + 1}</th>
                  <td className="border-2 text-center">
                    <div className="flex items-center gap-3">
                      <div className="avatar text-center">
                        <div className="mask mask-squircle w-24 h-24 ">
                          <img
                            src={item.img}
                            alt="Avatar Tailwind CSS Component"
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td className="text-md md:text-xl font-bold border-2 text-center">
                    {item.name}
                  </td>
                  <td className="text-xl font-bold border-2 text-center">
                    {item.price}TK
                  </td>
                  <th className="text-xl font-bold border-2 text-center">
                    <Link to={`/dashboard/update/${item._id}`}>
                      <button className="btn text-2xl text-red-400 ml-8">
                        <FaEdit />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
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
    </>
  );
};

export default ManageItem;
