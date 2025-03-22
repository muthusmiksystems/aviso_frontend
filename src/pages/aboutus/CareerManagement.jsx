import React from "react";
import { FaBullhorn, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaUser, FaUniversity } from "react-icons/fa";

const careerOptions = [
  { id: 1, title: "Career Planning", description: "Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.", icon: <FaBullhorn /> },
  { id: 2, title: "Relocation Planning", description: "Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.", icon: <FaMapMarkerAlt /> },
  { id: 3, title: "Job Planning", description: "Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.", icon: <FaBriefcase /> },
  { id: 4, title: "Organizations", description: "Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.", icon: <FaBuilding /> },
  { id: 5, title: "Schools", description: "Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.", icon: <FaUser /> },
  { id: 6, title: "Universities", description: "Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat.", icon: <FaUniversity /> }
];

const CareerManagement = () => {
  return (
    <section 
      className="text-white py-16 px-6 md:px-12 lg:px-20 font-[OmnesArabic]" 
      style={{ background: "linear-gradient(to right, #B82D97, #57B3D3, #76ABFC)" }}
    >
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h4 className="text-sm font-semibold uppercase tracking-wide">What We Do</h4>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Approach to Career Management</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerOptions.map((item) => (
          <div key={item.id}  className="bg-[#ffffff70] text-black p-6 rounded-lg shadow-lg  gap-4 border border-white/20">
            <div className="text-gray-500 text-lg bg-white rounded-full p-3 w-10 h-10">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold pt-2">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerManagement;

