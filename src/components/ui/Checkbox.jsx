import React from "react";

const Checkbox = ({ text, checked, onChange }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer appearance-none w-6 h-6 rounded-md border border-gray-300 
            transition-all duration-200 cursor-pointer 
            checked:bg-primary checked:border-primary flex-shrink-0"
        />
        <svg
          className={`absolute w-4 h-4 pointer-events-none transition-all duration-200 
            ${checked ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#212121"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="text-sm text-gray-800   leading-none">{text}</span>
    </div>
  );
};

export default Checkbox;
