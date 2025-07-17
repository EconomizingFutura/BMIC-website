import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Users, Target, Award, Building2, MapPin, Briefcase, TrendingUp, CheckCircle, Star, Globe } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface AboutPageProps {
  onBackToHome: () => void;
}

export function AboutPage({ onBackToHome }: AboutPageProps) {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Executive Officer",
      experience: "20+ years",
      expertise: "Industrial Thermal Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      experience: "15+ years",
      expertise: "Cold Storage Systems",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b898?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Engineer Amit Singh",
      role: "Head of Operations",
      experience: "18+ years",
      expertise: "HVAC & Project Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Meera Patel",
      role: "Director of Engineering",
      experience: "12+ years",
      expertise: "Energy Efficiency & Sustainability",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const clientLogos = [
    { name: "Reliance Industries", logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=RELIANCE" },
    { name: "Tata Group", logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=TATA" },
    { name: "Adani Group", logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=ADANI" },
    { name: "Bajaj", logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=BAJAJ" },
    { name: "Mahindra", logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=MAHINDRA" },
    { name: "L&T", logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=L%26T" }
  ];

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
              About Our Company
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Leading the Future of <span className="text-primary relative">
                Industrial Solutions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              With over two decades of excellence in industrial insulation, cold storage, 
              and HVAC solutions, we've established ourselves as India's premier thermal 
              management company.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="text-2xl text-primary mb-1">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </Card>
            <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="text-2xl text-primary mb-1">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </Card>
            <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="text-2xl text-primary mb-1">50+</div>
              <div className="text-sm text-gray-600">Expert Team</div>
            </Card>
            <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
              <div className="text-2xl text-primary mb-1">15</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Our Story
                </Badge>
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                  Building Excellence Since 1999
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with a vision to revolutionize thermal management solutions in India, 
                  our company has grown from a small engineering firm to a leading industrial 
                  solutions provider. We specialize in high-performance insulation systems, 
                  precision cold storage facilities, and energy-efficient HVAC installations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to innovation, quality, and customer satisfaction has earned 
                  us the trust of Fortune 500 companies across pharmaceuticals, petrochemicals, 
                  food processing, and data center industries.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg text-gray-900 mb-1">₹1000Cr+</div>
                  <div className="text-sm text-gray-600">Projects Value</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg text-gray-900 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial facility"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg text-gray-900">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Purpose
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving the future of industrial thermal management through innovation, 
              sustainability, and uncompromising quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-primary">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver world-class thermal management solutions that enhance energy 
                    efficiency, ensure product integrity, and support sustainable industrial 
                    growth across India and beyond.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700 text-sm">Customer-centric approach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700 text-sm">Innovative technology adoption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700 text-sm">Sustainable practices</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-accent">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted and innovative thermal management partner, 
                    setting global standards for quality, efficiency, and environmental 
                    responsibility in industrial solutions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700 text-sm">Global leadership in thermal solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700 text-sm">Zero-carbon industrial processes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-gray-700 text-sm">Industry 4.0 integration</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Leadership Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings together decades of industry experience, 
              technical expertise, and visionary thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-white/90">{member.role}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="text-gray-900">{member.experience}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Expertise:</span>
                      <p className="text-gray-900 mt-1">{member.expertise}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Infrastructure
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">World-Class Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our state-of-the-art manufacturing and testing facilities ensure the highest 
              quality standards in every project we deliver.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="text-lg text-gray-900">Manufacturing Unit</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  50,000 sq ft advanced manufacturing facility with automated production 
                  lines and quality control systems.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Gurgaon, Haryana</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Testing laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="text-lg text-gray-900">Testing Laboratory</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  NABL accredited testing lab with advanced thermal testing equipment 
                  and certification capabilities.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Corporate office"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h3 className="text-lg text-gray-900">Corporate Office</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Modern corporate headquarters with design studios, training centers, 
                  and customer experience zones.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Partnering with Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to work with some of India's most respected companies, 
              delivering solutions that drive their success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300 group">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trust us with their thermal management needs.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Become Our Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}