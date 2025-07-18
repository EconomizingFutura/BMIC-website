import React from "react";
import { clientLogos } from "./TestimonialsSection";

const ClientLogo = () => {
  return (
    <div
      className="text-center flex flex-col  w-full bg-gradient-to-br lg:max-h-[473px] h-auto lg:h-[473px]"
    >
      <h3 className="lg:text-4xl text-3xl text-white text-gray-900 pt-24 font-semibold mb-8">
        Trusted by <span className="text-[#B9F8CF]"> Industry Leaders</span>{" "}
      </h3>
      
      <div className="grid grid-cols-2 pb-24 lg:pb-0 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
        {clientLogos.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2.5 lg:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ClientLogo;
