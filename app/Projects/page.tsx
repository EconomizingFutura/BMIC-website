import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  ArrowLeft,
  Filter,
  Thermometer,
  Snowflake,
  Wind,
  Building2,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface ProjectsPageProps {
  onBackToHome: () => void;
}

type ProjectType = "all" | "insulation" | "cold-storage" | "ducting";

export function ProjectsPage({ onBackToHome }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const projects = [
    {
      id: 1,
      title: "Pharmaceutical Cold Storage Facility",
      type: "cold-storage" as ProjectType,
      location: "Mumbai, India",
      client: "Global Pharma Corp",
      image:
        "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Industrial Pipe Insulation Project",
      type: "insulation" as ProjectType,
      location: "Chennai, India",
      client: "Petrochemical Industries Ltd",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Commercial HVAC Ducting System",
      type: "ducting" as ProjectType,
      location: "Bangalore, India",
      client: "Tech Tower Complex",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#caddd0]  bg-gradient-to-br from-primary/60 from-primary/5 via-white to-white py-20">
        <div className="container mx-auto px-4 relative">
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-8 !bg-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6">
              Our <span className="text-primary"> Project Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Explore our comprehensive portfolio of completed and ongoing
              projects across thermal insulation, cold storage, and HVAC ducting
              systems. Each project demonstrates our commitment to quality,
              innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#F9FAFB] ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-primary" />
            <span className="text-sm text-gray-600">Filter by Type:</span>
            {[
              {
                value: "all",
                label: "All Projects",
                icon: <Building2 className="h-4 w-4" />,
              },
              {
                value: "insulation",
                label: "Thermal Insulation",
                icon: <Thermometer className="h-4 w-4" />,
              },
              {
                value: "cold-storage",
                label: "Cold Storage",
                icon: <Snowflake className="h-4 w-4" />,
              },
              {
                value: "ducting",
                label: "HVAC & Ducting",
                icon: <Wind className="h-4 w-4" />,
              },
            ].map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                onClick={() => setActiveFilter(option.value as ProjectType)}
                className={
                  activeFilter === option.value
                    ? "bg-primary text-white"
                    : "border-primary/30 text-primary"
                }
              >
                {option.icon}
                <span className="ml-2">{option.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border border-[#00591933]"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg text-white mb-1">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.location}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">Client: {project.client}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
