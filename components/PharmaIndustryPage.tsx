import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, Shield, Beaker, Thermometer, Clock, CheckCircle, AlertTriangle, TrendingUp, Award, Mail, Phone, User, MessageSquare, Download, FileText, Target, Zap, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industryChallenges = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Stringent Regulatory Compliance",
    description: "Meeting FDA, EMA, and other global regulatory requirements for pharmaceutical manufacturing",
    impact: "Critical",
    solutions: ["GMP-compliant systems", "Automated documentation", "Validation protocols"]
  },
  {
    icon: <Thermometer className="h-8 w-8" />,
    title: "Temperature & Environment Control",
    description: "Maintaining precise environmental conditions for drug stability and efficacy",
    impact: "High",
    solutions: ["HVAC systems", "Clean room technology", "Monitoring sensors"]
  },
  {
    icon: <Beaker className="h-8 w-8" />,
    title: "Contamination Prevention",
    description: "Ensuring sterile manufacturing environments and preventing cross-contamination",
    impact: "Critical",
    solutions: ["Barrier systems", "Air filtration", "Aseptic processing"]
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Production Efficiency",
    description: "Balancing quality requirements with production speed and cost-effectiveness",
    impact: "Medium",
    solutions: ["Automation systems", "Lean manufacturing", "Process optimization"]
  }
];

const relevantProducts = [
  {
    name: "Pharmaceutical Processing Equipment",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Processing",
    applications: ["Tablet compression", "Capsule filling", "Liquid processing", "Powder handling"],
    features: ["GMP compliance", "Easy cleaning", "Precise control", "Data logging"],
    specifications: {
      "Capacity": "Up to 500,000 tablets/hour",
      "Accuracy": "±0.5% weight variation",
      "Material": "316L Stainless Steel",
      "Standards": "FDA 21 CFR Part 11"
    }
  },
  {
    name: "Clean Room Systems",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Environment Control",
    applications: ["Sterile manufacturing", "Quality control", "R&D laboratories", "Packaging"],
    features: ["HEPA filtration", "Positive pressure", "Temperature control", "Humidity control"],
    specifications: {
      "Classification": "ISO 14644-1 Class 5-8",
      "Air Changes": "20-600 per hour",
      "Temperature": "18-24°C ±2°C",
      "Humidity": "45-65% RH ±5%"
    }
  },
  {
    name: "Quality Control Instruments",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Testing & Analysis",
    applications: ["Content uniformity", "Dissolution testing", "Microbial testing", "Stability studies"],
    features: ["Automated testing", "Data integrity", "Method validation", "Regulatory compliance"],
    specifications: {
      "Precision": "RSD < 1.0%",
      "Range": "0.1-100% assay",
      "Software": "21 CFR Part 11 compliant",
      "Throughput": "Up to 96 samples"
    }
  },
  {
    name: "Packaging & Serialization",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Packaging",
    applications: ["Primary packaging", "Secondary packaging", "Serialization", "Track & trace"],
    features: ["Anti-counterfeiting", "Regulatory compliance", "High-speed operation", "Data management"],
    specifications: {
      "Speed": "Up to 1,000 units/minute",
      "Accuracy": "99.9% verification",
      "Standards": "GS1, EU FMD compliant",
      "Integration": "ERP/MES connectivity"
    }
  }
];

const caseStudies = [
  {
    title: "Global Pharma Leader - Tablet Manufacturing Upgrade",
    client: "Fortune 500 Pharmaceutical Company",
    challenge: "Modernize aging tablet production line while maintaining continuous operation",
    solution: "Phased implementation of automated tablet compression and coating systems",
    results: [
      "40% increase in production capacity",
      "99.8% quality compliance rate",
      "25% reduction in manufacturing costs",
      "Zero production downtime during transition"
    ],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "18 months",
    investment: "$15M",
    roi: "250% in 3 years"
  },
  {
    title: "Biotech Startup - Clean Room Facility",
    client: "Emerging Biotech Company",
    challenge: "Design and build GMP-compliant facility for cell therapy manufacturing",
    solution: "Complete turnkey clean room solution with advanced environmental controls",
    results: [
      "FDA approval in first inspection",
      "ISO 14644-1 Class 5 certification",
      "30% energy savings vs industry standard",
      "Scalable design for future expansion"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "12 months",
    investment: "$8M",
    roi: "180% in 2 years"
  },
  {
    title: "Generic Drug Manufacturer - Quality System Implementation",
    client: "Mid-size Generic Manufacturer",
    challenge: "Implement comprehensive quality management system for regulatory compliance",
    solution: "Integrated QMS with automated testing and documentation systems",
    results: [
      "100% ANDA approval rate",
      "50% reduction in quality investigations",
      "Real-time batch release capability",
      "Improved regulatory inspection outcomes"
    ],
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    duration: "24 months",
    investment: "$12M",
    roi: "300% in 4 years"
  }
];

const pharmaStats = [
  {
    icon: <Award className="h-8 w-8" />,
    number: "150+",
    label: "Pharma Projects",
    description: "Successfully completed pharmaceutical manufacturing projects"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    number: "100%",
    label: "Regulatory Success",
    description: "FDA and EMA approval rate for our implemented systems"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    number: "25+",
    label: "Countries Served",
    description: "Global pharmaceutical clients across six continents"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    number: "35%",
    label: "Average Efficiency Gain",
    description: "Typical production efficiency improvement achieved"
  }
];

interface PharmaIndustryPageProps {
  onBackToHome: () => void;
}

export function PharmaIndustryPage({ onBackToHome }: PharmaIndustryPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-accent/20 py-20 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-blue-500 rounded-full animate-pulse" />
          <div className="absolute top-60 right-32 w-24 h-24 bg-primary/20 rounded-lg rotate-45 animate-bounce delay-100" />
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-blue-400/30 rotate-12 animate-pulse delay-200" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-accent/10 rounded-full animate-bounce delay-300" />
          
          {/* Medical-themed floating elements */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border border-blue-500/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
          
          {/* Molecular structure pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  {i % 4 === 0 && <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />}
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
            className="mb-8 hover:bg-primary hover:text-white transition-colors shadow-lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                Pharmaceutical Industry
              </Badge>
              <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
                Advancing <span className="text-blue-600 relative">
                  Pharmaceutical
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-primary rounded-full"></div>
                </span> Manufacturing
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Delivering cutting-edge solutions for pharmaceutical manufacturing, 
                ensuring compliance, quality, and efficiency in every aspect of drug production 
                from R&D to commercial scale manufacturing.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">
                  <Shield className="h-4 w-4 mr-2" />
                  FDA Compliant
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">
                  <Award className="h-4 w-4 mr-2" />
                  GMP Certified
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-blue-300 text-blue-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Validated Systems
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {pharmaStats.slice(0, 2).map((stat, index) => (
                  <Card key={index} className="text-center p-4 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Pharmaceutical laboratory"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Medicine manufacturing"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Quality control testing"
                    className="w-full h-32 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Clean room facility"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating pharmaceutical elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 -right-8 w-8 h-8 border-2 border-blue-400/30 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-48 h-48 border border-blue-400/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-36 h-36 bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-lg rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">
              Industry Challenges
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Overcoming <span className="text-red-600">Critical Challenges</span> in Pharma
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The pharmaceutical industry faces unique challenges that require specialized solutions 
              and deep expertise to ensure patient safety and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryChallenges.map((challenge, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-200 transition-colors">
                      {challenge.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg text-gray-900">{challenge.title}</h3>
                        <Badge 
                          variant={challenge.impact === 'Critical' ? 'destructive' : challenge.impact === 'High' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {challenge.impact}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm text-gray-900 mb-2">Our Solutions:</h4>
                    {challenge.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500 rounded-lg rotate-12 animate-spin" style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-primary/20 rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Our Solutions
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Specialized <span className="text-blue-600">Products</span> for Pharma
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of pharmaceutical manufacturing equipment and systems 
              designed to meet the strictest quality and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {relevantProducts.map((product, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {product.category}
                    </Badge>
                    <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      <Download className="h-4 w-4 mr-2" />
                      Specs
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl text-white mb-2">{product.name}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-900 mb-2">Applications:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-gray-900 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="text-sm text-gray-900 mb-2">Specifications:</h4>
                      <div className="space-y-1">
                        {Object.entries(product.specifications).map(([key, value], specIndex) => (
                          <div key={specIndex} className="flex justify-between text-sm">
                            <span className="text-gray-600">{key}:</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Proven <span className="text-green-600">Results</span> in Pharmaceutical Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how our solutions have transformed pharmaceutical 
              manufacturing operations and delivered measurable results.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30 mb-2">
                        Case Study {index + 1}
                      </Badge>
                      <h3 className="text-xl text-white">{study.title}</h3>
                      <p className="text-white/90 text-sm">{study.client}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm text-red-600 mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Challenge
                        </h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-blue-600 mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2" />
                          Solution
                        </h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-green-600 mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Results Achieved
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span>{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-lg text-primary mb-1">{study.duration}</div>
                          <div className="text-xs text-gray-600">Project Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg text-primary mb-1">{study.investment}</div>
                          <div className="text-xs text-gray-600">Investment</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg text-green-600 mb-1">{study.roi}</div>
                          <div className="text-xs text-gray-600">ROI</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-accent/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400/20 rounded-lg rotate-45 animate-bounce delay-300" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Get in Touch
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Ready to Transform Your <span className="text-primary">Pharmaceutical Operations?</span>
              </h2>
              <p className="text-lg text-gray-600">
                Contact our pharmaceutical experts for a customized consultation and solution design.
              </p>
            </div>

            <Card className="shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        Full Name *
                      </label>
                      <Input placeholder="Enter your full name" className="border-gray-300 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" className="border-gray-300 focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        Phone Number
                      </label>
                      <Input placeholder="Enter your phone number" className="border-gray-300 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <Beaker className="h-4 w-4 mr-2 text-primary" />
                        Company/Organization
                      </label>
                      <Input placeholder="Enter company name" className="border-gray-300 focus:border-primary" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-700 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                      Project Requirements *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your pharmaceutical manufacturing needs, compliance requirements, and project timeline..."
                      className="border-gray-300 focus:border-primary min-h-32"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-primary hover:bg-primary/90 flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Request Pharma Consultation
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Expert Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {pharmaStats.map((stat, index) => (
                <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}