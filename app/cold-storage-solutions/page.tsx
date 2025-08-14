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

export default function ColdStorageSolutionsPage() {
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
      title: "Various safety documents",
      description: "Guidelines, records ensuring workplace safety compliance.",
      type: "PDF",
      size: "2.4 MB",
      button: "Download",
      icon: <FileText className="h-8 w-8 text-primary" />,
      file: "/pdfs/TDS_COLDSTORAGE.pdf",
    },
    {
      title: "Tech data sheet",
      description: "Detailed specifications for product technical performance",
      type: "PDF",
      size: "5.1 MB",
      button: "Download",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      file: "/pdfs/TDS_COLDSTORAGE.pdf",
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

  const keyFeatures = [
    {
      icon: <Zap />,
      title: "High Performance",
      description: "",
      features: [
        "Industry-leading insulation with high R-value for superior temperature retention",
        "Moisture-resistant and airtight systems preventing condensation and thermal bridging",
        "Durable, hygienic finishes for compliance with food and pharma safety standards.",
      ],
    },
    {
      icon: <Shield />,
      title: "Safety & Compliance",
      description: "",
      features: [
        "ISO-certified, HACCP and GMP compliant insulation systems.",
        "Fire-retardant materials designed to meet international safety standards.",
        "Environmentally safe components with low VOC emissions.",
      ],
    },
    {
      icon: <Settings />,
      title: "Advanced Technology",
      description: "",
      features: [
        "Precision-fabricated insulated panels with cam-lock joints.",
        "Modular, quick-assembly designs for fast installation.",
        "Integration with cold storage doors, piping, and sealing systems.",
      ],
    },
    {
      icon: <Globe />,
      title: "Global Support",
      description: "",
      features: [
        "Pan-India network with experienced local technical teams and remote project assistance.",
        "Completed projects across 40+ cities.",
        "Fast project turnaround and customized engineering support",
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
                    Ducting <br className="hidden sm:block" /> Solution{" "}
                  </span>
                  System
                </h1>
                <p className="text-base  text-gray-600 leading-relaxed ">
                  Engineered to deliver exceptional thermal performance and
                  moisture control, our cold storage insulation solutions are
                  tailored for industrial, commercial, and specialized
                  temperature-controlled applications. From frozen storage
                  warehouses to ripening chambers, our systems ensure minimal
                  heat ingress, airtight sealing, and long-term durability. We
                  use high-quality insulation materials, vapor barriers, and
                  advanced sealing techniques to meet stringent environmental,
                  thermal, and hygiene requirements.
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
              Discover the advanced features that make our cold storage
              insulation systems stand out.
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-start  lg:grid-cols-4 gap-8">
            {keyFeatures.map((a) => (
              <Card
                key={a.description}
                className="text-start rounded-[12.75px] h-[303px] py-6 px-4 gap-2  border-[#0000001A] border"
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
            <Card className="rounded-[12.75px] min-h-[303px] max-h-[255px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Performance</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">
                    Thermal Conductivity (K-value):
                  </span>
                  <span className="text-end block">0.022 – 0.025 W/mK</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">
                    Operating Temperature Range :
                  </span>
                  <span className="text-end block">-50°C to +80°C</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">
                    Moisture Vapor Transmission Rate :
                  </span>
                  <span className="text-end block">≤ 0.05 perms</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Compressive Strength:</span>
                  <span className="text-end block">≥ 150 kPa</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fire Rating:</span>
                  <span className="text-end block">
                    Class 1 / Class B (FM Approved)
                  </span>
                </li>
              </ul>
            </Card>

            {/* Dimensions Card */}
            <Card className="rounded-[12.75px] min-h-[303px] max-h-[255px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Dimensions</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Panel Thickness:</span>
                  <span className="text-end block">40 mm to 150 mm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Panel Sizes:</span>
                  <span className="text-end block">Custom as per design</span>
                </li>
              </ul>
            </Card>

            {/* Materials Card */}
            <Card className="rounded-[12.75px] min-h-[303px] max-h-[255px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Materials</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Core Material:</span>
                  <span className="text-end block">PUF, PIR, EPS</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Coating:</span>
                  <span className="text-end block">
                    Pre-coated GI, Aluminum, Stainless Steel
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Sealants & Fasteners :</span>
                  <span className="text-end block">
                    Food-grade, Fire-retardant
                  </span>
                </li>
                {/* <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fasteners & Sealants:</span>
                  <span className="text-end block">
                    Fire-retardant, Non-toxic
                  </span>
                </li> */}
              </ul>
            </Card>

            {/* Compliance Card */}
            <Card className="rounded-[12.75px] min-h-[303px] max-h-[255px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Compliance</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fabrication Standards:</span>
                  <span className="text-end block">IS 14885, ASTM C518</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fire Safety:</span>
                  <span className="text-end block">IS 4351, ASTM E84</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Environmental:</span>
                  <span className="text-end block">RoHS, REACH, CFC-Free</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Quality Certification:</span>
                  <span className="text-end block md:max-w-24">
                    ISO 9001:2015, CE Certified
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Hygiene:</span>
                  <span className="text-end block">
                    HACCP, GMP, FDA Compliant
                  </span>
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

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 place-items-center">
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
    </div>
  );
}
