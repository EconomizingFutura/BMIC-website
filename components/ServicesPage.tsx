import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  ArrowLeft,
  Download,
  FileText,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Settings,
  Building2,
  Wrench,
  Mail,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

const keyFeatures = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "High Performance",
    description: "Industry-leading efficiency with 99.7% uptime guarantee",
    specs: ["24/7 Operation", "Fast Response Time", "Automated Systems"],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safety & Compliance",
    description: "ISO certified with comprehensive safety protocols",
    specs: ["ISO 9001:2015", "OSHA Compliant", "CE Marked"],
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Advanced Technology",
    description: "Cutting-edge automation and control systems Operations",
    specs: [
      "IoT Integration",
      "Real-time Monitoring",
      "Predictive Maintenance",
    ],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Support",
    description: "Worldwide service network with local expertise",
    specs: ["50+ States", "Local Teams", "Remote Support"],
  },
];

const specifications = [
  {
    category: "Performance",
    items: [
      { label: "Maximum Output", value: "10,000 units/hour" },
      { label: "Efficiency Rating", value: "99.7%" },
      { label: "Power Consumption", value: "15kW nominal" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
  },
  {
    category: "Dimensions",
    items: [
      { label: "Length", value: "2500mm" },
      { label: "Width", value: "1200mm" },
      { label: "Height", value: "1800mm" },
      { label: "Weight", value: "850kg" },
    ],
  },
  {
    category: "Materials",
    items: [
      { label: "Frame", value: "Stainless Steel 316L" },
      { label: "Components", value: "Food Grade Materials" },
      { label: "Seals", value: "FDA Approved" },
      { label: "Coating", value: "Anti-corrosive" },
    ],
  },
  {
    category: "Compliance",
    items: [
      { label: "Safety Standards", value: "ISO 9001:2015" },
      { label: "Quality", value: "CE Marking" },
      { label: "Environmental", value: "RoHS Compliant" },
      { label: "Industry", value: "GMP Certified" },
    ],
  },
];

const applicationAreas = [
  {
    title: "Food & Beverage",
    description:
      "Complete processing solutions for food and beverage manufacturing",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    applications: [
      "Dairy Processing",
      "Beverage Production",
      "Food Packaging",
      "Quality Control",
    ],
  },
  {
    title: "Pharmaceutical",
    description:
      "Precision equipment for pharmaceutical manufacturing and packaging",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    applications: [
      "Tablet Production",
      "Liquid Filling",
      "Sterile Processing",
      "Quality Assurance",
    ],
  },
  {
    title: "Chemical Processing",
    description: "Robust systems for chemical and petrochemical industries",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    applications: [
      "Mixing Systems",
      "Distillation",
      "Separation",
      "Storage Solutions",
    ],
  },
  {
    title: "Automotive",
    description: "Automated solutions for automotive manufacturing processes",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    applications: [
      "Assembly Lines",
      "Paint Systems",
      "Quality Testing",
      "Material Handling",
    ],
  },
];

const downloadableResources = [
  {
    title: "Technical Data Sheet",
    description: "Complete technical specifications and performance data",
    fileType: "PDF",
    size: "2.4 MB",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Installation Manual",
    description: "Step-by-step installation and setup guidelines",
    fileType: "PDF",
    size: "5.1 MB",
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: "Safety Certificates",
    description: "ISO certifications and compliance documentation",
    fileType: "PDF",
    size: "1.8 MB",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "CAD Drawings",
    description: "Detailed engineering drawings and 3D models",
    fileType: "DWG",
    size: "12.3 MB",
    icon: <Settings className="h-6 w-6" />,
  },
];

interface ServicesPageProps {
  onBackToHome: () => void;
}

export function ServicesPage({ onBackToHome }: ServicesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Product Overview */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-accent/30 py-20 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary rounded-full animate-pulse" />
          <div className="absolute top-60 right-32 w-24 h-24 bg-primary/20 rounded-lg rotate-45 animate-bounce delay-100" />
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-primary/30 rotate-12 animate-pulse delay-200" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-bounce delay-300" />

          {/* Geometric grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-16 gap-2 h-full">
              {Array.from({ length: 80 }).map((_, i) => (
                <div key={i} className="border-r border-primary/5 h-full" />
              ))}
            </div>
          </div>

          {/* Floating tech elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-ping" />
          <div
            className="absolute bottom-1/4 right-1/3 w-6 h-6 border border-primary/40 rounded-lg rotate-45 animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-8 hover:bg-primary hover:text-white transition-colors shadow-lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                Industrial Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                Advanced{" "}
                <span className="text-primary relative">
                  Manufacturing
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </span>{" "}
                Systems
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                State-of-the-art industrial equipment designed for maximum
                efficiency, reliability, and performance. Our solutions
                integrate seamlessly into your existing operations while
                delivering measurable improvements.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-primary"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  ISO Certified
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-primary"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  99.7% Uptime
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-primary"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Global Support
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 shadow-lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Product Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Manufacturing equipment"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Control systems"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Industrial automation"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Quality control"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-48 h-48 border border-primary/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-36 h-36 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Key Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Why Choose Our <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advanced features that make our industrial systems stand out.

            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.specs.map((spec, specIndex) => (
                      <li
                        key={specIndex}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-accent/20 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-lg rotate-12 animate-spin"
            style={{ animationDuration: "12s" }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Technical Specifications
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Detailed <span className="text-primary">Specifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical data for informed decision-making and
              seamless integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-4 pb-3 border-b border-primary/20">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start"
                      >
                        <span className="text-gray-600 text-sm">
                          {item.label}:
                        </span>
                        <span className="text-gray-900 text-sm ml-2">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-32 h-32 bg-primary/20 rounded-lg rotate-45 animate-bounce"
            style={{ animationDuration: "4s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Industry Applications
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Versatile <span className="text-primary">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solutions serve diverse industries with specialized
              configurations for each sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applicationAreas.map((area, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      Industry Focus
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {area.applications.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-accent/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Technical Resources
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Download <span className="text-primary">Documentation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access comprehensive technical documentation, certificates, and
              installation guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableResources.map((resource, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span>{resource.fileType}</span>
                    <span>{resource.size}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/20 rounded-lg rotate-45 animate-bounce delay-300" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Get in Touch
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Request a <span className="text-primary">Custom Quote</span>
              </h2>
              <p className="text-lg text-gray-600">
                Ready to transform your operations? Contact our experts for a
                personalized consultation.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        Full Name *
                      </label>
                      <Input
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        Phone Number
                      </label>
                      <Input
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <Building2 className="h-4 w-4 mr-2 text-primary" />
                        Company Name
                      </label>
                      <Input
                        placeholder="Enter company name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-700 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                      Project Requirements *
                    </label>
                    <Textarea
                      placeholder="Tell us about your project requirements, timeline, and specific needs..."
                      className="border-gray-300 focus:border-primary min-h-32"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-primary hover:bg-primary/90 flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </Card>
              <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600">sales@company.com</p>
              </Card>
              <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-gray-900 mb-2">Live Chat</h4>
                <p className="text-gray-600">Available 24/7</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
