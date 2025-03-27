import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Img } from "../../components/common/Img";
import Images from "../../assets/images/Image";
import Chart from "./Chart";

function Testimonial({data}) {
  return (
    <div className="bg-gray-100 min-h-screen px-8 py-12">
      {/* Header Section */}
      <h2 className="text-purple-500 font-bold text-sm uppercase">{data?.title}</h2>
      <h1 className="text-2xl font-bold mt-1">Testimonial</h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Video Section */}
        <div className="lg:col-span-2 p-6">
          <div className="relative">
            <Img
              src={Images.TestimonialImage}
              alt="Testimonial Video"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-[#29ABE2] p-5 rounded-full">
              <FaPlay className="text-white  text-xl" />
            </button>
            </div>
            
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">Description</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Augue fermentum mollis tortor mattis venenatis cursus maecenas
              tellus vivamus. Natoque scelerisque vitae gravida dictumst. Et vulputate tincidunt quam vulputate nibh
              quis. Sed et nisl quis blandit ut.
            </p>
            <p className="text-gray-600 mt-2">
              Ut convallis amet et viverra. Sagittis arcu donec facilisi cras non elementum enim. Dignissim etiam pretium
              praesent nisl scelerisque venenatis vulputate viverra.
            </p>

            {/* Salary Range */}
            <div className="mt-4 font-bold space-y-2">
              <h4>Prospective Salary Range</h4>
              <p className="text-[#29ABE2] font-medium">USD $1600 - $3200</p>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-6">
         <Chart />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
