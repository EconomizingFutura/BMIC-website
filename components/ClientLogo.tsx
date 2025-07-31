"use client";
import React from "react";
import Image from "next/image";

import {
  spic,
  sivalaya,
  ramraj,
  proventus,
  pertifi,
  lotte,
  infosys,
  fourrts_logo,
  foreach,
  dlf,
  akshaya,
  britannina,
  // bro,
  adithyabrila,
} from "@/components/figma/logos/index";

const allLogos = [
  // { name: "Boldrocchi", logo: bro },
  { name: "SPIC", logo: spic },
  { name: "Sivalaya", logo: sivalaya },
  { name: "Ramraj", logo: ramraj },
  { name: "Proventus", logo: proventus },
  { name: "Pertifi", logo: pertifi },
  { name: "Lotte", logo: lotte },
  { name: "Infosys", logo: infosys },
  { name: "Fourrts", logo: fourrts_logo },
  { name: "Foreach", logo: foreach },
  { name: "DLF", logo: dlf },
  { name: "Akshaya", logo: akshaya },
  { name: "Britannina", logo: britannina },
  { name: "Adithya Birla", logo: adithyabrila },
];

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
            {[...allLogos, ...allLogos, ...allLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-md px-6 min-w-[200px] flex items-center gap-3 justify-center max-h-20"
              >
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-[60px] "
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
          width: calc(
            200px * ${allLogos.length} * 2 + 32px * ${allLogos.length} * 2
          );
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogo;
