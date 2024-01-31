import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";


const Product = () => {
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        // .finally(()=>setLoading(false))
    },[])
    console.log(products);
    return (
        <>
        <div>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/DrJ0hNs/3967526-1112241330.jpg)'}}>
   <div className="hero-overlay bg-opacity-80"></div>
   <div className="hero-content text-center text-neutral-content">
     <div className="max-w-md">
    <div className="flex">
    <div className="form-control ">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    
    </div>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <div>
         <button className="btn btn-primary">Search</button>
      </div>
   </div>
    </div>
  </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
           {
             products.map(product=><ProductCart key={product.id} product={product}></ProductCart>)
           }
           </div>
           </div>
        </>
    );
};

export default Product;

