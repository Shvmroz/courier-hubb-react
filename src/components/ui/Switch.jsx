import React from "react";

const Switch = ({ value = true, onChange, text, colClass, options = [] }) => {
  const radioOptions =
    options.length > 0
      ? options
      : [
          { label: "Active", value: true },
          { label: "Inactive", value: false },
        ];

  return (
    <div className={colClass || "col-span-12"}>
      <div className="flex items-center justify-between h-10 gap-4 bg-gray-100 dark:bg-gray-700 px-3 rounded-md border border-gray-100 dark:border-gray-600">
        {/* Left Text */}
        {text && (
          <p className="text-xs text-gray-600 dark:text-gray-400 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
            {text}
          </p>
        )}

        {/* Radio Buttons */}
        <div className="flex items-center gap-6">
          {radioOptions.map((opt, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="radio"
                name="switch-field"
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="w-4 h-4  border-gray-300 cursor-pointer"
              />
              <span className="text-sm text-gray-700 dark:text-white">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Switch;
