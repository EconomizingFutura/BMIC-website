import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Thermometer, Shield, Zap, CheckCircle, Phone, Download } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface PharmaIndustryPageProps {
  onBackToHome: () => void;
}

export function PharmaIndustryPage({ onBackToHome }: PharmaIndustryPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20 overflow-hidden">
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
              Pharmaceutical <span className="text-primary relative">
                Thermal Solutions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Specialized thermal insulation and cold storage solutions for pharmaceutical 
              manufacturing, ensuring product integrity and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-6">Industry Challenges We Address</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Thermometer className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Temperature Control</h3>
              <p className="text-gray-600">
                Maintaining precise temperature ranges for drug stability and efficacy.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meeting FDA, WHO, and other international pharmaceutical standards.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg text-gray-900 mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">
                Reducing operational costs while maintaining critical environmental conditions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-6">Our Pharmaceutical Solutions</h2>
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
                <h3 className="text-xl text-gray-900 mb-3">Cold Storage & Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Temperature-controlled storage solutions for vaccines, biologics, and temperature-sensitive medications.
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
                <h3 className="text-xl text-gray-900 mb-3">Manufacturing Process Insulation</h3>
                <p className="text-gray-600 mb-4">
                  High-performance insulation for pharmaceutical manufacturing equipment and processes.
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Ready to Discuss Your Pharmaceutical Project?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our pharmaceutical specialists for a customized thermal management solution.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              <Phone className="h-5 w-5 mr-2" />
              Contact Specialist
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="h-5 w-5 mr-2" />
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}