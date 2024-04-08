import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilter(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const SearchData = products.filter((product) =>
      product.name.toLowerCase().includes(data.toLowerCase())
    );
    setFilter(SearchData);
  };
  return (
    <>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/DrJ0hNs/3967526-1112241330.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="form-control ">
                    <input
                      type="text"
                      placeholder="Search"
                      onChange={(e) => setData(e.target.value)}
                      className="input input-bordered text-black border-stone-950 font-bold w-72 md:w-72"
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 ml-16 lg:ml-0 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {loading ? (
            <h1>loading</h1>
          ) : (
            filter.map((product) => (
              <ProductCart key={product._id} product={product}></ProductCart>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
