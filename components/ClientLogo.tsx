import React from "react";
import Image from "next/image";
import { clientLogos as logos } from "./TestimonialsSection";

const ClientLogo = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-green-800 via-green-800 to-green-700 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Trusted by <span className="text-[#B9F8CF]">Industry Leaders</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {logos.map((logo) => (
              <div
                key={`first-${logo.name}`}
                className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-md px-6 min-w-[200px] flex items-center justify-center min-h-10"
              >
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
            {logos.map((logo) => (
              <div
                key={`second-${logo.name}`}
                className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-md p-6 min-w-[200px] flex items-center justify-center"
              >
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 80s linear infinite;
          width: calc(200px * ${logos.length} * 2 + 32px * ${logos.length} * 2);
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogo;
