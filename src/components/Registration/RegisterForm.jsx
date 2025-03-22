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


import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import CareerYouNeed from "./CareerYouNeed";
import GuestDetails from "./GuestDetails";
import Submission from "./Submission";
import Images from "../../assets/images/Image";

const steps = [
  { title: "Questionnaire", image: Images.Steper1 },
  { title: "Details", image: Images.Steper2 },
  { title: "Thank You", image: Images.Steper3 },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex itmes-center h-[100vh] px-16 py-10 gap-3">

      <StepIndicator steps={steps} currentStep={currentStep} />

      <div className="w-3/4 py-4 border">
        <div className="bg-[linear-gradient(350deg,#e8f8fd,#FFFFFF)] h-full px-4 rounded-lg shadow-md">
        <div className="">
          {currentStep === 0 && <CareerYouNeed />}
          {currentStep === 1 && <GuestDetails />}
          {currentStep === 2 && <Submission />}
        </div>

        <div className="flex justify-end space-x-4 mt-7 mr-14">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 bg-[#29ABE2] text-white rounded-full"
            >
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-[#29ABE2] text-white rounded-full"
            >
              Next
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

