"use client";
import Lottie from "lottie-react";
import React from "react";
import { whatsappAnimation } from "./figma/images";

const WhatsAnimate = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25B43C] hover:bg-[#25B43C] text-white  rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <Lottie
          animationData={whatsappAnimation}
          className="h-12 w-12"
          loop={true}
        />
      </a>
    </div>
  );
};

export default WhatsAnimate;
