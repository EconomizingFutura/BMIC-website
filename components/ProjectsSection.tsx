import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";

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
      "Complete automation system implementation for a 50,000 sq ft manufacturing facility.",
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
      "Design and installation of 100MW solar power plant with energy storage systems.",
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
      "Structural engineering and project management for 40-story commercial building.",
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
      "Automated cargo handling system for major port facility operations.",
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
      "Engineering and installation of deep-water drilling platform systems.",
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
      "Secure communication infrastructure for military installations.",
  },
];

interface ProjectsSectionProps {
  onNavigateToProjects: () => void;
}

export function ProjectsSection({
  onNavigateToProjects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various
            industries, showcasing our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  fill
                />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>

              <CardContent className="px-6">
                <div className="space-y-3">
                  <h3 className="text-xl text-gray-900 font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">Client:</span>
                      <span>{project.client}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onNavigateToProjects}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
