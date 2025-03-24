// import React, { useState } from "react";
// import Button from "../../components/common/Button"; // Import your reusable Button component

// const PricingPackage = () => {
//   // JSON data for the packages
//   const packages = [
//     {
//       id: "student",
//       title: "Student Package",
//       price: 29,
//       duration: "/year",
//       description:
//         "Ideal for individuals and small families taking their first steps in financial planning",
//       services: [
//         "Lorem ipsum dolor sit amet",
//         "Ut incididunt nostrud diam",
//         "Cursus nunc sed egestas",
//         "Tellus nunc nunc sem urna",
//         "Dui odio elementum vehicula",
//         "Pharetra vitae felis justo",
//       ],
//       buttonText: "Select Plan",
//       bgColor: "bg-white",
//       textColor: "text-gray-800",
//       priceColor: "text-[#29ABE2]",
//     },
//     {
//       id: "business",
//       title: "Business Package",
//       price: 129,
//       duration: "/year",
//       description:
//         "Perfect for those seeking comprehensive financial advice and personalized strategies",
//       services: [
//         "Lorem ipsum dolor sit amet",
//         "Ut incididunt nostrud diam",
//         "Cursus nunc sed egestas",
//         "Tellus nunc nunc sem urna",
//         "Dui odio elementum vehicula",
//         "Pharetra vitae felis justo",
//       ],
//       buttonText: "Select Plan",
//       bgColor: "bg-blue-500 text-white",
//       textColor: "text-white",
//       priceColor: "text-white",
//       badge: "MOST POPULAR",
//     },
//     {
//       id: "enterprise",
//       title: "Enterprise Package",
//       price: 235,
//       duration: "/year",
//       description:
//         "Tailored for businesses and entrepreneurs striving for financial success and growth",
//       services: [
//         "Lorem ipsum dolor sit amet",
//         "Ut incididunt nostrud diam",
//         "Cursus nunc sed egestas",
//         "Tellus nunc nunc sem urna",
//         "Dui odio elementum vehicula",
//         "Pharetra vitae felis justo",
//       ],
//       buttonText: "Select Plan",
//       bgColor: "bg-white",
//       textColor: "text-gray-800",
//       priceColor: "text-gray-800",
//     },
//   ];

//   // State to track the selected package
//   const [selectedPackage, setSelectedPackage] = useState(null);

//   // Handle package selection
//   const handleSelectPackage = (id) => {
//     setSelectedPackage(id);
//   };

//   return (
//     <div className="bg-gray-50 py-12 px-4 md:py-16 lg:py-20">
//       <p className="text-transparent text-center my-8 bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-xl uppercase tracking-wider">
//         Pricing Package
//       </p>
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
//           Financial Planning Solutions,
//         </h2>
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
//           Priced for Your Prosperity
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm md:text-base">
//           Whether you're focused on efficiency, comprehensive business planning,
//           or retirement strategies. <br />
//           Our packages are designed for your unique needs and budget.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 lg:px-28">
//         {packages.map((pkg) => {
//           const isSelected = selectedPackage === pkg.id;

//           return (
//             <div
//               key={pkg.id}
//               className={`${
//                 isSelected ? "border-2 border-blue-500" : pkg.bgColor
//               } rounded-xl p-6 shadow-md flex flex-col relative`}
//             >
//               {pkg.badge && !isSelected && (
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs font-semibold py-1 px-4 rounded-full">
//                   {pkg.badge}
//                 </div>
//               )}
//               <div className="text-center mb-6">
//                 <h3
//                   className={`text-xl font-semibold ${
//                     isSelected ? "text-blue-500" : pkg.textColor
//                   } mb-2`}
//                 >
//                   {pkg.title}
//                 </h3>
//                 <div className="flex items-baseline justify-center my-4">
//                   <span
//                     className={`text-2xl font-semibold ${
//                       isSelected ? "text-blue-500" : pkg.textColor
//                     }`}
//                   >
//                     $
//                   </span>
//                   <span
//                     className={`text-5xl font-bold ${
//                       isSelected ? "text-blue-500" : pkg.priceColor
//                     } leading-none`}
//                   >
//                     {pkg.price}
//                   </span>
//                   <span className="text-sm text-gray-500 ml-1">
//                     {pkg.duration}
//                   </span>
//                 </div>
//                 <p
//                   className={`${
//                     isSelected ? "text-blue-500" : "text-gray-600"
//                   } text-sm`}
//                 >
//                   {pkg.description}
//                 </p>
//               </div>

//               <div className="flex-grow">
//                 <h4
//                   className={`font-semibold ${
//                     isSelected ? "text-blue-500" : pkg.textColor
//                   } mb-4`}
//                 >
//                   Service Includes
//                 </h4>
//                 <ul className="space-y-3">
//                   {pkg.services.map((service, index) => (
//                     <li key={index} className="flex items-start text-sm">
//                       <span
//                         className={`${
//                           isSelected ? "text-blue-500" : "text-green-500"
//                         } font-bold mr-2`}
//                       >
//                         ✓
//                       </span>{" "}
//                       {service}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <Button
//                 onClick={() => handleSelectPackage(pkg.id)}
//                 className={`mt-6 ${
//                   isSelected
//                     ? "bg-blue-500 hover:bg-blue-600"
//                     : "bg-pink-500 hover:bg-pink-600"
//                 } text-white font-semibold py-3 px-6 rounded-full w-full transition duration-200`}
//               >
//                 {pkg.buttonText}
//               </Button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PricingPackage;
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Import the Font Awesome check icon
import CustomButton from "../../components/common/Button"; // Import your CustomButton component
import Images from "../../assets/images/Image";

const PricingPackage = () => {
  // JSON data for the packages
  const packages = [
    {
      id: "student",
      title: "Student Package",
      price: 29,
      duration: "/year",
      description:
        "Ideal for individuals and small families taking their first steps in financial planning",
      services: [
        "Lorem ipsum dolor sit amet",
        "Ut incididunt nostrud diam",
        "Cursus nunc sed egestas",
        "Tellus nunc nunc sem urna",
        "Dui odio elementum vehicula",
        "Pharetra vitae felis justo",
      ],
      buttonText: "Select Plan",
      bgColor: "bg-white",
      textColor: "text-[#29ABE2]",
      priceColor: "text-[#29ABE2]",
    },
    {
      id: "business",
      title: "Business Package",
      price: 129,
      duration: "/year",
      description:
        "Perfect for those seeking comprehensive financial advice and personalized strategies",
      services: [
        "Lorem ipsum dolor sit amet",
        "Ut incididunt nostrud diam",
        "Cursus nunc sed egestas",
        "Tellus nunc nunc sem urna",
        "Dui odio elementum vehicula",
        "Pharetra vitae felis justo",
      ],
      buttonText: "Select Plan",
      bgColor: "bg-white",
      textColor: "text-[#29ABE2]",
      priceColor: "text-[#29ABE2]",
      badge: "MOST POPULAR",
    },
    {
      id: "enterprise",
      title: "Enterprise Package",
      price: 235,
      duration: "/year",
      description:
        "Tailored for businesses and entrepreneurs striving for financial success and growth",
      services: [
        "Lorem ipsum dolor sit amet",
        "Ut incididunt nostrud diam",
        "Cursus nunc sed egestas",
        "Tellus nunc nunc sem urna",
        "Dui odio elementum vehicula",
        "Pharetra vitae felis justo",
      ],
      buttonText: "Select Plan",
      bgColor: "bg-white",
      textColor: "text-[#29ABE2]",
      priceColor: "text-[#29ABE2]",
    },
  ];

  // State to track the selected package
  const [selectedPackage, setSelectedPackage] = useState("business");

  // Handle package selection
  const handleSelectPackage = (id) => {
    setSelectedPackage(id);
  };

  return (
    <div
      className="bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${Images.Pricingbg})`,
        backgroundSize: "100% ", // Replace with your image path
      }}
    >
      <div className="  py-12 px-4 md:py-16 lg:py-20 ">
        <p className="text-transparent text-center my-8 bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-xl uppercase tracking-wider">
          Pricing Package
        </p>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Financial Planning Solutions,
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Priced for Your Prosperity
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm md:text-base">
            Whether you're focused on efficiency, comprehensive business
            planning, or retirement strategies. <br />
            Our packages are designed for your unique needs and budget.
          </p>
        </div>

        {/* Package Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 lg:px-28">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl p-6 shadow-md flex flex-col transition-all cursor-pointer w-[88%]
                ${
                  isSelected
                    ? " scale-110 z-10 bg-[#29abe2] shadow-lg"
                    : `${pkg.bgColor} opacity-80 `
                }
              `}
                onClick={() => handleSelectPackage(pkg.id)}
              >
                {/* Badge for Most Popular */}
                {pkg.badge && (
                  <div className="w-full flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-[#29ABE2]  to-[#00FFFF] text-white text-xs   py-1 px-4 rounded-full w-[60%] py-3 text-center ">
                      <span className="font-bold  ">{pkg.badge}</span>
                    </div>
                  </div>
                )}

                {/* Package Title */}
                <div className="text-start mb-6">
                  <h3
                    className={`text-lg  font-bold mb-2 ${
                      isSelected ? "text-white" : "text - black"
                    }`}
                  >
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-start my-4">
                    <span
                      className={`text-5xl font-semibold ${
                        isSelected ? "text-white" : pkg.textColor
                      }`}
                    >
                      $
                    </span>
                    <span
                      className={`text-5xl font-bold leading-none ${
                        isSelected ? "text-white" : pkg.priceColor
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm font-semibold  ml-1 ${
                        isSelected ? "text-white" : "text-[#606060]"
                      }`}
                    >
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-md mt-8  ${
                      isSelected ? "text-white" : "text-[#606060]"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>
                <hr className="border-t-2 border-gray-200 my-6" />
                {/* Services Included */}
                <div className="flex-grow">
                  <h4
                    className={`font-bold text-lg mb-4 ${
                      isSelected ? "text-white" : "text-black"
                    }`}
                  >
                    Service Includes
                  </h4>
                  <ul className="space-y-3">
                    {pkg.services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-center  gap-2 text-md my-4"
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
                    className={`mt-6 w-[80%]  transition duration-200 font-semibold py-6 px-6 rounded-full
                  ${
                    isSelected
                      ? "bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg "
                      : "bg-[#57b3d3] py-3  text-white"
                  }
                `}
                  >
                    <spanc className="font-bold">{pkg.buttonText}</spanc>
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
