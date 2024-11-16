import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
const SocialLogin = () => {
  const {user, setUser, loginWithGoogle, loginWithGitHub} = useContext(AuthContext);

  const handleGoogleLogin=()=>{
    loginWithGoogle()
    .then(res=>{
      setUser(res.user);
      toast.success("Login Success!!")
    })
    .catch(err=> toast.error(`${err.message}`))
  }

  const handleGitHubLogin=()=>{
    loginWithGitHub()
    .then(res=>{
      setUser(res.user);
      toast.success("Login Success!!")
    })
    .catch(err=> toast.error(`${err.message}`))
  }
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleLogin} className="btn text-blue-700">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handleGitHubLogin} className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
