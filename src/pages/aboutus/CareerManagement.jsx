import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaBullhorn,
  FaUser,
  FaUniversity,
  FaFlagCheckered,
} from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";

// Map JSON icon names to actual icon components
const iconMapping = {
  FaBullhorn: <FaBullhorn />,
  FaFlagCheckered: <FaFlagCheckered />,
  FaHandFist: <FaHandFist />,
  ImLeaf: <ImLeaf />,
  FaUser: <FaUser />,
  FaUniversity: <FaUniversity />,
};

const CareerManagement = () => {
  const [careerOptions, setCareerOptions] = useState([]);

  useEffect(() => {
    axios
      .get("/data/careerOptions.json")
      .then((response) => {
        const dataWithIcons = response.data.map((item) => ({
          ...item,
          icon: iconMapping[item.icon] || null,
        }));
        setCareerOptions(dataWithIcons);
      })
      .catch((error) => console.error("Error fetching career options:", error));
  }, []);

  return (
    <section
      className="text-white py-20 px-6 md:px-12 lg:px-20 font-[OmnesArabic]"
      style={{
        background:
          "linear-gradient(to right, #B82D97 17%, #57B3D3 67%, #76ABFC)",
      }}
    >
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h4 className="text-[24px] text-[#FAFAFA] font-semibold uppercase tracking-wide mb-6">
          What We Do
        </h4>
        <h2 className="text-4xl text-[#FFFFFF] lg:text-[50px] xl:text-[64px] font-semibold mb-9">
          Approach to Career Management
        </h2>
        <p className="max-w-2xl text-[16px] text-[#FAFAFA] font-regular mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerOptions.map((item) => (
          <div
            key={item.id}
            className="bg-[#ffffff70] text-black p-6 rounded-lg shadow-lg gap-4 border border-white/20"
          >
            <div className="text-[#686868] text-lg bg-white rounded-full p-3 w-10 h-10 mb-2">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold pt-2">{item.title}</h3>
              <p className="text-gray-600 font-regular mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerManagement;
