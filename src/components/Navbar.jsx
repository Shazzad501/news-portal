import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext)

  // user log out function
  const handleLogOut=()=>{
    logOutUser()
    .then(()=>{
      toast.success("Log Out Success!!")
    })
    .catch(err=> toast.error(`${err.message}`))
  }
  return (
    <div className="flex justify-between items-center">
      <div className=""> <div className=" ">
          {
            user ? 
            (<div className="flex gap-2 items-center"><img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
            <p className="font-bold text-base">{user?.displayName}</p>
            </div>) 
            : (<img src={userIcon} alt="" />)}
        </div></div>
      <div className="nav space-x-5">
        <NavLink to="/" className='font-semibold text-base'>Home</NavLink>
        <NavLink to="/career" className='font-semibold text-base'>Career</NavLink>
        <NavLink to="/about" className='font-semibold text-base'>About</NavLink>
      </div>
      <div className="login flex gap-2 items-center">
        {
          user 
          ? <Link onClick={handleLogOut} to='/' className="btn btn-neutral rounded-md">Log Out</Link>
          : <Link to='/auth/login' className="btn btn-neutral rounded-md">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
