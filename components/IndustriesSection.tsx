import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Factory, Zap, Building2, Wrench } from "lucide-react";
import { useDropdownStore } from "./store/toggleDropdown";

const industries = [
  {
    icon: Factory,
    title: "Pharma",
    description:
      "Hygienic and energy-efficient systems for food processing units and FMCG manufacturing facilities.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Factory,
    title: "Food & FMCG",
    description:
      "Hygienic and energy-efficient systems for food processing units and FMCG manufacturing facilities.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Zap,
    title: "Commercial & Real Estate",
    description:
      "Reliable thermal and acoustic solutions for corporate offices, malls, and high-rise buildings",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Building2,
    title: "Engineering & Infrastructure",
    description:
      "Heavy-duty insulation and ventilation support for engineering plants and infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Wrench,
    title: "Agro & Chemicals",
    description:
      "Protective insulation and ducting for agro industries, chemical plants, and fertilizer units.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  // {
  //   icon: Shield,
  //   title: "Defense",
  //   description: "Military and defense technology solutions",
  //   image:
  //     "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  // },
];

export function IndustriesSection() {
  const { isOpen, toggle, close } = useDropdownStore();
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Key <span className="text-primary">Industries</span> We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored
            solutions that meet the unique challenges of each sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 wrap-anywhere  lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  fill
                />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <industry.icon className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-xl">{industry.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {industry.description}
                </p>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => (!isOpen ? toggle() : close())}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
