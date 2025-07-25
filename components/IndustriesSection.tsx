import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Factory, Zap, Building2, Truck, Wrench, Shield } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Advanced manufacturing solutions and process optimization",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Zap,
    title: "Energy & Power",
    description: "Renewable energy systems and power infrastructure",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Building materials and construction engineering",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Logistics and transportation infrastructure solutions",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Wrench,
    title: "Oil & Gas",
    description: "Petroleum industry equipment and services",
    image:
      "https://images.unsplash.com/photo-1625180726018-580b17371d52?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Shield,
    title: "Defense",
    description: "Military and defense technology solutions",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export function IndustriesSection() {
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

        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group  border-[#0000001A]  overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary/80 " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <industry.icon className="h-12 w-12 mx-auto mb-3" />
                    <h3 className="text-xl">{industry.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-center">
                  {industry.description}
                </p>
                <div className="mt-4 text-center">
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
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
