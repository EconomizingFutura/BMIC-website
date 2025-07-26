"use client";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import {
  Zap,
  Shield,
  Download,
  FileText,
  CheckCircle,
  Wrench,
  Settings,
  Dot,
  Globe,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { servicebanner } from "../../components/figma/images/index";
import { useRouter } from "next/navigation";

export default function InsulationServicePage() {
  // const services = [
  //   {
  //     id: 1,
  //     title: "Thermal Insulation",
  //     icon: <Thermometer className="h-6 w-6" />,
  //     description:
  //       "High-performance insulation solutions for industrial pipes, vessels, and equipment operating at extreme temperatures.",
  //     image:
  //       "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //     features: [
  //       "Temperature range: -200°C to +1000°C",
  //       "Energy loss reduction up to 85%",
  //       "Fire-resistant materials",
  //       "Custom fabrication available",
  //       "Maintenance-free operation",
  //       "Corrosion protection",
  //     ],
  //     applications: [
  //       "Petrochemical plants",
  //       "Power generation facilities",
  //       "Chemical processing units",
  //       "Steam distribution systems",
  //       "Furnaces and kilns",
  //       "Cryogenic applications",
  //     ],
  //     specifications: {
  //       materials: "Mineral wool, Ceramic fiber, Aerogel, Polyurethane",
  //       thickness: "25mm to 200mm",
  //       density: "32-160 kg/m³",
  //       certification: "IS 8183, ASTM C547, EN 14303",
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Cold Storage Solutions",
  //     icon: <Snowflake className="h-6 w-6" />,
  //     description:
  //       "Precision-controlled cold storage facilities for pharmaceuticals, food processing, and specialty applications.",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //     features: [
  //       "Temperature precision ±0.5°C",
  //       "Multi-zone temperature control",
  //       "Automated monitoring systems",
  //       "Energy-efficient design",
  //       "FDA/WHO compliance",
  //       "Emergency backup systems",
  //     ],
  //     applications: [
  //       "Pharmaceutical storage",
  //       "Vaccine distribution centers",
  //       "Food processing facilities",
  //       "Data center cooling",
  //       "Laboratory storage",
  //       "Blood bank facilities",
  //     ],
  //     specifications: {
  //       materials: "PIR/PUF panels, Stainless steel",
  //       thickness: "75mm to 200mm",
  //       density: "40-50 kg/m³",
  //       certification: "FDA, WHO, HACCP, ISO 22000",
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "HVAC & Ducting",
  //     icon: <Wind className="h-6 w-6" />,
  //     description:
  //       "Complete HVAC solutions including design, installation, and maintenance of air conditioning and ventilation systems.",
  //     image:
  //       "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //     features: [
  //       "Energy-efficient design",
  //       "Smart controls integration",
  //       "Zone-based climate control",
  //       "Air quality monitoring",
  //       "Noise reduction technology",
  //       "Predictive maintenance",
  //     ],
  //     applications: [
  //       "Commercial buildings",
  //       "Healthcare facilities",
  //       "Industrial complexes",
  //       "Data centers",
  //       "Educational institutions",
  //       "Hospitality sector",
  //     ],
  //     specifications: {
  //       materials: "Galvanized steel, Aluminum, Stainless steel",
  //       thickness: "0.6mm to 2.0mm",
  //       density: "Variable based on application",
  //       certification: "IS 5392, ASHRAE, SMACNA",
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "Industrial Solutions",
  //     icon: <Factory className="h-6 w-6" />,
  //     description:
  //       "Comprehensive industrial thermal management including steam systems, process heating, and equipment insulation.",
  //     image:
  //       "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //     features: [
  //       "Process optimization",
  //       "Energy recovery systems",
  //       "Steam trap management",
  //       "Heat exchanger insulation",
  //       "Boiler insulation",
  //       "Maintenance services",
  //     ],
  //     applications: [
  //       "Manufacturing plants",
  //       "Process industries",
  //       "Power plants",
  //       "Steel mills",
  //       "Cement plants",
  //       "Oil refineries",
  //     ],
  //     specifications: {
  //       materials: "Various based on application",
  //       thickness: "Custom designed",
  //       density: "Application specific",
  //       certification: "IS, ASTM, EN standards",
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: "Energy Efficiency",
  //     icon: <Zap className="h-6 w-6" />,
  //     description:
  //       "Energy audit, optimization consulting, and implementation of energy-saving thermal management solutions.",
  //     image:
  //       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //     features: [
  //       "Energy audits & assessments",
  //       "ROI analysis & reporting",
  //       "Carbon footprint reduction",
  //       "Sustainability consulting",
  //       "Performance monitoring",
  //       "Government incentive assistance",
  //     ],
  //     applications: [
  //       "Industrial facilities",
  //       "Commercial buildings",
  //       "Healthcare institutions",
  //       "Educational campuses",
  //       "Government buildings",
  //       "Residential complexes",
  //     ],
  //     specifications: {
  //       materials: "Smart sensors, IoT devices",
  //       thickness: "N/A",
  //       density: "N/A",
  //       certification: "BEE, LEED, GRIHA",
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "Regulatory Compliance",
  //     icon: <Shield className="h-6 w-6" />,
  //     description:
  //       "Ensuring compliance with international standards, safety regulations, and industry-specific requirements.",
  //     image:
  //       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //     features: [
  //       "Regulatory consulting",
  //       "Documentation support",
  //       "Inspection & testing",
  //       "Certification assistance",
  //       "Training programs",
  //       "Compliance monitoring",
  //     ],
  //     applications: [
  //       "Pharmaceutical facilities",
  //       "Food processing plants",
  //       "Chemical industries",
  //       "Healthcare facilities",
  //       "Export-oriented units",
  //       "Government projects",
  //     ],
  //     specifications: {
  //       materials: "Compliant materials only",
  //       thickness: "As per regulations",
  //       density: "Standard compliant",
  //       certification: "All major international standards",
  //     },
  //   },
  // ];

  const downloadDoc = [
    {
      title: "Technical Data Sheet",
      description: "Complete technical specifications and performance data",
      type: "PDF",
      size: "2.4 MB",
      button: "Download",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "Installation Manual",
      description: "Step-by-step installation and setup guidelines",
      type: "PDF",
      size: "5.1 MB",
      button: "Download",
      icon: <Wrench className="h-8 w-8 text-primary" />,
    },
    {
      title: "Safety Certificates",
      description: "ISO certifications and compliance documentation",
      type: "PDF",
      size: "1.8 MB",
      button: "Download",
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: "CAD Drawings",
      description: "Detailed engineering drawings and 3D models",
      type: "DWG",
      size: "12.3 MB",
      icon: <Settings className="h-8 w-8 text-primary" />,
      button: "Download",
    },
  ];

  const keyFeatures = [
    {
      icon: <Zap />,
      title: "High Performance",
      description: "Industry-leading efficiency with 99.7% uptime guarantee",
      features: ["24/7 Operation", "Fast Response Time", "Automated Systems"],
    },
    {
      icon: <Shield />,
      title: "Safety & Compliance",
      description: "ISO certified with comprehensive safety protocols",
      features: ["ISO 9001:2015", "OSHA Compliant", "CE Marked"],
    },
    {
      icon: <Settings />,
      title: "Advanced Technology",
      description: "Cutting-edge automation and control systems",
      features: [
        "IoT Integration",
        "Real-time Monitoring",
        "Predictive Maintenance",
      ],
    },
    {
      icon: <Globe />,
      title: "Global Support",
      description: "Worldwide service network with local expertise",
      features: ["50+ Countries", "Local Teams", "Remote Support"],
    },
  ];
  const router = useRouter();
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
                onClick={() => router.push('/')}
                className="mb-8 !bg-white  shadow-lg border-primary/30"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                  Advanced
                  <span className="text-primary">
                    {" "}
                    Insulation <br className="hidden sm:block" /> Solution{" "}
                  </span>
                  System
                </h1>
                <p className="text-base  text-gray-600 leading-relaxed ">
                  State-of-the-art industrial equipment designed for maximum
                  efficiency, reliability, and performance. Our solutions
                  integrate seamlessly into your existing operations while
                  delivering measurable improvements.
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
                      <span className="text-[#005919] font-medium text-[10.5px] leading-[14px] tracking-normal text-center align-middle">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center"
                >
                  Request Quote <Mail className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-primary border border-primary hover:bg-white flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
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

      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg text-gray-900 mb-3">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.slice(0, 4).map((app, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {app}
                          </Badge>
                        ))}
                        {service.applications.length > 4 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-600"
                          >
                            +{service.applications.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm text-gray-900 mb-2">
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Materials:</span>
                          <p className="text-gray-700 truncate">
                            {service.specifications.materials}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500">Certification:</span>
                          <p className="text-gray-700 truncate">
                            {service.specifications.certification}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-primary hover:bg-primary/90">
                        <Phone className="h-4 w-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-white"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        TDS
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4  bg-primary/10 text-primary border-primary/20">
              Key Features
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-[52px] text-gray-900 mb-6">
              Why Choose Our
              <span className="text-primary"> Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the advanced features that set our industrial systems
              apart from the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-start  lg:grid-cols-4 gap-8">
            {keyFeatures.map((a) => (
              <Card
                key={a.description}
                className="text-start rounded-[12.75px] py-6 px-4 gap-2  border-[#0000001A] border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center  mb-4">
                  {a.icon}
                </div>
                <h3 className="text-lg text-start text-[#101828] mb-1">
                  {a.title}
                </h3>
                <p className="text-[#4A5565]  text-sm max-w-60 w-full ">
                  {a.description}
                </p>
                <div className="text-[#6A7282] text-[10.5px] py-1 max-w-56   w-full flex justify-between">
                  <ul className="list-disc list-inside space-y-1">
                    {a.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center -translate-2.5   "
                      >
                        <Dot size={25} className=" text-primary " />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4  bg-primary/10 text-primary border-primary/20">
              Technical Specifications
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-[52px] text-gray-900 mb-6">
              Detailed <span className="text-primary"> Specifications</span>{" "}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical data for informed decision-making and
              seamless integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 md:p-4">
            {/* Performance Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold ">Performance</h2>
              <div className="w-full border-t border-[#00591933]" />

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Maximum Output:</span>
                  <span className=" text-end block">10,000 units/hour</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Efficiency Rating:</span>
                  <span className=" text-end block">99.7%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Power Consumption:</span>
                  <span className=" text-end block">15kW nominal</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Operating Temperature:</span>
                  <span className=" text-end block">-20°C to +60°C</span>
                </li>
              </ul>
            </Card>

            {/* Dimensions Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold ">Dimensions</h2>
              <div className="w-full border-t border-[#00591933]" />

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Length:</span>
                  <span>2500mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Width:</span>
                  <span>1200mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Height:</span>
                  <span>1800mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Weight:</span>
                  <span>850kg</span>
                </li>
              </ul>
            </Card>

            {/* Materials Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold">Materials</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Frame:</span>
                  <span>Stainless Steel 316L</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Components:</span>
                  <span className=" text-end block">Food Grade Materials</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Seals:</span>
                  <span>FDA Approved</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Coating:</span>
                  <span>Anti-corrosive</span>
                </li>
              </ul>
            </Card>

            {/* Compliance Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold ">Compliance</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Safety Standards:</span>
                  <span>ISO 9001:2015</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Quality:</span>
                  <span>CE Marking</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Environmental:</span>
                  <span>RoHS Compliant</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Industry:</span>
                  <span>GMP Certified</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4  bg-primary/10 text-primary border-primary/20">
              Technical Resources
            </Badge>
            <h2 className="text-3xl font-semibold lg:text-[52px] text-gray-900 mb-6">
              Download <span className="text-primary"> Documentation</span>{" "}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access comprehensive technical documentation, certificates, and
              installation guides.
            </p>
          </div>
          {/* Technical Resources
           */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {downloadDoc.map((a) => (
              <Card
                key={a.description}
                className="flex flex-col items-center text-center rounded-lg p-6 gap-3 border border-[#0000001A]"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {a.icon}
                </div>

                <h3 className="text-lg text-gray-900 mb-1">{a.title}</h3>

                <p className="text-[#4A5565] text-sm max-w-60 w-full">
                  {a.description}
                </p>

                <div className="flex justify-between w-full text-[#6A7282] text-[10.5px] py-1 max-w-56">
                  <p>{a.type}</p>
                  <p>{a.size}</p>
                </div>

                <Button className="w-full max-w-56 border border-primary bg-white hover:bg-white text-primary flex items-center justify-center gap-2 px-4 py-2">
                  <Download />
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-lg rotate-45" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/15 rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-6">
              Ready to Optimize Your Thermal Management?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let our experts design a custom solution that meets your specific
              requirements and delivers exceptional performance and energy
              savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
