import { Award, Shield, ChevronRight, Settings } from "lucide-react";
import {
  ColdStorage,
  DUCT,
  automobile,
  SoundProof,
} from "@/components/figma/images/index";
import Image from "next/image";
const certifications = [
  {
    icon: Shield,
    title: "Insulation",
    subtitle: "Quality Management",
    description:
      "Certified quality management system ensuring consistent delivery of products and services.",
    validUntil: "2025",
    color: "bg-blue-500",
    image: automobile,
  },
  {
    icon: Shield,
    title: "Cold Storage",
    subtitle: "Environmental Management",
    description:
      "Environmental management system certification demonstrating our commitment to sustainability.",
    validUntil: "2025",
    color: "bg-green-500",
    image: ColdStorage,
  },
  {
    icon: Shield,
    title: "HVAC / Ducting",
    subtitle: "Occupational Health & Safety",
    description:
      "Workplace safety management system ensuring the health and safety of all personnel.",
    validUntil: "2025",
    color: "bg-red-500",
    image: DUCT,
  },
  {
    icon: Award,
    title: "Soundproofing",
    subtitle: "Oil & Gas Quality",
    description:
      "American Petroleum Institute quality management system for oil and gas industry.",
    validUntil: "2024",
    color: "bg-purple-500",
    image: SoundProof,
  },
];

export function OurSolutionsServices() {
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
        <div className="grid md:grid-cols-2 mx-auto lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="text-center rounded-[5px]   lg:max-w-60 bg-white border-0 "
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
                  <div className="flex justify-between py-4 ">
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
