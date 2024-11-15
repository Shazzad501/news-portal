import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const { setUser, createNewUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState({})

  const handleRegister = (e)=>{
    e.preventDefault();

    // get form data
    const form = new FormData(e.target)
    const name = form.get('name');
    if(name.length < 5){
      setError({...error, name: "Name must be more then 5 character."});
      return;
    }
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // user registation 
    createNewUser(email, password)
    .then(res => {
      setUser(res.user);
      toast.success("Register Success!!")
      
      updateUserProfile({displayNam: name, photoURL: photo})
      .then(()=>{
        navigate("/");
      })
      .catch((err)=>{
        toast.error(`${err.message}`)
      })

      // Reset the form fields after successful registration
      e.target.reset();
    })
    .catch(err => toast.error(`${err.message}`))

  }
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-md py-12 px-5 shrink-0 rounded-md">
          <h2 className="font-bold text-xl text-center ">Register your account</h2>
          <form onSubmit={handleRegister} className="card-body">
            {/* Name filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Your Name</span>
              </label>
              <input 
              name='name'
              type="text" 
              placeholder="Enter your name" 
              className="input input-bordered" required />
            </div>
            {
              error?.name && <label className="label">
              <span className="label-text font-semibold text-sm text-red-600">{error?.name}</span>
            </label>
            }
            {/* Name filed */}
            
            {/* photo url filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Photo URL</span>
              </label>
              <input 
              name='photo'
              type='url' 
              placeholder="https//demo-photo.png.com" 
              className="input input-bordered" />
            </div>
            {/* photo url filed */}

            {/* Email filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">Email Address</span>
              </label>
              <input 
              name='email'
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
              name='password'
              type="password" 
              placeholder="Enter password"
              className="input input-bordered" required />
            </div>
            {/* password filed */}
            <div className="form-control mt-6">
              <button className="btn bg-gray-600 font-bold text-base text-white hover:bg-gray-600">Register</button>
            </div>
          </form>
          <p className='font-semibold text-sm text-center'>Already Have An Account? <Link to='/auth/login' className='font-semibold text-sm text-green-600 underline'>Login</Link></p>
        </div>
    </div>
  );
};

export default Register;