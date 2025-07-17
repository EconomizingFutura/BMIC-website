import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Settings, Zap, Shield, Globe, Wrench, Cog } from "lucide-react";

const solutions = [
  {
    icon: Settings,
    title: "Engineering Services",
    description: "Complete engineering design, analysis, and project management solutions for complex industrial projects.",
    features: ["CAD Design", "Structural Analysis", "Project Management", "Quality Assurance"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Zap,
    title: "Automation Solutions",
    description: "Industrial automation systems that improve efficiency, reduce costs, and enhance safety.",
    features: ["PLC Programming", "SCADA Systems", "Robotics", "Process Control"],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Comprehensive safety solutions and regulatory compliance services for all industries.",
    features: ["Safety Audits", "Compliance Training", "Risk Assessment", "Certification Support"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    icon: Globe,
    title: "Global Supply Chain",
    description: "Worldwide procurement and supply chain management for industrial components and materials.",
    features: ["Global Sourcing", "Inventory Management", "Logistics", "Quality Control"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
            Our <span className="text-primary">Solutions</span> & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your business needs, 
            from concept to completion with ongoing support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="lg:flex">
                <div className="lg:w-1/3 h-48 lg:h-auto">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="lg:w-2/3 p-6 lg:p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-700 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg text-gray-900 mb-2">Maintenance Services</h3>
            <p className="text-gray-600 text-sm">24/7 support and preventive maintenance programs</p>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg text-gray-900 mb-2">Custom Manufacturing</h3>
            <p className="text-gray-600 text-sm">Precision manufacturing for specialized components</p>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg text-gray-900 mb-2">Global Support</h3>
            <p className="text-gray-600 text-sm">Worldwide service network and technical support</p>
          </Card>
        </div>
      </div>
    </section>
  );
}