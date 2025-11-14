import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Input = React.forwardRef(
  ({ 
    className = "", 
    type = "text", 
    onKeyDown, 
    label,
    error,
    fullWidth = false,
    required = false,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleKeyDown = (e) => {
      if (type === "number" && ["e", "E"].includes(e.key)) {
        e.preventDefault();
      }
      onKeyDown?.(e);
    };

    const combinedClassName = `
      ${fullWidth ? 'w-full' : ''} h-[56px] px-4 rounded-xl border text-sm  
      focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
      bg-white text-text placeholder-gray-400 transition-all duration-200
      ${error ? 'border-red-500 focus:ring-red-400 focus:border-red-400' : 'border-gray-300 hover:border-gray-400'}
      ${type === "password" ? "pr-10" : ""}
      ${className}
    `.trim();

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1  ">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            type={type === "password" && showPassword ? "text" : type}
            ref={ref}
            onKeyDown={handleKeyDown}
            className={combinedClassName}
            required={required}
            {...props}
          />

          {type === "password" && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-gray-400"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500  ">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
