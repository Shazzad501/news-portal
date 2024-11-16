import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LatestNews = () => {
  const {news} = useContext(AuthContext);
  console.log(news)
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={70}>
     <div className="flex gap-x-10">  {
        news.map(n => <Link key={n._id} to={`/news/${n._id}`}>
         {n.title}....
        </Link>)
       }</div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
