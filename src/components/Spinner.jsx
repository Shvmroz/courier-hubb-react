import React from "react";

export const Spinner = () => {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full mt-8">

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

