// "use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Images from "../../assets/images/Image";

// Sample FAQ data - you can move this to a separate JSON file
const faqData = [
  {
    question: "Sollicitudin fermentum ultricies hac.",
    answer:
      "Erat malesuada fringilla dolor, egestas dictum ultricies nec. Nulla mi sollicitudin et, consectetur. Elit purus ut eu adipiscing dignissim sapien, ultricies eu. Adipiscing eros, consequat in porttitor quam et nulla.",
  },
  {
    question: "Nulla fermentum erat orci tellus Erat eget.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    question: "Ac dictum gravida dui sem vitae faucibus.",
    answer:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
  },
  {
    question: "quam cursus odio sed magna id iaculis.",
    answer:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-8 py-8">
      <div className="text-center mb-8">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-bold text-xl uppercase tracking-wider">
          READY TO BE YOUR CAREER CONSULTANT
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 mb-8">
          Frequently asked questions
        </h1>
        <p className="text-[#606060] max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. At mi nisi fringilla rhoncus
          praesent enim auctor erat. At mi nisi fringilla rhoncus praesent enim
          auctor erat.
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        {/* FAQ Items - Left Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-bold mb-6 text-[#131313]">Common</h2>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-2">
                <button
                  className={`flex justify-between items-center w-full py-4 text-left focus:outline-none ${
                    openIndex === index ? "text-[#29ABE2]" : "text-black"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`font-medium text-lg md:text-2xl ${
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
                      <FaChevronUp className="h-5 w-5" />
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
                  <div className="pb-4 text-[#606060]">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
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
