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
import { useRouter } from "next/navigation";
import { SoundProofGroup } from "@/components/figma/images";

export default function SoundProofingSolutionPage() {
  const router = useRouter();
  const onBackToHome = () => router.push("/");

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
      file: "/pdfs/TDS_CS.pdf",
    },
    {
      title: "Installation Manual",
      description: "Step-by-step installation and setup guidelines",
      type: "PDF",
      size: "5.1 MB",
      button: "Download",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      file: "/pdfs/TDS_CS.pdf",
    },
    // {
    //   title: "Safety Certificates",
    //   description: "ISO certifications and compliance documentation",
    //   type: "PDF",
    //   size: "1.8 MB",
    //   button: "Download",
    //   icon: <Shield className="h-8 w-8 text-primary" />,
    // },
    // {
    //   title: "CAD Drawings",
    //   description: "Detailed engineering drawings and 3D models",
    //   type: "DWG",
    //   size: "12.3 MB",
    //   icon: <Settings className="h-8 w-8 text-primary" />,
    //   button: "Download",
    // },
  ];
  const handleBroucher = () => router.push("/contact");
  const keyFeatures = [
    {
      icon: <Zap />,
      title: "High Performance",
      description: "",
      features: [
        "Industry-leading sound absorption and noise reduction capabilities",
        "Customized acoustic solutions tailored to project specifications",
        "Durable materials ensuring long-lasting noise control",
      ],
    },
    {
      icon: <Shield />,
      title: "Safety & Compliance",
      description: "",
      features: [
        "Compliant with national and international acoustic standards",
        "Fire-retardant and non-toxic materials for safe indoor use",
        "ISO 9001:2015 certified manufacturing processes",
      ],
    },
    {
      icon: <Settings />,
      title: "Advanced Technology",
      description: "",
      features: [
        "Precision-engineered acoustic panels and barriers",
        "Modular, easy-to-install designs for quick deployment",
        "Integration with HVAC and ducting systems for noise reduction",
      ],
    },
    {
      icon: <Globe />,
      title: "Global Support",
      description: "",
      features: [
        "Technical teams available across India for on-site consultation",
        "Remote assistance and acoustic performance analysis",
        "Successful projects completed in 40+ cities",
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                  Advanced
                  <span className="text-primary">
                    {" "}
                    Sound Proofing <br className="hidden sm:block" /> Solution{" "}
                  </span>
                  System
                </h1>
                <p className="text-base  text-gray-600 leading-relaxed ">
                  Designed to significantly reduce noise pollution and enhance
                  acoustic comfort, our sound proofing solutions are engineered
                  for industrial, commercial, and residential applications.
                  Whether for noisy machinery enclosures, HVAC noise control,
                  recording studios, or office partitions, our systems deliver
                  superior sound attenuation, durability, and ease of
                  installation. We combine high-performance materials with
                  precision engineering to meet stringent noise control
                  regulations and client requirements.
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
                  onClick={handleBroucher}
                  size="lg"
                  className="bg-primary hover:bg-green-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:text-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Request Quote</span>{" "}
                  <Mail className="ml-2 relative h-5 w-5" />
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
                  src={SoundProofGroup}
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
              Discover the key features that make our sound proofing systems
              exceptional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-start  lg:grid-cols-4 gap-8">
            {keyFeatures.map((a) => (
              <Card
                key={a.description}
                className="text-start rounded-[12.75px] h-[282px] py-6 px-4 gap-2  border-[#0000001A] border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center  mb-4">
                  {a.icon}
                </div>
                <h3 className="text-lg text-start text-[#101828] mb-1">
                  {a.title}
                </h3>
                <p className="text-[#4A5565]  text-sm max-w-96  w-full ">
                  {a.description}
                </p>
                <div className="text-[#6A7282] text-[10.5px] py-1 max-w-xs  w-full flex justify-between">
                  <ul className="space-y-2 list-none">
                    {a.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Dot size={16} className="text-primary" />
                        <span>{feature}</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:p-4">
            {/* Performance Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold">Performance</h2>
              <div className="w-full border-t border-[#00591933]" />

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565] max-w-36">
                    Sound Transmission Class (STC):
                  </span>
                  <span>Up to 55</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565] max-w-36">
                    Noise Reduction Coefficient (NRC):
                  </span>
                  <span>0.85</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fire Rating:</span>
                  <span>Class A (ASTM E84)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Operating Temperature:</span>
                  <span className="text-end">-20°C to +70°C</span>
                </li>
              </ul>
            </Card>

            {/* Dimensions Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold">Dimensions</h2>
              <div className="w-full border-t border-[#00591933]" />

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Panel Sizes:</span>
                  <span className="text-[#101828] max-w-40 text-end">
                    Custom (Std 600×600mm, 1200×600mm)
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565] max-w-1.5">
                    Thickness Range:
                  </span>
                  <span className="text-end text-[#101828]">25mm to 100mm</span>
                </li>
              </ul>
            </Card>

            {/* Materials Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold">Materials</h2>
              <div className="w-full border-t border-[#00591933]" />

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565] max-w-2">
                    Core Materials:
                  </span>
                  <span className="text-end">
                    Acoustic foam, mineral <br /> wool, fiberglass
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Facings:</span>
                  <span className="text-end">
                    Perforated metal,
                    <br /> fabric-wrapped, PVC laminate
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Sealants & Adhesives:</span>
                  <span className="text-end">Fire-retardant, VOC-free</span>
                </li>
              </ul>
            </Card>

            {/* Compliance Card */}
            <Card className="rounded-[12.75px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-white">
              <h2 className="text-lg font-semibold">Compliance</h2>
              <div className="w-full border-t border-[#00591933]" />

              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Acoustic Standards:</span>
                  <span className="text-end">ASTM E90, ISO 10140</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fire Safety:</span>
                  <span className="text-end">ASTM E84, IS 4091</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">
                    Environmental Standards:
                  </span>
                  <span className="text-end">RoHS, REACH</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">
                    Quality Certifications:
                  </span>
                  <span className="text-end">ISO 9001:2015, CE Mark</span>
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
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 place-items-center">
              {" "}
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

                  <a href={a.file} download>
                    <Button className="w-full max-w-56 border border-primary bg-white hover:bg-white text-primary flex items-center justify-center gap-2 px-4 py-2">
                      <Download />
                      Download
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
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
