import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Target,
  Eye,
  Users,
  Building,
  Award,
  Linkedin,
  Mail,
  ArrowLeft,
  Zap,
  Globe,
  TrendingUp,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  {
    name: "John Mitchell",
    position: "Chief Executive Officer",
    experience: "25+ years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Visionary leader with extensive experience in industrial engineering and business development.",
    linkedin: "#",
    email: "john.mitchell@company.com",
  },
  {
    name: "Sarah Chen",
    position: "Chief Technology Officer",
    experience: "20+ years",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Technology expert specializing in automation systems and digital transformation.",
    linkedin: "#",
    email: "sarah.chen@company.com",
  },
  {
    name: "Michael Rodriguez",
    position: "VP of Operations",
    experience: "18+ years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Operations specialist focused on efficiency optimization and quality management.",
    linkedin: "#",
    email: "michael.rodriguez@company.com",
  },
  {
    name: "Emily Johnson",
    position: "Director of Engineering",
    experience: "15+ years",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "Engineering leader with expertise in complex industrial project management.",
    linkedin: "#",
    email: "emily.johnson@company.com",
  },
];

const infrastructureImages = [
  {
    title: "Manufacturing Facility",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "State-of-the-art 100,000 sq ft manufacturing facility with advanced automation",
  },
  {
    title: "Research & Development Lab",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Cutting-edge R&D laboratory for innovation and product testing",
  },
  {
    title: "Quality Control Center",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "ISO-certified quality control and testing facilities",
  },
  {
    title: "Warehouse & Distribution",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Modern warehouse with automated logistics and inventory systems",
  },
];

const partnerBrands = [
  {
    name: "Siemens",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=Siemens",
  },
  {
    name: "General Electric",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=GE",
  },
  {
    name: "ABB",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=ABB",
  },
  {
    name: "Schneider Electric",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=Schneider",
  },
  {
    name: "Rockwell Automation",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=Rockwell",
  },
  {
    name: "Honeywell",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=Honeywell",
  },
  {
    name: "Emerson",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=Emerson",
  },
  {
    name: "Mitsubishi",
    logo: "https://via.placeholder.com/150x80/005919/FFFFFF?text=Mitsubishi",
  },
];

const achievements = [
  {
    icon: <Globe className="h-8 w-8" />,
    number: "50+",
    label: "Countries Served",
    description: "Global presence across six continents",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered industrial solutions",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    number: "15+",
    label: "ISO Certifications",
    description: "Industry-leading quality standards",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    number: "99.8%",
    label: "Client Satisfaction",
    description: "Proven track record of excellence",
  },
];

interface AboutPageProps {
  onBackToHome: () => void;
}

export function AboutPage({ onBackToHome }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/20 py-20 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Animated floating shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-20 h-20 bg-primary/20 rounded-lg rotate-45 animate-bounce delay-100" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary/30 rotate-12 animate-pulse delay-200" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-bounce delay-300" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="border-r border-primary/10 h-full" />
              ))}
            </div>
          </div>

          {/* Additional geometric elements */}
          <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-primary/20 rounded-full animate-ping" />
          <div
            className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-primary/30 rounded-lg rotate-45 animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute top-3/4 left-1/5 w-12 h-12 bg-gradient-to-r from-primary/5 to-accent/10 rounded-full animate-pulse delay-500" />
        </div>

        {/* Hero Content with Images */}
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
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                About Our Company
              </Badge>
              <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                Building the{" "}
                <span className="text-primary relative">
                  Future
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </span>{" "}
                of Industry
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over three decades, we&apos;ve been at the forefront of
                industrial innovation, delivering cutting-edge solutions that
                transform businesses and shape the future of manufacturing and
                engineering excellence.
              </p>

              {/* Achievement Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <Card
                    key={index}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-primary mb-2 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl text-primary mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Modern office building"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Team meeting"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Industrial facility"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Innovation lab"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 -right-8 w-8 h-8 border-2 border-primary/30 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Section Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 border border-primary/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg rotate-12" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                  Our{" "}
                  <span className="text-primary relative">
                    Story
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  </span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded in 1994, our company began as a small engineering
                  consultancy with a bold vision: to revolutionize industrial
                  processes through innovative technology and unwavering
                  commitment to excellence. Today, we stand as a global leader
                  in industrial solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our journey has been marked by continuous growth, strategic
                  partnerships, and breakthrough innovations that have set new
                  industry standards. We&lsquo;ve successfully completed over
                  500 projects across six continents, serving clients from
                  startups to Fortune 500 companies.
                </p>
              </div>

              {/* Enhanced Statistics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    year: "1994",
                    label: "Company Founded",
                    icon: <Building className="h-5 w-5" />,
                  },
                  {
                    year: "500+",
                    label: "Projects Completed",
                    icon: <Target className="h-5 w-5" />,
                  },
                  {
                    year: "50+",
                    label: "Countries Served",
                    icon: <Globe className="h-5 w-5" />,
                  },
                  {
                    year: "200+",
                    label: "Team Members",
                    icon: <Users className="h-5 w-5" />,
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/20 border-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl text-primary mb-2">
                      {stat.year}
                    </div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Company office"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />

                {/* Overlay Card */}
                <Card className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-primary">
                        ISO 9001:2015 Certified
                      </div>
                      <div className="text-sm text-gray-600">
                        Quality Management Excellence
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent rounded-full animate-pulse delay-300" />
              <div
                className="absolute top-1/4 -left-6 w-12 h-12 border-2 border-primary/30 rounded-lg rotate-45 animate-spin"
                style={{ animationDuration: "6s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Visuals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-accent/30 to-primary/5 relative overflow-hidden">
        {/* Complex Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-40 h-40 border border-primary rounded-full animate-pulse" />
          <div
            className="absolute bottom-10 right-1/4 w-32 h-32 bg-primary/20 rounded-lg rotate-45 animate-bounce"
            style={{ animationDuration: "3s" }}
          />
          <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-primary rounded-full animate-ping" />
          <div
            className="absolute bottom-1/3 left-1/5 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin"
            style={{ animationDuration: "10s" }}
          />

          {/* Gradient orbs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Foundation
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Our <span className="text-primary">Mission</span> & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving forward with purpose and clear direction toward a
              sustainable industrial future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl text-gray-900">Our Mission</h3>
                </div>
                <p className="text-[#4A5565] leading-relaxed mb-6">
                  To deliver innovative engineering solutions that enhance
                  operational efficiency, ensure safety, and drive sustainable
                  growth for our clients across all industries.
                </p>
                <ul className="space-y-3 !text-[#364153]">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <span className="text-gray-700">
                      Excellence in every project
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <span className="text-gray-700">
                      Client success as our priority
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <span className="text-gray-700">
                      Sustainable business practices
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary/40" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center group-hover:bg-accent/70 transition-colors">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To be the global leader in industrial innovation, setting new
                  standards for technology integration, environmental
                  responsibility, and operational excellence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <span className="text-gray-700">
                      Global industry leadership
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <span className="text-gray-700">
                      Technological innovation
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <span className="text-gray-700">
                      Environmental stewardship
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Visual Achievement Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {achievement.icon}
                </div>
                <div className="text-2xl text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-600">
                  {achievement.description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team with Enhanced Visuals */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="h-full">
                {i % 3 === 0 && (
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Our <span className="text-primary">Leadership</span> Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company&rsquo;s
              vision and drive our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/90 hover:bg-white"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/90 hover:bg-white"
                      >
                        <Mail className="h-4 w-4 text-primary" />
                      </Button>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6 relative">
                  <h3 className="text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.position}</p>
                  <Badge
                    variant="outline"
                    className="text-xs mb-3 border-primary/30 text-primary"
                  >
                    {member.experience}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure with Enhanced Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-accent/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/4 left-10 w-32 h-32 border-2 border-primary rounded-lg rotate-12 animate-spin"
            style={{ animationDuration: "15s" }}
          />
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Facilities
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Our <span className="text-primary">Infrastructure</span> &
              Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities equipped with the latest technology to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructureImages.map((facility, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Enhanced overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div className="flex justify-end">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {index + 1} of {infrastructureImages.length}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl mb-2">{facility.title}</h3>
                      <p className="text-sm opacity-90 mb-4">
                        {facility.description}
                      </p>

                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-xs">Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced Facility Stats */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: <Building className="h-8 w-8" />,
                  number: "100,000",
                  label: "sq ft Manufacturing Space",
                  color: "from-blue-500 to-primary",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  number: "200+",
                  label: "Skilled Professionals",
                  color: "from-green-500 to-primary",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  number: "15+",
                  label: "ISO Certifications",
                  color: "from-purple-500 to-primary",
                },
                {
                  icon: <Target className="h-8 w-8" />,
                  number: "24/7",
                  label: "Operations Support",
                  color: "from-orange-500 to-primary",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="space-y-4 group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto text-white group-hover:shadow-lg transition-shadow`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partner Brands */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-pulse" />
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Our <span className="text-primary">Partners</span> & Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry-leading brands to deliver the highest
              quality solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partnerBrands.map((partner, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-12 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 relative z-10"
                />
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/5 to-accent/20 border-primary/20">
              <p className="text-gray-600 mb-6">
                Interested in becoming a partner? We&#39;re always looking for
                innovative companies to collaborate with.
              </p>
              <Button className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="h-4 w-4 mr-2" />
                Explore Partnership Opportunities
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
