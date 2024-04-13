import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Payment = () => {
//   const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // axiosPublic.post("/order", data)
    //   .then((res) => {
    //     console.log(res);
    //   });
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
     .then((res)=>res.json())
    .then((result) => {
        window.location.replace(result.url)
      console.log(result);
    })
  };
  return (
    <>
      <div className="w-full   py-4 bg-slate-400">
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <div className="  w-80 mx-auto ">
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
                <span className="label-text">Address</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("address", { required: true })}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("phone", { required: true })}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">currency</span>
              </div>

              <select
                {...register("currency")}
                className="input input-bordered w-full max-w-xs"
              >
                <option value="BDT">BDT</option>
                <option value="USA">USA</option>
                <option value="RS">RS</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Total Amount</span>
              </div>
              <input
                type="Number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("price", { required: true })}
              />
            </label>
            <button className="btn btn-outline   mt-4 ">pay now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
