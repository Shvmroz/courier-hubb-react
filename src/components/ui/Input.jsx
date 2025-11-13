import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = React.forwardRef(
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
      ${fullWidth ? 'w-full' : ''} h-[56px] px-4 rounded-xl border text-sm font-manrope
      focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400
      bg-white text-text placeholder-gray-400 transition-all duration-200
      ${error ? 'border-red-500 focus:ring-red-400 focus:border-red-400' : 'border-gray-300 hover:border-gray-400'}
      ${type === "password" ? "pr-10" : ""}
      ${className}
    `.trim();

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1 font-manrope">
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
            {...props}
          />

          {type === "password" && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
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
          <p className="mt-1 text-sm text-red-500 font-manrope">{error}</p>
        )}
      </div>
    );
  }
);

// TextField component for compatibility
const TextField = React.forwardRef((props, ref) => {
  return <Input ref={ref} {...props} fullWidth />;
});

Input.displayName = "Input";
TextField.displayName = "TextField";

export { Input, TextField };
