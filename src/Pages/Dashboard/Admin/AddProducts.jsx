import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure=useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile={image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log(res.data);
    const productItem={
      name:data.name,
      description:data.description,
      price:parseFloat(data.price),
      IssueDate:data.issueDate,
      img:res.data.data.display_url
    }
    // console.log(productItem);
    const productRes=await axiosSecure.post('/product',productItem);
    if(productRes.data.insertedId){
     toast.success('Product added successfully')
    }
  };
  return (
    <>
      <h2 className="text-center">product</h2>
      <div className="w-full   py-4 bg-slate-400">
        <form onSubmit={handleSubmit(onSubmit)} className="ml-2 md:ml-8">
          <div className="grid grid-cols-2 gap-2 mx-4 ">
            <label className="form-control w-full  max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs md:w-96"
                {...register("name", { required: true })}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("price", { required: true })}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Image</span>
              </div>
              {/* <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          /> */}
              <input
                type="file"
                className="file-input w-full max-w-xs"
                {...register("image", { required: true })}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Issue Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("issueDate", { required: true })}
              />
            </label>
          </div>
          <textarea
            className="textarea textarea-bordered w-[95%] md:w-[82%] mt-8 mx-4"
            placeholder="Bio"
            {...register("description", { required: true })}
          ></textarea><br/>
             <button className="btn btn-outline  ml-4  ">
            Add Product
          </button>
        </form>
    
      </div>
    </>
  );
};

export default AddProducts;
