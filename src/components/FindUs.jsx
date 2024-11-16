import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <a href="https://www.facebook.com/" target="_blank" className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a href="https://www.instagram.com/" target="_blank" className="btn join-item justify-start">
          <FaInstagram></FaInstagram> Instagram
        </a>
        <a href="https://x.com/home" target="_blank" className="btn join-item justify-start">
          <FaTwitter></FaTwitter> Twitter
        </a>
      </div>
    </div>
  );
};

export default FindUs;
