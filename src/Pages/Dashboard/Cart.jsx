import React from "react";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  return (
    <div className=" bg-slate-100 shadow-2xl h-auto font-sans">
      <div className="flex justify-around py-4">
        <h2 className="text-3xl font-bold">Total Order:{cart.length} </h2>
        <h2 className="text-3xl font-bold">Total Order:{total} </h2>
        <button className="btn btn-success">Pay</button>
      </div>
      <div className="overflow-x-auto ">
  <table className="table border-2 w-96 md:w-full">
    {/* head */}
    <thead>
      <tr className=" font-bold border-2">
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>#</th>
        <th>IMAGE</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody className="border-2 ">
      {/* row 1 */}
      {
        cart.map((item,index) => (

        <tr key={item._id} className="border-2">
        <th>
           {index+1}
        </th>
        <td className="border-2">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={item.img} alt="Avatar Tailwind CSS Component" className="" />
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </td>
        <td className="text-md md:text-xl font-bold">
          {item.title}
        </td>
        <td className="text-xl font-bold">{item.price}</td>
        <th>
          <button className="btn btn-primary">Delete</button>
        </th>
      </tr>
        ))
      }
   
    </tbody>

  </table>
</div>
    </div>
  );
};

export default Cart;
