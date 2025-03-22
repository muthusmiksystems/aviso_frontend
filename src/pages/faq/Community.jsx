// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaTwitch,
// } from "react-icons/fa";
// import Images from "../../assets/images/Image";
// import CustomButton from "../../components/common/Button";

// export default function CommunitySection() {
//   return (
//     <section className="relative w-full">
//       {/* Top border with COMMUNITY text */}

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           {/* Left column - Text content */}
//           <div className="flex flex-col justify-center space-y-8 ">
//             <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-xl text-center md:text-end uppercase tracking-wider">
//               COMMUNITY
//             </p>
//             <h2 className="text-4xl md:text-5xl font-bold text-center md:text-end  text-black">
//               Our Community
//             </h2>

//             <p className="text-[#29ABE2] md:text-end text-center text-xl font-medium">
//               "Imperdi eleifend adipiscing facilisis arcu pharetra"
//             </p>

//             <p className="text-[#606060] text-center md:text-end text-md leading-relaxed">
//               Ultrices congue eget armet, elit, porttitor sed maecenas
//               consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing
//               facilisis arcu pharetra. Cras nibh egestas neque integer. Vel
//               ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin
//               quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam
//               velit purus
//             </p>

//             <div className="flex justify-center md:justify-end">
//               <CustomButton className="bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg px-16 py-4 sm:py-4 tracking-wide text-md text-white sm:text-md font-bold">
//                 Learn More
//               </CustomButton>
//             </div>
//           </div>

//           {/* Right column - Image and stats */}
//           <div className="relative">
//             <div className="rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src={Images.Community}
//                 alt="Diverse group of students collaborating"
//                 className="w-full h-auto"
//               />

//               {/* Stats overlay */}
//               <div className="w-full">
//                 <div className="absolute top-[99%] md:top-[55%] lg:top-[98%] transform -translate-y-1/2 left-0 right-0 bg-transparent bg-opacity-10 backdrop-blur-xs rounded-sm p-4 md:p-6 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto z-10">
//                   <p className="text-gray-600 mb-1">
//                     Students across the globe
//                   </p>
//                   <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     1,030,500
//                   </p>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Ultrices congue eget armet, elit, porttitor maecenas
//                     consectetur. Nunc, sem imperdiet ultrices sed eleifend
//                     adipiscing facilisis arcu pharetra. Cras nibh egestas neque
//                     integer. Vel ultrices fusce dolor laoreet lacus
//                   </p>

//                   <div className="flex space-x-4 mt-6">
//                     <a href="#" className="text-gray-600 hover:text-gray-900">
//                       <FaFacebookF size={20} />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-gray-900">
//                       <FaTwitter size={20} />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-gray-900">
//                       <FaInstagram size={20} />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-gray-900">
//                       <FaLinkedinIn size={20} />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-gray-900">
//                       <FaYoutube size={20} />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-gray-900">
//                       <FaTwitch size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import Images from "../../assets/images/Image";
import CustomButton from "../../components/common/Button";

export default function CommunitySection() {
  return (
    <section className="relative w-full">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-xl text-center md:text-end uppercase tracking-wider">
              COMMUNITY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-end text-black">
              Our Community
            </h2>
            <p className="text-[#29ABE2] md:text-end text-center text-xl font-medium">
              "Imperdi eleifend adipiscing facilisis arcu pharetra"
            </p>
            <p className="text-[#606060] text-center md:text-end text-md leading-relaxed">
              Ultrices congue eget armet, elit, porttitor sed maecenas
              consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing
              facilisis arcu pharetra. Cras nibh egestas neque integer. Vel
              ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin
              quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam
              velit purus.
            </p>
            <div className="flex justify-center md:justify-end">
              <CustomButton className="bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg px-16 py-4 sm:py-4 tracking-wide text-md text-white sm:text-md font-bold">
                Learn More
              </CustomButton>
            </div>
          </div>

          {/* Right column - Image and stats */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={Images.Community}
                alt="Diverse group of students collaborating"
                className="w-full h-auto"
              />

              {/* Stats overlay (25% on image, 75% outside) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-25%] bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-4 md:p-6 w-[90%] sm:w-[80%] lg:w-[70%] mx-auto z-10 shadow-lg">
                <p className="text-gray-600 mb-1">Students across the globe</p>
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  1,030,500
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ultrices congue eget armet, elit, porttitor maecenas
                  consectetur. Nunc, sem imperdiet ultrices sed eleifend
                  adipiscing facilisis arcu pharetra. Cras nibh egestas neque
                  integer. Vel ultrices fusce dolor laoreet lacus.
                </p>

                {/* Social icons */}
                <div className="flex justify-center space-x-4 mt-6">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaLinkedinIn size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaYoutube size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <FaTwitch size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
