import React from "react";

const Policies = ({ title, subtitle, content }) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-16 py-12 bg-white text-[#606060]">
      <div className="text-center mb-8">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-xl uppercase tracking-wider my-8">
          {subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto text-[#606060] text-[16px] leading-relaxed">
          {content.intro}
        </p>
      </div>

      <div className="mx-auto px-8 text-[22px]">
        <div className="space-y-8 text-[#606060]">
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`leading-relaxed ${
                paragraph.isBold ? "font-bold" : ""
              } ${index === content.paragraphs.length - 1 ? "mb-0" : ""}`}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policies;
