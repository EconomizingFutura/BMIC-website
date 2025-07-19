import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  ArrowLeft,
  Thermometer,
  Snowflake,
  Wind,
  Factory,
  Zap,
  Shield,
  Download,
  FileText,
  Phone,
  ArrowRight,
  CheckCircle,
  Wrench,
  Settings,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface ServicesPageProps {
  onBackToHome: () => void;
}

export function ServicesPage({ onBackToHome }: ServicesPageProps) {
  const services = [
    {
      id: 1,
      title: "Thermal Insulation",
      icon: <Thermometer className="h-6 w-6" />,
      description:
        "High-performance insulation solutions for industrial pipes, vessels, and equipment operating at extreme temperatures.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Temperature range: -200°C to +1000°C",
        "Energy loss reduction up to 85%",
        "Fire-resistant materials",
        "Custom fabrication available",
        "Maintenance-free operation",
        "Corrosion protection",
      ],
      applications: [
        "Petrochemical plants",
        "Power generation facilities",
        "Chemical processing units",
        "Steam distribution systems",
        "Furnaces and kilns",
        "Cryogenic applications",
      ],
      specifications: {
        materials: "Mineral wool, Ceramic fiber, Aerogel, Polyurethane",
        thickness: "25mm to 200mm",
        density: "32-160 kg/m³",
        certification: "IS 8183, ASTM C547, EN 14303",
      },
    },
    {
      id: 2,
      title: "Cold Storage Solutions",
      icon: <Snowflake className="h-6 w-6" />,
      description:
        "Precision-controlled cold storage facilities for pharmaceuticals, food processing, and specialty applications.",
      image:
        "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Temperature precision ±0.5°C",
        "Multi-zone temperature control",
        "Automated monitoring systems",
        "Energy-efficient design",
        "FDA/WHO compliance",
        "Emergency backup systems",
      ],
      applications: [
        "Pharmaceutical storage",
        "Vaccine distribution centers",
        "Food processing facilities",
        "Data center cooling",
        "Laboratory storage",
        "Blood bank facilities",
      ],
      specifications: {
        materials: "PIR/PUF panels, Stainless steel",
        thickness: "75mm to 200mm",
        density: "40-50 kg/m³",
        certification: "FDA, WHO, HACCP, ISO 22000",
      },
    },
    {
      id: 3,
      title: "HVAC & Ducting",
      icon: <Wind className="h-6 w-6" />,
      description:
        "Complete HVAC solutions including design, installation, and maintenance of air conditioning and ventilation systems.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Energy-efficient design",
        "Smart controls integration",
        "Zone-based climate control",
        "Air quality monitoring",
        "Noise reduction technology",
        "Predictive maintenance",
      ],
      applications: [
        "Commercial buildings",
        "Healthcare facilities",
        "Industrial complexes",
        "Data centers",
        "Educational institutions",
        "Hospitality sector",
      ],
      specifications: {
        materials: "Galvanized steel, Aluminum, Stainless steel",
        thickness: "0.6mm to 2.0mm",
        density: "Variable based on application",
        certification: "IS 5392, ASHRAE, SMACNA",
      },
    },
    {
      id: 4,
      title: "Industrial Solutions",
      icon: <Factory className="h-6 w-6" />,
      description:
        "Comprehensive industrial thermal management including steam systems, process heating, and equipment insulation.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Process optimization",
        "Energy recovery systems",
        "Steam trap management",
        "Heat exchanger insulation",
        "Boiler insulation",
        "Maintenance services",
      ],
      applications: [
        "Manufacturing plants",
        "Process industries",
        "Power plants",
        "Steel mills",
        "Cement plants",
        "Oil refineries",
      ],
      specifications: {
        materials: "Various based on application",
        thickness: "Custom designed",
        density: "Application specific",
        certification: "IS, ASTM, EN standards",
      },
    },
    {
      id: 5,
      title: "Energy Efficiency",
      icon: <Zap className="h-6 w-6" />,
      description:
        "Energy audit, optimization consulting, and implementation of energy-saving thermal management solutions.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Energy audits & assessments",
        "ROI analysis & reporting",
        "Carbon footprint reduction",
        "Sustainability consulting",
        "Performance monitoring",
        "Government incentive assistance",
      ],
      applications: [
        "Industrial facilities",
        "Commercial buildings",
        "Healthcare institutions",
        "Educational campuses",
        "Government buildings",
        "Residential complexes",
      ],
      specifications: {
        materials: "Smart sensors, IoT devices",
        thickness: "N/A",
        density: "N/A",
        certification: "BEE, LEED, GRIHA",
      },
    },
    {
      id: 6,
      title: "Regulatory Compliance",
      icon: <Shield className="h-6 w-6" />,
      description:
        "Ensuring compliance with international standards, safety regulations, and industry-specific requirements.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Regulatory consulting",
        "Documentation support",
        "Inspection & testing",
        "Certification assistance",
        "Training programs",
        "Compliance monitoring",
      ],
      applications: [
        "Pharmaceutical facilities",
        "Food processing plants",
        "Chemical industries",
        "Healthcare facilities",
        "Export-oriented units",
        "Government projects",
      ],
      specifications: {
        materials: "Compliant materials only",
        thickness: "As per regulations",
        density: "Standard compliant",
        certification: "All major international standards",
      },
    },
  ];

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amber-600 bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20 overflow-hidden">
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
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Comprehensive{" "}
              <span className="text-primary relative">
                Thermal Solutions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              From high-temperature industrial insulation to precision cold
              storage and energy-efficient HVAC systems, we deliver cutting-edge
              thermal management solutions tailored to your specific
              requirements.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">6</div>
                <div className="text-sm text-gray-600">Service Areas</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
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
                    {/* Key Features */}
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

                    {/* Applications */}
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

                    {/* Specifications Preview */}
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

                    {/* Action Buttons */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {/* Performance Card */}
            <div className="rounded-2xl shadow-md border p-6 bg-white">
              <h2 className="text-lg font-semibold mb-4">Performance</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Maximum Output:</span>
                  <span>10,000 units/hour</span>
                </li>
                <li className="flex justify-between">
                  <span>Efficiency Rating:</span>
                  <span>99.7%</span>
                </li>
                <li className="flex justify-between">
                  <span>Power Consumption:</span>
                  <span>15kW nominal</span>
                </li>
                <li className="flex justify-between">
                  <span>Operating Temperature:</span>
                  <span>-20°C to +60°C</span>
                </li>
              </ul>
            </div>

            {/* Dimensions Card */}
            <div className="rounded-2xl shadow-md border p-6 bg-white">
              <h2 className="text-lg font-semibold mb-4">Dimensions</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Length:</span>
                  <span>2500mm</span>
                </li>
                <li className="flex justify-between">
                  <span>Width:</span>
                  <span>1200mm</span>
                </li>
                <li className="flex justify-between">
                  <span>Height:</span>
                  <span>1800mm</span>
                </li>
                <li className="flex justify-between">
                  <span>Weight:</span>
                  <span>850kg</span>
                </li>
              </ul>
            </div>

            {/* Materials Card */}
            <div className="rounded-2xl shadow-md border p-6 bg-white">
              <h2 className="text-lg font-semibold mb-4">Materials</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Frame:</span>
                  <span>Stainless Steel 316L</span>
                </li>
                <li className="flex justify-between">
                  <span>Components:</span>
                  <span>Food Grade Materials</span>
                </li>
                <li className="flex justify-between">
                  <span>Seals:</span>
                  <span>FDA Approved</span>
                </li>
                <li className="flex justify-between">
                  <span>Coating:</span>
                  <span>Anti-corrosive</span>
                </li>
              </ul>
            </div>

            {/* Compliance Card */}
            <div className="rounded-2xl shadow-md border p-6 bg-white">
              <h2 className="text-lg font-semibold mb-4">Compliance</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Safety Standards:</span>
                  <span>ISO 9001:2015</span>
                </li>
                <li className="flex justify-between">
                  <span>Quality:</span>
                  <span>CE Marking</span>
                </li>
                <li className="flex justify-between">
                  <span>Environmental:</span>
                  <span>RoHS Compliant</span>
                </li>
                <li className="flex justify-between">
                  <span>Industry:</span>
                  <span>GMP Certified</span>
                </li>
              </ul>
            </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadDoc.map((a) => (
              <Card className="text-center py-6 px-1 gap-2 border-[#0000001A] border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {a.icon}
                </div>
                <h3 className="text-lg text-gray-900 mb-1">{a.title}</h3>
                <p className="text-[#4A5565] text-sm">{a.description}</p>
                <div className="text-[#6A7282] text-[10.5px] py-1 max-w-56 mx-auto w-full flex justify-between">
                  <p>{a.type}</p>
                  <p>{a.size}</p>
                </div>
                <Button className="max-w-56 border-primary border bg-[#FFFFFF] hover:bg-white text-primary mx-auto w-full">
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
