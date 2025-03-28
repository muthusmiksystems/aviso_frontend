import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa"; // Import the Font Awesome check icon
import CustomButton from "../../components/common/Button"; // Import your CustomButton component
import Images from "../../assets/images/Image";
import axios from "axios";

const PricingPackage = () => {
  const [packages, setPackages] = useState([]); // State to store packages
  const [selectedPackage, setSelectedPackage] = useState("business"); // State to track the selected package

  // Fetch pricing packages data
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("/data/pricingPackages.json"); // Adjust the path if necessary
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching pricing packages:", error);
      }
    };

    fetchPackages();
  }, []);

  // Handle package selection
  const handleSelectPackage = (id) => {
    setSelectedPackage(id);
  };

  return (
    <div
      className="bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${Images.Pricingbg})`,
        backgroundSize: "100%",
      }}
    >
      <div className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-12 xl:px-20">
        <p className="text-transparent text-center my-4 sm:my-6 bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-lg sm:text-xl uppercase tracking-wider">
          Pricing Package
        </p>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Financial Planning Solutions,
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Priced for Your Prosperity
          </h2>
          <p className="text-[#606060]  max-w-2xl mx-auto text-sm sm:text-base my-12 ">
            Whether you're focused on efficiency, comprehensive business
            planning, or retirement strategies. Our packages are designed for
            your unique needs and budget.
          </p>
        </div>

        {/* Package Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-28 sm:px-6 lg:px-12 mt-8">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-4 sm:p-6 shadow-md flex flex-col transition-all cursor-pointer
                ${
                  isSelected
                    ? "scale-105 z-10 bg-[#29abe2] shadow-lg"
                    : `${pkg.bgColor} opacity-90`
                }
              `}
                onClick={() => handleSelectPackage(pkg.id)}
              >
                {/* Badge for Most Popular */}
                {pkg.badge && (
                  <div className="w-full flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-[#29ABE2] to-[#00FFFF] text-white text-xs py-2 px-4 rounded-full">
                      <span className="font-bold">{pkg.badge}</span>
                    </div>
                  </div>
                )}

                {/* Package Title */}
                <div className="text-start mb-4 sm:mb-6">
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isSelected ? "text-white" : "text-black"
                    }`}
                  >
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-start my-4">
                    <span
                      className={`text-4xl sm:text-5xl font-semibold ${
                        isSelected ? "text-white" : pkg.textColor
                      }`}
                    >
                      $
                    </span>
                    <span
                      className={`text-4xl sm:text-5xl font-bold leading-none ${
                        isSelected ? "text-white" : pkg.priceColor
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm font-semibold ml-1 ${
                        isSelected ? "text-white" : "text-[#606060]"
                      }`}
                    >
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-md mt-4 ${
                      isSelected ? "text-white" : "text-[#606060]"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>
                <hr className="border-t-2 border-gray-200 my-4 sm:my-6" />
                {/* Services Included */}
                <div className="flex-grow">
                  <h4
                    className={`font-bold text-md sm:text-lg mb-4 ${
                      isSelected ? "text-white" : "text-black"
                    }`}
                  >
                    Service Includes
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm sm:text-md"
                      >
                        <FaCheck
                          className={`mr-2 ${
                            isSelected ? "text-white" : "text-blue-500"
                          }`}
                        />
                        <span
                          className={`${
                            isSelected ? "text-white" : "text-[#606060]"
                          }`}
                        >
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full flex justify-center items-center">
                  <CustomButton
                    onClick={() => handleSelectPackage(pkg.id)}
                    className={`mt-6 w-full sm:w-[80%] transition duration-200 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full
                  ${
                    isSelected
                      ? "bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg"
                      : "bg-[#57b3d3] text-white"
                  }
                `}
                  >
                    <span className="font-bold">{pkg.buttonText}</span>
                  </CustomButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
