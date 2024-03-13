import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
 const user=useLoaderData();
 console.log(user);
  // const { img, title, price,} = product;
  return (
    <>
      <div>
        {/* <div className="max-w-xs p-6 font-serif  h-58 rounded-md shadow-2xl dark:bg-gray-900 dark:text-gray-50">
          <img
            src={img}
            alt=""
            className="object-cover bg-green-300 object-center w-72 rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold tracki">{title}</h2>
              <button className="text-xl font-semibold tracki">{price}</button>
            </div>
          </div>


        </div> */}
        <h2>Hello</h2>
      </div>
    </>
  );
};

export default Details;
