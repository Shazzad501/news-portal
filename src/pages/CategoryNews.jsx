import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const CategoryNews = () => {
  const {setNews} = useContext(AuthContext)
  const { data: news } = useLoaderData();
  setNews(news);

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <div className="flex flex-col gap-7">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
