"use client";

import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  ArrowLeft,
  Thermometer,
  Shield,
  CheckCircle,
  MoveRight,
  MapPin,
  Calendar,
  CircleCheckBig,
  Dot,
  Book,
  Clock,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { servicebanner } from "@/components/figma/images";
import { useRouter } from "next/navigation";

export default function PharmaIndustryPage() {
  const router = useRouter();
  const onBackToHome = () => router.push("/");
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

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      label: "Processing",
      title: "Pharmaceutical Processing Equipment",
      applications: [
        "Tablet compression",
        "Capsule filling",
        "Liquid processing",
        "Powder handling",
      ],
      features: [
        "GMP compliance",
        "Easy cleaning",
        "Precise control",
        "Data logging",
      ],
      specs: {
        capacity: "Up to 500,000 tablets/hour",
        accuracy: "±0.5% weight variation",
        material: "316L Stainless Steel",
        standards: "FDA 21 CFR Part 11",
      },
    },
    {
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      label: "Packaging",
      title: "Packaging & Serialization",
      applications: [
        "Tablet compression",
        "Capsule filling",
        "Liquid processing",
        "Powder handling",
      ],
      features: [
        "GMP compliance",
        "Easy cleaning",
        "Precise control",
        "Data logging",
      ],
      specs: {
        capacity: "Up to 500,000 tablets/hour",
        accuracy: "±0.5% weight variation",
        material: "316L Stainless Steel",
        standards: "FDA 21 CFR Part 11",
      },
    },
  ];

  const data = [
    {
      title: "Stringent Regulatory Compliance",
      icon: <Shield className="md:w-7 w-6 h-6 md:h-7 text-primary" />,
      priority: "Critical",
      priorityColor: "bg-[#005919] text-white",
      description:
        "Meeting FDA, EMA, and other global regulatory requirements for pharmaceutical manufacturing",
      solutions: [
        "GMP-compliant systems",
        "Automated documentation",
        "Validation protocols",
      ],
    },
    {
      title: "Temperature & Environment Control",
      priority: "High",
      priorityColor: "bg-[#005919] text-white",
      icon: <Thermometer className="md:w-7 w-6 h-6 md:h-7 text-primary" />,
      description:
        "Maintaining precise environmental conditions for drug stability and efficacy",
      solutions: [
        "HVAC systems",
        "Clean room technology",
        "Monitoring sensors",
      ],
    },
    {
      title: "Contamination Prevention",
      priority: "Critical",
      icon: <Book className="md:w-7 w-6 h-6 md:h-7 text-primary" />,
      priorityColor: "bg-[#005919] text-white",
      description:
        "Ensuring sterile manufacturing environments and preventing cross-contamination",
      solutions: ["Barrier systems", "Air filtration", "Aseptic processing"],
    },
    {
      title: "Production Efficiency",
      priority: "Medium",
      icon: <Clock className="md:w-7 w-6 h-6 md:h-7 text-primary" />,
      priorityColor: "bg-[#E8F5EA] ",
      description:
        "Balancing quality requirements with production speed and cost-effectiveness",
      solutions: [
        "Automation systems",
        "Lean manufacturing",
        "Process optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-b from-[#c9dcce] via-[#fffff] to-[#fffff] py-20 lg:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="space-y-8 max-w-[586px] w-full ">
              <Button
                variant="outline"
                onClick={onBackToHome}
                className="mb-8 !bg-white  shadow-lg border-primary/30"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl  font-semibold leading-tight text-gray-900">
                  Advancing
                  <span className="text-primary"> Pharmaceutical</span>
                  <br /> Manufacturing
                </h1>
                <p className="text-base  text-gray-600 leading-relaxed ">
                  Delivering cutting-edge solutions for pharmaceutical
                  manufacturing, ensuring compliance, quality, and <br />{" "}
                  efficiency in every aspect of drug production from R&D to
                  commercial scale manufacturing.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["ISO Certified", "99.7% Uptime", "Global Support"].map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center border border-[#0059194D] py-2 px-4 rounded-md space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-primary font-medium text-[10.5px] leading-[14px] tracking-normal text-center align-middle">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-green-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:text-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative"> WhatsApp Us</span>{" "}
                  <MoveRight className="ml-2 h-5 relative w-5" />
                </Button>
              </div>
            </div>

            <div className="relative w-full bg-transparent">
              <Card className="overflow-hidden bg-transparent border-none w-full">
                <Image
                  src={servicebanner}
                  alt="Industrial facility"
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                  priority
                />
              </Card>

              {/* Floating element */}
              {/* <div className="absolute  top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-accent rounded-full animate-pulse delay-300" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative">
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
              Pharmaceutical Industry
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Pharmaceutical{" "}
              <span className="text-primary relative">
                Thermal Solutions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Specialized thermal insulation and cold storage solutions for
              pharmaceutical manufacturing, ensuring product integrity and
              regulatory compliance.
            </p>
          </div>
        </div>
      </section> */}
      {/* Industry Challenges */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-6">
              Industry Challenges We Address
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Thermometer className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">
                Temperature Control
              </h3>
              <p className="text-gray-600">
                Maintaining precise temperature ranges for drug stability and
                efficacy.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Meeting FDA, WHO, and other international pharmaceutical
                standards.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">
                Reducing operational costs while maintaining critical
                environmental conditions.
              </p>
            </Card>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Industry Challenges
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Overcoming
              <span className="text-primary"> Critical Challenges </span>
              in Pharma
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              The pharmaceutical industry faces unique challenges that require
              specialized solutions and deep expertise to ensure patient safety
              and regulatory compliance.
            </p>
          </div>

          <div className=" w-full py-12  flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
              {data.map((item, index) => (
                <Card
                  key={index}
                  className="border border-black/10 rounded-[12.75px]  bg-[#FFFFFF] md:max-w-[532px]  opacity-100 w-full gap-2.5 md:px-5 py-5"
                >
                  <div className="flex items-center justify-between  p-5">
                    <div className="flex items-start space-x-2">
                      <div className="bg-green-100 md:p-3 p-2 rounded-full">
                        {item.icon}
                      </div>
                      <div className=" flex flex-col space-y-2.5 justify-start">
                        <div className="flex md:flex-row flex-col items-start md:items-center space-x-2">
                          <h2 className="text-lg font-semibold">
                            {item.title}
                          </h2>
                          <p
                            className={`${item.priorityColor} ${
                              item.priority.toLowerCase() == "medium"
                                ? "text-primary"
                                : " "
                            } text-xs font-medium px-2 py-1 rounded-[6.75px] w-min`}
                          >
                            {item.priority}
                          </p>
                        </div>

                        <p className="text-sm max-w-sm  text-[#4A5565]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold px-5">Our Solutions:</h3>
                  <ul className="space-y-3 text-sm px-5 text-gray-700">
                    {item.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our Solutions */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-6">
              Our Pharmaceutical Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cold storage facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">
                  Cold Storage & Distribution
                </h3>
                <p className="text-gray-600 mb-4">
                  Temperature-controlled storage solutions for vaccines,
                  biologics, and temperature-sensitive medications.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">-80°C to +25°C range</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">±0.5°C precision</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">24/7 monitoring</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Manufacturing insulation"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-3">
                  Manufacturing Process Insulation
                </h3>
                <p className="text-gray-600 mb-4">
                  High-performance insulation for pharmaceutical manufacturing
                  equipment and processes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">GMP compliant materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Easy to clean surfaces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Chemical resistance</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Our Solution
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Specialized <span className="text-primary">Products </span> for
              Pharma
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              Comprehensive range of pharmaceutical manufacturing equipment and
              systems designed to meet the strictest quality and regulatory
              requirements.
            </p>
          </div>

          <div className=" w-full py-12  flex items-center justify-center">
            <div className="w-full max-w-6xl  grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
                >
                  <div className="relative  h-44 w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover bg-black w-full h-full"
                    />
                    <span className="absolute top-3 left-3 text-[#FFFFFF33] bg-transparent text-xs px-2 py-1.5 rounded-[6.75px] border border-[#FFFFFF4D]">
                      {card.label}
                    </span>
                    <h3 className=" absolute bottom-1 left-4 font-normal leading-[24.5px] text-[#FFFFFF] text-[17.5px]">
                      {card.title}
                    </h3>
                  </div>
                  <div className="md:px-6 px-2 pb-6   pt-4 flex flex-col flex-1">
                    <div className="text-sm mt-1">
                      <span className="font-semibold text-gray-800 py-1">
                        Applications:
                      </span>
                      <div className="grid grid-cols-2 gap-y-1 mb-2 mt-1">
                        {card.applications.map((app, i) => (
                          <p key={i} className="flex text-blue-700 ">
                            <Dot size={20} /> <span>{app}</span>
                          </p>
                        ))}
                      </div>
                      <span className="font-semibold text-gray-800 block py-1">
                        Key Features:
                      </span>
                      <div className="grid grid-cols-2 gap-y-1 mb-3 mt-1">
                        {card.features.map((feat, i) => (
                          <p
                            key={i}
                            className="flex items-center font-normal text-[#364153]  gap-2.5"
                          >
                            <CircleCheckBig
                              color="#00A63E"
                              className="h-4 w-4"
                            />
                            {feat}
                          </p>
                        ))}
                      </div>
                      <div className="bg-[#F9FAFB] rounded-lg px-3 py-2 mt-2 shadow-sm text-xs text-gray-700 text-[12.3px]">
                        <p className=" text-[#101828]  py-2">Specifications:</p>
                        <div className="grid grid-cols-1 gap-2.5">
                          <div className="text-[#101828] flex justify-between font-normal">
                            <span className=" text-[#4A5565]">Capacity:</span>
                            <span>{card.specs.capacity}</span>
                          </div>
                          <div className="text-[#101828] flex justify-between font-normal">
                            <span className=" text-[#4A5565]">Accuracy:</span>
                            <span>{card.specs.accuracy}</span>
                          </div>
                          <div className="text-[#101828] flex justify-between font-normal">
                            <span className=" text-[#4A5565]">Material:</span>
                            <span>{card.specs.material}</span>
                          </div>
                          <div className="text-[#101828] flex justify-between font-normal">
                            <span className=" text-[#4A5565]">Standards:</span>
                            <span>{card.specs.standards}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Proven <span className="text-primary">Results </span>
              in Pharmaceutical Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl  mx-auto">
              Real-world examples of how our solutions have transformed
              pharmaceutical manufacturing <br /> operations and delivered
              measurable results.
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
        </div>
      </section>
    </div>
  );
}
