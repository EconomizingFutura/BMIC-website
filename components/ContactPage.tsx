import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageSquare, User, Building2, Send, CheckCircle } from "lucide-react";

interface ContactPageProps {
  onBackToHome: () => void;
}

export function ContactPage({ onBackToHome }: ContactPageProps) {
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
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Contact <span className="text-primary relative">
                Our Experts
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to discuss your industrial insulation, cold storage, or HVAC project? 
              Our team of experts is here to provide customized solutions for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you need thermal insulation for industrial processes, cold storage solutions 
                  for pharmaceuticals, or HVAC systems for commercial buildings, our experienced team 
                  is ready to help you achieve optimal performance and efficiency.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Phone Support</h3>
                      <p className="text-gray-600 mb-3">Speak directly with our technical experts</p>
                      <div className="space-y-1">
                        <p className="text-primary">+91 9876543210</p>
                        <p className="text-primary">+91 9876543211</p>
                        <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-3">Send us your project details and requirements</p>
                      <div className="space-y-1">
                        <p className="text-primary">info@company.com</p>
                        <p className="text-primary">sales@company.com</p>
                        <p className="text-sm text-gray-500">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Visit Our Office</h3>
                      <p className="text-gray-600 mb-3">Schedule a meeting at our headquarters</p>
                      <div className="space-y-1">
                        <p className="text-gray-700">123 Industrial Park, Sector 15</p>
                        <p className="text-gray-700">Gurgaon, Haryana 122001</p>
                        <p className="text-sm text-gray-500">By appointment only</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Emergency Support</h3>
                      <p className="text-gray-600 mb-3">24/7 support for critical systems</p>
                      <div className="space-y-1">
                        <p className="text-primary">+91 9876543212 (Emergency)</p>
                        <p className="text-sm text-gray-500">For existing clients only</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Service Areas */}
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Delhi NCR</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Mumbai</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Bangalore</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Chennai</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Pune</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Hyderabad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Kolkata</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Pan India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

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
                          Phone Number *
                        </label>
                        <Input placeholder="Enter your phone number" className="border-gray-300 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-700 flex items-center">
                          <Building2 className="h-4 w-4 mr-2 text-primary" />
                          Company Name
                        </label>
                        <Input placeholder="Enter company name" className="border-gray-300 focus:border-primary" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Service Required</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                        <option value="">Select a service</option>
                        <option value="thermal-insulation">Thermal Insulation</option>
                        <option value="cold-storage">Cold Storage Solutions</option>
                        <option value="hvac-ducting">HVAC & Ducting</option>
                        <option value="industrial-solutions">Industrial Solutions</option>
                        <option value="energy-efficiency">Energy Efficiency Consulting</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                        Project Details *
                      </label>
                      <Textarea 
                        placeholder="Please describe your project requirements, specifications, timeline, and any specific challenges you're facing..."
                        className="border-gray-300 focus:border-primary min-h-32"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="newsletter" className="rounded border-gray-300 text-primary focus:ring-primary" />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        Subscribe to our newsletter for industry updates and technical insights
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button className="bg-primary hover:bg-primary/90 flex-1">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Request Call Back
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 mb-4">Find Our Location</h2>
            <p className="text-gray-600">Visit us at our headquarters or schedule a site visit for your project</p>
          </div>
          
          {/* Placeholder for map - in real implementation, you'd use Google Maps or similar */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500">123 Industrial Park, Sector 15, Gurgaon, Haryana 122001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}