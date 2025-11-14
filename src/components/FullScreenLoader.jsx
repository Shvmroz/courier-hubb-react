import React from "react";

const FullScreenLoader = () => {
  return (
    <div className="h-screen w-full bg-[#faff00] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full mt-8">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="CourierHubb Logo"
          className="w-[357px] max-h-full object-contain"
          />

        {/* Loader at bottom */}
        <div className="mt-8 dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
