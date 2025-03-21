import React from "react";
import Images from "../../assets/images/Image";
import CustomButton from "../../components/common/Button";

const LearningJourney = () => {
  const articles = [
    {
      id: 1,
      date: "January 10, 2025",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra commodo pulvinar ultricies aliquam. Lectus.",
      image: Images.Professionalthree,
    },
    {
      id: 2,
      date: "January 12, 2025",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed nullam faucibus felis suspendisse. Dignissim posuere.",
      image: Images.Professionaltwo,
    },
    {
      id: 3,
      date: "January 15, 2025",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel tortor tristique aliquam cras adipiscing viverra facilisi eget.",
      image: Images.Professionalone,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mt-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-10">
          Embark on a Journey of
          <br className="hidden sm:block" /> Continuous Learning
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md"
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
              <div className="p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-[#425466] mb-2">
                  {article.date}
                </p>
                <h3 className="font-semibold text-sm sm:text-lg mb-2">
                  {article.title}
                </h3>
                <p className="text-[#425466] text-xs sm:text-sm mb-4">
                  {article.content}
                </p>
                <a
                  href="#"
                  className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF3EEA] to-[#99258C] text-sm sm:text-md font-medium"
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
            <CustomButton className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white rounded-full transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF3EEA] to-[#99258C] text-sm sm:text-md font-medium">
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
