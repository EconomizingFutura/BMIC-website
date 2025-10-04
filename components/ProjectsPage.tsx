"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Filter,
  MapPin,
  Calendar,
  Building2,
  Thermometer,
  Snowflake,
  Wind,
  CheckCircle,
  Eye,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

type ProjectType = "all" | "insulation" | "cold-storage" | "ducting";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  location: string;
  date: string;
  client: string;
  description: string;
  image: string;
  features: string[];
  specifications: {
    size: string;
    temperature?: string;
    duration: string;
    investment: string;
  };
  status: "completed" | "ongoing";
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pharmaceutical Cold Storage Facility",
    type: "cold-storage",
    location: "Mumbai, India",
    date: "2024",
    client: "Global Pharma Corp",
    description:
      "Complete cold storage solution for vaccine and medicine storage with temperature ranges from -80°C to +25°C",
    image:
      "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-zone temperature control",
      "Automated monitoring",
      "Emergency backup systems",
      "FDA compliance",
    ],
    specifications: {
      size: "50,000 sq ft",
      temperature: "-80°C to +25°C",
      duration: "12 months",
      investment: "$3.2M",
    },
    status: "completed",
    tags: ["Pharmaceutical", "Cold Chain", "Vaccines", "FDA Compliant"],
  },
  {
    id: 2,
    title: "Industrial Pipe Insulation Project",
    type: "insulation",
    location: "Chennai, India",
    date: "2024",
    client: "Petrochemical Industries Ltd",
    description:
      "High-temperature pipe insulation for petrochemical processing facility with advanced thermal protection",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "High-temperature resistance",
      "Energy efficient",
      "Corrosion protection",
      "Easy maintenance",
    ],
    specifications: {
      size: "15 km pipeline",
      temperature: "Up to 650°C",
      duration: "8 months",
      investment: "$1.8M",
    },
    status: "completed",
    tags: ["Petrochemical", "High Temperature", "Energy Savings", "Industrial"],
  },
  {
    id: 3,
    title: "Commercial HVAC Ducting System",
    type: "ducting",
    location: "Bangalore, India",
    date: "2024",
    client: "Tech Tower Complex",
    description:
      "Complete HVAC ducting system for 40-story commercial building with energy-efficient design",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Energy efficient design",
      "Noise reduction",
      "Smart controls",
      "Zone-based climate control",
    ],
    specifications: {
      size: "40 floors, 2M sq ft",
      temperature: "18-26°C zones",
      duration: "14 months",
      investment: "$2.5M",
    },
    status: "completed",
    tags: ["Commercial", "HVAC", "Smart Building", "Energy Efficient"],
  },
  {
    id: 4,
    title: "Food Processing Cold Storage",
    type: "cold-storage",
    location: "Pune, India",
    date: "2023",
    client: "FreshFood Industries",
    description:
      "Large-scale cold storage facility for fresh produce with automated handling systems",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Automated storage",
      "Ripening chambers",
      "Quality monitoring",
      "Energy recovery systems",
    ],
    specifications: {
      size: "75,000 sq ft",
      temperature: "-2°C to +15°C",
      duration: "10 months",
      investment: "$4.1M",
    },
    status: "completed",
    tags: ["Food Processing", "Fresh Produce", "Automation", "Quality Control"],
  },
  {
    id: 5,
    title: "Chemical Plant Thermal Insulation",
    type: "insulation",
    location: "Gujarat, India",
    date: "2023",
    client: "Chemical Solutions Pvt Ltd",
    description:
      "Comprehensive thermal insulation for chemical processing equipment and pipelines",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Chemical resistance",
      "Fire protection",
      "Thermal efficiency",
      "Safety compliance",
    ],
    specifications: {
      size: "200 vessels & 25 km piping",
      temperature: "-40°C to +800°C",
      duration: "18 months",
      investment: "$5.2M",
    },
    status: "completed",
    tags: [
      "Chemical Processing",
      "Safety",
      "Fire Protection",
      "High Performance",
    ],
  },
  {
    id: 6,
    title: "Hospital HVAC & Ducting Upgrade",
    type: "ducting",
    location: "Delhi, India",
    date: "2024",
    client: "Metro General Hospital",
    description:
      "Critical HVAC upgrade for hospital including operation theaters and ICU units",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "HEPA filtration",
      "Positive pressure control",
      "Emergency backup",
      "Infection control",
    ],
    specifications: {
      size: "500-bed hospital",
      temperature: "20-24°C ±1°C",
      duration: "16 months",
      investment: "$3.8M",
    },
    status: "ongoing",
    tags: [
      "Healthcare",
      "Critical Systems",
      "Infection Control",
      "Emergency Systems",
    ],
  },
  {
    id: 7,
    title: "Data Center Cooling System",
    type: "cold-storage",
    location: "Hyderabad, India",
    date: "2023",
    client: "TechData Solutions",
    description:
      "Precision cooling system for high-density data center with redundant cooling loops",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Precision cooling",
      "Redundant systems",
      "Energy optimization",
      "24/7 monitoring",
    ],
    specifications: {
      size: "100,000 sq ft",
      temperature: "18-27°C precision",
      duration: "12 months",
      investment: "$6.5M",
    },
    status: "completed",
    tags: ["Data Center", "Precision Cooling", "Redundancy", "High Density"],
  },
  {
    id: 8,
    title: "Power Plant Steam Line Insulation",
    type: "insulation",
    location: "Rajasthan, India",
    date: "2023",
    client: "Thermal Power Corporation",
    description:
      "High-temperature steam line insulation for 500MW thermal power plant",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Ultra-high temperature",
      "Steam resistance",
      "Minimal heat loss",
      "Long service life",
    ],
    specifications: {
      size: "50 km steam lines",
      temperature: "Up to 1000°C",
      duration: "24 months",
      investment: "$8.2M",
    },
    status: "completed",
    tags: [
      "Power Generation",
      "Steam Systems",
      "Ultra High Temp",
      "Energy Efficiency",
    ],
  },
  {
    id: 9,
    title: "Airport Terminal HVAC System",
    type: "ducting",
    location: "Goa, India",
    date: "2024",
    client: "Goa International Airport",
    description:
      "Complete HVAC system for new international terminal with passenger comfort focus",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Large volume conditioning",
      "Energy recovery",
      "IAQ monitoring",
      "Zoned control",
    ],
    specifications: {
      size: "1.2M sq ft terminal",
      temperature: "22-26°C comfort zones",
      duration: "20 months",
      investment: "$12M",
    },
    status: "ongoing",
    tags: [
      "Aviation",
      "Large Scale",
      "Passenger Comfort",
      "International Standards",
    ],
  },
];

const filterOptions = [
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
];

interface ProjectsPageProps {
  onBackToHome: () => void;
}

export function ProjectsPage({ onBackToHome }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const getProjectTypeColor = (type: ProjectType) => {
    switch (type) {
      case "insulation":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "cold-storage":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "ducting":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getProjectTypeIcon = (type: ProjectType) => {
    switch (type) {
      case "insulation":
        return <Thermometer className="h-4 w-4" />;
      case "cold-storage":
        return <Snowflake className="h-4 w-4" />;
      case "ducting":
        return <Wind className="h-4 w-4" />;
      default:
        return <Building2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-60 right-32 w-24 h-24 bg-primary/10 rounded-lg rotate-45 animate-bounce delay-100" />
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-primary/15 rotate-12 animate-pulse delay-200" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/8 to-accent/15 rounded-full animate-bounce delay-300" />

          {/* Grid pattern for technical look */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  {i % 4 === 0 && (
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-8 hover:bg-primary hover:text-white transition-colors shadow-lg border-primary/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Project Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Our{" "}
              <span className="text-primary relative">
                Project Gallery
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio of completed and ongoing
              projects across thermal insulation, cold storage, and HVAC ducting
              systems. Each project demonstrates our commitment to quality,
              innovation, and client satisfaction.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">200+</div>
                <div className="text-sm text-gray-600">Completed Projects</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">₹500Cr+</div>
                <div className="text-sm text-gray-600">Total Investment</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">States Covered</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="h-5 w-5 text-primary" />
              <span className="text-sm text-gray-600">Filter by Type:</span>
            </div>
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                onClick={() => setActiveFilter(option.value as ProjectType)}
                className={`${
                  activeFilter === option.value
                    ? "bg-primary text-white shadow-lg"
                    : "border-primary/30 text-primary hover:bg-primary hover:text-white"
                } transition-all duration-300`}
              >
                {option.icon}
                <span className="ml-2">{option.label}</span>
                <Badge variant="secondary" className="ml-2 bg-white/20">
                  {option.value === "all"
                    ? projects.length
                    : projects.filter((p) => p.type === option.value).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "completed"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {project.status === "completed" ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </>
                      ) : (
                        "Ongoing"
                      )}
                    </Badge>
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${getProjectTypeColor(project.type)} border`}
                    >
                      {getProjectTypeIcon(project.type)}
                      <span className="ml-1 capitalize">
                        {project.type.replace("-", " ")}
                      </span>
                    </Badge>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg text-white mb-2">{project.title}</h3>
                    <div className="flex items-center text-white/90 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                      <Calendar className="h-4 w-4 ml-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-primary hover:bg-gray-100"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Client:</span>
                        <p className="text-gray-900">{project.client}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Size:</span>
                        <p className="text-gray-900">
                          {project.specifications.size}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-300 text-gray-600"
                        >
                          +{project.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">
                Try selecting a different filter to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white/30"
              >
                ×
              </Button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl text-white mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center text-white/90">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedProject.location}
                  <Calendar className="h-4 w-4 ml-4 mr-1" />
                  {selectedProject.date}
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">
                      Project Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">Project Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">
                      Project Specifications
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Client:</span>
                        <span className="text-gray-900">
                          {selectedProject.client}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Project Size:</span>
                        <span className="text-gray-900">
                          {selectedProject.specifications.size}
                        </span>
                      </div>
                      {selectedProject.specifications.temperature && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Temperature Range:
                          </span>
                          <span className="text-gray-900">
                            {selectedProject.specifications.temperature}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="text-gray-900">
                          {selectedProject.specifications.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Investment:</span>
                        <span className="text-gray-900">
                          {selectedProject.specifications.investment}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div>
                      <Badge
                        className={`${getProjectTypeColor(
                          selectedProject.type
                        )} border mb-2`}
                      >
                        {getProjectTypeIcon(selectedProject.type)}
                        <span className="ml-1 capitalize">
                          {selectedProject.type.replace("-", " ")}
                        </span>
                      </Badge>
                      <div className="text-sm text-gray-600">
                        Project Category
                      </div>
                    </div>
                    <Button
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setSelectedProject(null)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Contact for Similar Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
