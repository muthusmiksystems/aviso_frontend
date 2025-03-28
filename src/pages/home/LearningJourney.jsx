import React, { useState, useEffect } from "react";
import Images from "../../assets/images/Image";
import CustomButton from "../../components/common/Button";
import axios from "axios";

const LearningJourney = () => {
  const [articles, setArticles] = useState([]);

  // Fetch articles data
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/data/articles.json"); // Adjust the path if necessary
        const dataWithImages = response.data.map((article) => ({
          ...article,
          image: Images[article.image] || "/placeholder.svg", // Resolve image dynamically
        }));
        setArticles(dataWithImages);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6  py-12   font-[OmnesArabic]">
      <div className="mt-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-10">
          Embark on a Journey of
          <br className="hidden sm:block" /> Continuous Learning
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border-2 border-gray-200 transition-all hover:shadow-md"
            >
              {/* Image */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden p-4">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              {/* Content */}
              <div className="pt-0 px-4  pb-4  ">
                <p className="text-xs sm:text-lg font-normal text-[#425466] mb-2">
                  {article.date}
                </p>
                <h3 className="font-semibold text-md sm:text-lg mb-2">
                  {article.title}
                </h3>
                <p className="text-[#425466] text-md sm:text-md mb-4">
                  {article.content}
                </p>
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF3EEA] to-[#99258C] text-md sm:text-lg font-medium"
                >
                  Read now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <div className="p-[1px] rounded-full bg-gradient-to-b from-[#FF3EEA] to-[#99258C]">
            <CustomButton className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white rounded-full    hover:bg-gradient-to-b from-[#FF3EEA] to-[#99258C]  hover:text-white text-[#FF3EEA]">
              <span className=" text-sm sm:text-lg font-medium  ">
                See All Articles
              </span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
