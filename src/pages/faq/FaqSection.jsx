// "use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Images from "../../assets/images/Image";

export default function FaqSection() {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    // Fetch FAQ data from the JSON file
    axios
      .get("/data/faqData.json")
      .then((response) => {
        setFaqData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-8 py-8">
      <div className="text-center mb-16">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-semibold text-[20px] md:text-[24px] uppercase tracking-wider">
          READY TO BE YOUR CAREER CONSULTANT
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold mt-8 mb-8">
          Frequently asked questions
        </h1>
        <p className="text-[#606060] max-w-2xl font-light mx-auto text-[16px]">
          Lorem ipsum dolor sit amet consectetur. At mi elit fringilla rhoncus
          praesent enim auctor cras. Et hendrerit enim et tellus sagittis non
          varius. Praesent nullam blandit nibh
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-8  mt-8">
        {/* FAQ Items - Left Side */}
        <div className="w-full lg:w-1/2 order-1 lg:order-0">
          <h2 className="text-5xl font-bold mb-6 text-[#131313]">Common</h2>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`pb-2 ${
                  index === faqData.length - 1
                    ? ""
                    : "border-b-2 border-[#D7D7D7]"
                }`}
              >
                <button
                  className={`flex justify-between items-center w-full py-4 text-left focus:outline-none ${
                    openIndex === index ? "text-[#29ABE2]" : "text-black"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`font-semibold text-md sm:text-lg md:text-2xl ${
                      openIndex === index ? "text-[#29ABE2]" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === index ? (
                      <FaChevronDown className="h-5 w-5" />
                    ) : (
                      <FaChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openIndex === index ? "1000px" : "0",
                    opacity: openIndex === index ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div className="pb-4 text-[#606060] text-sm sm:text-[16px] font-light w-[94%]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-0 lg:order-1">
          <div className="rounded-lg overflow-hidden max-w-full">
            <img
              src={Images.Faq}
              alt="Career consultant with question cards"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
