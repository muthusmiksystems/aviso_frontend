import { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";
import Images from "../../assets/images/Image";
import Icons from "../../assets/icons/Icons";

export default function FaqSection() {
  const [faqData, setFaqData] = useState([]);

  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    // Fetch FAQ data from the JSON file
    const fetchFaqData = async () => {
      try {
        const response = await axios.get("/data/faqDatas.json");

        setFaqData(response.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqData();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-8 py-8">
      <div className="flex flex-wrap lg:flex-nowrap gap-8  mt-8">
        {/* Image - Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-0">
          <div className="rounded-lg overflow-hidden max-w-full">
            <img
              src={Images.Faqbilling}
              alt="Career consultant with question cards"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* FAQ Items - Left Side */}
        <div className="w-full lg:w-1/2 order-0 lg:order-1">
          <h2 className="text-5xl font-bold mb-6 text-[#131313]">Billing</h2>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b-2 border-[#D7D7D7] pb-2">
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
                  <div className="pb-4 text-[#606060] text-sm sm:text-lg font-light w-[94%]">
                    {faq.answer}
                  </div>
                  {/* Render payment icons if available */}
                  {/* {faq.paymentIcons && faq.paymentIcons.length > 0 && (
                    <div className="flex gap-4 mt-4">
                      {faq.paymentIcons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          src={Icons.icon}
                          alt={`Payment icon ${iconIndex + 1}`}
                          className="h-8 w-auto"
                        />
                      ))}
                    </div>
                  )}*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
