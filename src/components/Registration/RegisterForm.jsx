// import React, { useState } from "react";
// import StepIndicator from "./StepIndicator";
// import CareerYouNeed from "./CareerYouNeed";
// import GuestDetails from "./GuestDetails";
// import Submission from "./Submission";
// import Images from "../../assets/images/Image";

// const steps = [
//   { title: "Questionnaire", image: Images.Steper1},
//   { title: "Details", image: Images.Steper2},
//   { title: "Thank You", image: Images.Steper3},
// ];

// const MultiStepForm = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const nextStep = () => {
//     if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     if (currentStep > 0) setCurrentStep(currentStep - 1);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <StepIndicator steps={steps} currentStep={currentStep} />

//       <div className="w-3/4 flex flex-col justify-center items-center p-10">
//         {/* <h2 className="text-2xl font-bold mb-6">{steps[currentStep].title}</h2> */}
//         <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
//           {/* Step Image */}
//           <img src={steps[currentStep].image} alt={steps[currentStep].title} className="w-40 h-40 mb-4" />

//           {/* Step Content */}
//           {currentStep === 0 && <CareerYouNeed />}
//           {currentStep === 1 && <GuestDetails />}
//           {currentStep === 2 && <Submission />}
//         </div>

//         <div className="flex space-x-4 mt-6">
//           {currentStep > 0 && (
//             <button onClick={prevStep} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
//               Back
//             </button>
//           )}
//           {currentStep < steps.length - 1 && (
//             <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;


import React, { useEffect, useState } from "react";
import StepIndicator from "./StepIndicator";
import CareerYouNeed from "./CareerYouNeed";
import GuestDetails from "./GuestDetails";
import Submission from "./Submission";
import Images from "../../assets/images/Image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const steps = [
  { title: "Questionnaire", image: Images.Steper1 },
  { title: "Details", image: Images.Steper2 },
  { title: "Thank You", image: Images.Steper3 },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndicator, setStepIndicator] = useState(true);
  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setStepIndicator(true);
        }
        else{
          setStepIndicator(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="flex-none lg:flex justify-between itmes-center px-3 md:px-16 py-10 gap-3 font-[OmnesArabic]">
      {stepIndicator &&<div className="w-1/4">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>}

      {/* sadha */}
      <div className="relative">
        <button
          className="lg:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineMenu size={24} />
        </button>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-5 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose size={24} />
          </button>

          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
      {/* sadha */}
      <div className="w-full lg:w-3/4 py-4">
        <div className="bg-[linear-gradient(350deg,#e8f8fd,#FFFFFF)] h-full  px-4  rounded-lg shadow-[2px_2px_4px_rgba(41,171,226,200)]">
          <div className="">
            {currentStep === 0 && <CareerYouNeed />}
            {currentStep === 1 && <GuestDetails />}
            {currentStep === 2 && <Submission />}
          </div>

          <div className="flex justify-end space-x-4 mt-7 mr-14 pb-5">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-[#29ABE2] text-white rounded-full"
              >
                {currentStep === 2 ? "BACK TO HOME":"BACK"}
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-[#29ABE2] text-white rounded-full"
              >
                NEXT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

