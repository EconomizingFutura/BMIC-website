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
import { DuctGroup } from "@/components/figma/images";

export default function DuctingSolutionsPage() {
  const router = useRouter();
  const onBackToHome = () => router.push("/");
  const handleBroucher = () => router.push("/contact");

  const downloadDoc = [
    {
      title: "Various safety documents",
      description: "Guidelines, records ensuring workplace safety compliance.",
      type: "PDF",
      size: "2.4 MB",
      button: "Download",
      icon: <FileText className="h-8 w-8 text-primary" />,
      file: "/pdfs/TDS_DUCTING.pdf",
    },
    {
      title: "Tech data sheet",
      description: "Detailed specifications for product technical performance",
      type: "PDF",
      size: "5.1 MB",
      button: "Download",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      file: "/pdfs/TDS_DUCTING.pdf",
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
      description:
        "Industry-leading efficiency with optimized airflow and minimal leakage",
      features: [
        "Pressure-tested systems",
        "Long lifespan components",
        "Smooth interiors reduce airflow resistance.",
      ],
    },
    {
      icon: <Shield />,
      title: "Safety & Compliance",
      description:
        "ISO-certified, OSHA-compliant ducting built to meet rigorous safety standards.",
      features: ["ISO 9001:2015", "OSHA Compliant", "Fire-rated materials"],
    },
    {
      icon: <Settings />,
      title: "Advanced Technology",
      description:
        "Precision-fabricated ducting with modern fabrication tools and smart integration.",
      features: [
        "CAD/CAM-Based Fabrication",
        "Leak-proof Sealing",
        "Modular Assembly",
      ],
    },
    {
      icon: <Globe />,
      title: "Global Support",
      description:
        "Pan-India service with local technical teams and remote project support.",
      features: [
        "Projects in 50+ Cities",
        "Fast Turnaround",
        "Custom Engineering Support",
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
                  Engineered to deliver precise air flow control and thermal
                  efficiency, our ducting solutions are tailored for industrial,
                  commercial, and specialized applications. From HVAC
                  distribution to cleanroom-grade installations, our systems
                  ensure high performance, low leakage, and long-term
                  durability. We use corrosion-resistant materials, acoustic
                  treatment options, and advanced sealing techniques to meet
                  demanding environmental, acoustic, and thermal requirements.
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
                  src={DuctGroup}
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
              Discover the advanced features that make our ducting systems stand
              out.
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
                <p className="text-[#4A5565]  text-sm max-w-96  w-full ">
                  {a.description}
                </p>
                <div className="text-[#6A7282] text-[10.5px] py-1 max-w-xs  w-full flex justify-between">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:p-4">
            {/* Performance Card */}
            <Card className="rounded-[12.75px] min-h-[298px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Performance</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Airflow Efficiency:</span>
                  <span className="text-end block">≥90%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Static Pressure:</span>
                  <span className="text-end block">Up to 2500 Pa</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Leakage Class:</span>
                  <span className="text-end block">Class C (SMACNA)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Operating Temp:</span>
                  <span className="text-end block">-20°C to +80°C</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Acoustic Insulation:</span>
                  <span className="text-end block">Up to 30 dB (Optional)</span>
                </li>
              </ul>
            </Card>

            {/* Dimensions Card */}
            <Card className="rounded-[12.75px] min-h-[298px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Dimensions</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Standard Sizes:</span>
                  <span className="text-end block">
                    Custom (Rectangular/Circular)
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Thickness Range:</span>
                  <span className="text-end block">
                    0.5mm – 1.2mm(Sheet Metal)
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Lengths:</span>
                  <span className="text-end block">1m – 2.5m per section</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Flange Type:</span>
                  <span className="text-end block">
                    GI Angle / TDF / Cleat-type
                  </span>
                </li>
              </ul>
            </Card>

            {/* Materials Card */}
            <Card className="rounded-[12.75px] min-h-[298px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Materials</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Core Material:</span>
                  <span className="text-end block">
                    Galvanized Iron / Aluminium / Stainless Steel
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Coating:</span>
                  <span className="text-end block">
                    Zinc / Anodized / Polished
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Insulation:</span>
                  <span className="text-end block">
                    Glass Wool,Nitrile Rubber
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fasteners & Sealants:</span>
                  <span className="text-end block">
                    Fire-retardant, Non-toxic
                  </span>
                </li>
              </ul>
            </Card>

            {/* Compliance Card */}
            <Card className="rounded-[12.75px] min-h-[298px] max-h-[248px] md:max-w-[252px] h-full w-full border border-[#00000010] p-6 bg-[#FFFFFF]">
              <h2 className="text-lg font-semibold">Compliance</h2>
              <div className="w-full border-t border-[#00591933]" />
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fabrication Standards:</span>
                  <span className="text-end block">
                    SMACNA / DW144 / IS 655
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fire Safety:</span>
                  <span className="text-end block">IS 4351, ASTM E84</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Environmental:</span>
                  <span className="text-end block">
                    CFC-Free, RoHS Compliant
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">Fire Safety:</span>
                  <span className="text-end block md:max-w-24">
                    OSHA Aligned Practices
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#4A5565]">
                    Quality Certifications:
                  </span>
                  <span className="text-end block">
                    ISO 9001:2015, CE Certified
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
