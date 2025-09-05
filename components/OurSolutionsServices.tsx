import { Award, Shield, ChevronRight, Settings } from "lucide-react";
import {
  solution1,
  solution2,
  solution3,
  solution4,
} from "@/components/figma/images/index";
import Image from "next/image";

interface OurSolutionsServicesProps {
  onNavigateToInsulation: () => void;
  onNavigateToColdStorage: () => void;
  onNavigateToDucting: () => void;
  onNavigateToSound: () => void;
}

export function OurSolutionsServices({
  onNavigateToInsulation,
  onNavigateToColdStorage,
  onNavigateToDucting,
  onNavigateToSound,
}: OurSolutionsServicesProps) {
  const certifications = [
    {
      icon: Shield,
      title: "Insulation",
      subtitle: "Quality Management",
      description:
        "Certified quality management system ensuring consistent delivery of products and services.",
      validUntil: "2025",
      color: "bg-blue-500",
      image: solution4,
      navigate: onNavigateToInsulation,
    },

    {
      icon: Shield,
      title: "HVAC / Ducting",
      subtitle: "Occupational Health & Safety",
      description:
        "Workplace safety management system ensuring the health and safety of all personnel.",
      validUntil: "2025",
      color: "bg-red-500",
      image: solution3,
      navigate: onNavigateToDucting,
    },
    {
      icon: Shield,
      title: "Cold Storage",
      subtitle: "Environmental Management",
      description:
        "Environmental management system certification demonstrating our commitment to sustainability.",
      validUntil: "2025",
      color: "bg-green-500",
      image: solution2,
      navigate: onNavigateToColdStorage,
    },
    {
      icon: Award,
      title: "Soundproofing",
      subtitle: "Oil & Gas Quality",
      description:
        "American Petroleum Institute quality management system for oil and gas industry.",
      validUntil: "2024",
      color: "bg-purple-500",
      image: solution1,
      navigate: onNavigateToSound,
    },
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold lg:text-5xl text-gray-900 mb-4">
            Our <span className="text-primary">Solutions</span> & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your business needs, from
            concept to completion with ongoing support.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="text-center rounded-[5px] w-full lg:max-w-60 bg-white border-0 "
            >
              <div className=" space-y-3">
                <div className="relative  lg:w-60 h-40 mx-auto">
                  <Image
                    src={cert.image}
                    alt="img"
                    fill
                    className="object-cover rounded-t-[5px]"
                  />
                </div>
                <div className="px-4 py-2">
                  <Settings size={20} color="#005919" />
                  <div
                    className="flex justify-between cursor-pointer py-4 "
                    onClick={cert.navigate}
                  >
                    <h3 className="text-lg font-medium  text-gray-900 ">
                      {cert.title}
                    </h3>
                    <ChevronRight color="#005919" className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSolutionsServices;
