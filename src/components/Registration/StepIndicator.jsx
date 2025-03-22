import React from "react";

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="w-1/4 border">
        <img
          src={steps[currentStep].image}
          alt={steps[currentStep].title}
          className="w-full h-full"
        />
    </div>
  );
};

export default StepIndicator;
