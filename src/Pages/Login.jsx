import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import GoogleLogin from "../Google/GoogleLogin";
import Swal from "sweetalert2";
import login from "../assets/login.json";
import Lottie from "lottie-react";

const Login = () => {
	const {signIn}=useContext(AuthContext)
	const navigate=useNavigate();
	const location=useLocation();
	const from=location.state?.from?.pathname || "/";
	console.log('state in the location login page',location.state);
	const [email,setEmail]=useState(null);
	const [password,setPassword]=useState(null);

	const handleSubmit=(e)=>{
		e.preventDefault();
		
		const user={email,password};
		console.log(user);



		signIn(email,password)
		.then((res)=>{
			Swal.fire('User Login successfully');
			console.log(res);
			navigate(from,{replace:true});
		})
		.catch((error)=>{
			Swal.fire(error.message);
		})

	}

    return (
        <>
            <div className=" font-serif relative mx-auto mt-16 space-y-3   ">
	      <div className="flex  flex-col lg:flex-row-reverse lg:w-[800px] w-[400px] shadow-2xl p-8 rounded-xl mx-auto dark:bg-gray-900 dark:text-gray-100 bg-slate-300 gap-8">
			<div className="w-[500px] h-[500px]">
	<h1 className="text-2xl  font-bold ml-28 md:text-center md:ml-0">Login</h1>
	<form onSubmit={handleSubmit} noValidate="" action="" className=" w-80 space-y-6">
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-gray-400">Email</label>
			<input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"/>
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block dark:text-gray-400">Password</label>
			<input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full btn btn-primary p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
	</form>
	<div className="mr-36 md:mr-0 md:text-center mb-10">
	<div className="flex items-center pt-2 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400 mt-4">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4 mt-4">
		 <GoogleLogin/>
		<button aria-label="Log in with Twitter" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
			</svg>
		</button>
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6  dark:text-gray-400">Don't have an account?
		<Link to='/register'><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100">Sign up</a></Link>
	</p>
	</div>
	      </div>
		  <div className="w-[500px] h-[500px]">
               <div className=" ml-24 md:text-center">
			   <h2 className="text-2xl font-bold">Welcome</h2>
			 <p>Sing in get started and explore all <br/> the amazing feature our platform <br/> has to offer</p>
			   </div>
			 <Lottie animationData={login} className='w-80 md:w-full'/>
		  </div>
	   </div>
            </div>
        </>
    );
};

export default Login;