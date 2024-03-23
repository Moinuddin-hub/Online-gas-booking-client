import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/log.png";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart]=useCart();
  const navOptions = (
    <>
      <li className="text-md font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-md font-bold">
       
        <Link to="/product">Our product</Link>
      </li>
      <li className="text-md font-bold">
        <Link to="">About</Link>
      </li>
      <li className="text-md font-bold">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="text-md font-bold">
        <Link to="/contact">Contact </Link>
      </li>
      <li className="text-md font-bold">
        <Link to="/dashboard/cart">
          <button className="btn">
          <FaShoppingCart/> 
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-[#C2DFFF] z-10 shadow-2xl  opacity-4  max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-2xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img src={logo} alt="" className="w-20 h-14 " />
        </div>
        <div className="navbar-center   hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="">
            {user?.email ? (
              <div className="flex  items-center">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt={user.displayName} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button className="btn btn-sm  btn-ghost">
                        {user.displayName}
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-sm  btn-ghost"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
