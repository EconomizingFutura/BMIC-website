import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, User, Building2 } from "lucide-react";

interface ContactPageProps {
  onBackToHome: () => void;
}

export function ContactPage({ onBackToHome }: ContactPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20">
        <div className="container mx-auto px-4 relative">
          <Button 
            variant="outline" 
            onClick={onBackToHome}
            className="mb-8 hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Contact <span className="text-primary">Our Experts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your industrial insulation, cold storage, or HVAC project? 
              Our team of experts is here to provide customized solutions.
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
                  Whether you need thermal insulation for industrial processes or cold storage 
                  solutions for pharmaceuticals, our experienced team is ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Phone Support</h3>
                      <p className="text-primary">+91 9876543210</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Email Us</h3>
                      <p className="text-primary">info@company.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">Visit Our Office</h3>
                      <p className="text-gray-700">123 Industrial Park, Sector 15</p>
                      <p className="text-gray-700">Gurgaon, Haryana 122001</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl text-gray-900 mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">Full Name *</label>
                        <Input placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">Email Address *</label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">Phone Number *</label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                      <div>
                        <label className="text-sm text-gray-700 mb-2 block">Company Name</label>
                        <Input placeholder="Enter company name" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">Service Required</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Select a service</option>
                        <option>Thermal Insulation</option>
                        <option>Cold Storage Solutions</option>
                        <option>HVAC & Ducting</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">Project Details *</label>
                      <Textarea 
                        placeholder="Please describe your project requirements..."
                        className="min-h-32"
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}