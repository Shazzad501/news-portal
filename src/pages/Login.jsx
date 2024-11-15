import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {setUser, loginEdgetUser} = useContext(AuthContext)

  const [error, setError] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault();

    // get form data
    const form = new FormData(e.target)
    const email = form.get('email');
    const password = form.get('password');
    
    // user login 
    loginEdgetUser(email, password)
    .then(res=>{
      setUser(res.user);
      toast.success("Login Success!!")
      navigate(location?.state ? location?.state: "/")
      // Reset the form fields after successful login
      e.target.reset();
    })
    .catch(err=>{
      setError({...error, login: err.code})
    })
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-md py-16 px-5 shrink-0 rounded-md">
          <h2 className="font-bold text-xl text-center ">Login your account</h2>
          <form onSubmit={handleLogin} className="card-body">
            {/* Email filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Email Address</span>
              </label>
              <input 
              name="email"
              type="email" 
              placeholder="demo.mail@gamil.com" 
              className="input input-bordered" required />
            </div>
            {/* Email filed */}

            {/* password filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Password</span>
              </label>
              <input 
              name="password"
              type="password" 
              placeholder="Enter your password" 
              className="input input-bordered" required />
              {
                error.login && (
                  <label className="label text-sm font-semibold text-red-600">
                    {error.login}
                  </label>
                )
              }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {/* password filed */}
            <div className="form-control mt-6">
              <button className="btn bg-gray-600 font-bold text-base text-white hover:bg-gray-600">Login</button>
            </div>
          </form>
          <p className='font-semibold text-sm text-center'>Don't Have An Account? <Link to='/auth/register' className='font-semibold text-sm text-red-600 underline'>Register</Link></p>
        </div>
    </div>
  );
};

export default Login;