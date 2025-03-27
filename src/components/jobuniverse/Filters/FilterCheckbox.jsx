import React from "react";

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex text-xs items-center space-x-2 cursor-pointer py-2">
      <div
        className={`relative w-4 h-4 flex items-center justify-center border rounded-sm transition-all 
          ${checked ? "bg-green-600 border-green-600" : "bg-white border-gray-400"}
        `}
      >
        <input
          type="checkbox"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          checked={checked}
          onChange={onChange}
        />
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
      <span className={`${checked ? "text-gray-900" : "text-gray-700"}`}>
        {label}
      </span>
    </label>
  );
}

export default FilterCheckbox;
