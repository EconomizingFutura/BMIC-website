import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Advanced Manufacturing Plant",
    client: "TechCorp Industries",
    category: "Manufacturing",
    location: "Detroit, MI",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability.",
  },
  {
    title: "Solar Power Infrastructure",
    client: "GreenEnergy Solutions",
    category: "Energy",
    location: "Phoenix, AZ",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability.",
  },
  {
    title: "Commercial Complex",
    client: "Urban Development Co.",
    category: "Construction",
    location: "New York, NY",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability.",
  },
  {
    title: "Port Logistics Center",
    client: "Maritime Logistics Inc.",
    category: "Transportation",
    location: "Long Beach, CA",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability.",
  },
  {
    title: "Offshore Platform",
    client: "Ocean Energy Corp",
    category: "Oil & Gas",
    location: "Gulf of Mexico",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1625180726018-580b17371d52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability.",
  },
  {
    title: "Defense Communication System",
    client: "DoD Contract",
    category: "Defense",
    location: "Classified",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability.",
  },
];

export function BlogsSection() {
  return (
    <section id="projects" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Technical <span className="text-primary">Blogs & Resources</span>
          </h2>
          <p className="font-normal text-[16px] leading-[25.59px] tracking-normal text-center mx-auto  max-w-4xl">
            Stay updated with the latest trends, technologies, and best
            practices in industrial insulation, cold storage, HVAC systems, and
            energy efficiency solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              className="group border-[#00591933] border-2  overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#DBEAFE] border-[#BEDBFF] border rounded-[6.75px] text-[#1447E6] ">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-3 px-6">
                <div className="space-y-3">
                  <h3 className="text-xl text-gray-900 font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <Button className=" w-full flex">
                        <span>Read Full Article</span>
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
