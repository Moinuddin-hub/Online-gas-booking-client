import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const Navbar = () => {
    const{user,logOut}=useAuth();
    const navOptions = (
        <>
          <li><Link to="/home">Home</Link> </li>
          <li> <Link to="">Our menu</Link> </li>
          <li><Link to="">Order Food</Link></li>
          {/* <li><Link to="/login">login</Link></li> */}
             
     
        </>
      );
    return (
        <>
       <div className="navbar bg-slate-500 z-10 fixed   max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="">
        {
                        user?.email ?    <div className="flex  items-center">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                           
                  
                            </ul>
                        </div>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
  </div> 
  </div>
</div>
        </>
    );
};

export default Navbar;