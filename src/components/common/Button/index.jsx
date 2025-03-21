import React from "react";

const CustomButton = ({ className = "", children }) => {
  let baseStyles =
    " py-2 font-bold  rounded-full transition duration-200 cursor-pointer flex justify-center items-center";

  return <button className={`${baseStyles} ${className}`}>{children}</button>;
};

export default CustomButton;
