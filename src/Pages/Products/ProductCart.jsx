import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
const ProductCart = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const { img, title, price, id } = product;
  const handleAddProduct = () => {
    if (user && user.email) {
      // console.log(user.email, product);
      const cartItem = {
        productId: id,
        email: user.email,
        title,
        img,
        price,
      };
      console.log(cartItem);
      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <>
      <div>
        <div className="max-w-xs p-6 font-serif  h-58 rounded-md shadow-2xl dark:bg-gray-900 dark:text-gray-50">
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

          <button
            onClick={handleAddProduct}
            className="btn btn-primary w-full"
          >
           Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
