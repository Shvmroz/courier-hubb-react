import React from "react";

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "contained",
      color = "default",
      size = "default",
      fullWidth = false,
      disabled = false,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] font-manrope";

    const sizes = {
      small: "h-8 px-3 text-sm",
      medium: "h-10 px-4 text-sm",
      large: "h-12 px-6 text-base",
      default: "h-10 px-4 text-sm",
    };

    const colorVariants = {
      primary: {
        contained:
          "bg-primary text-text hover:bg-primary-dark focus:ring-primary shadow-sm",
        outlined:
          "border border-primary bg-transparent text-primary hover:bg-primary/10 focus:ring-primary",
        text: "bg-transparent text-primary hover:bg-primary/10 focus:ring-primary",
      },
      secondary: {
        contained:
          "bg-text text-primary hover:bg-gray-800 focus:ring-text shadow-sm",
        outlined:
          "border border-text bg-transparent text-text hover:bg-gray-50 focus:ring-text",
        text: "bg-transparent text-text hover:bg-gray-50 focus:ring-text",
      },
      error: {
        contained:
          "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-sm",
        outlined:
          "border border-red-500 bg-transparent text-red-500 hover:bg-red-50 focus:ring-red-500",
        text: "bg-transparent text-red-500 hover:bg-red-50 focus:ring-red-500",
      },
      default: {
        contained:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300 shadow-sm",
        outlined:
          "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
        text: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
      },
    };

    const colorStyles =
      colorVariants[color]?.[variant] || colorVariants.default.contained;
    const sizeStyles = sizes[size];

    const combinedClassName = `
      ${baseStyles} 
      ${colorStyles} 
      ${sizeStyles} 
      ${fullWidth ? "w-full" : ""} 
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
