import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { title: "About Us", href: "#about" },
  { title: "Our Services", href: "#services" },
  { title: "Industries", href: "#industries" },
  { title: "Projects", href: "#projects" },
  { title: "Careers", href: "#careers" },
  { title: "News & Updates", href: "#news" }
];

const services = [
  { title: "Engineering Services", href: "#engineering" },
  { title: "Manufacturing", href: "#manufacturing" },
  { title: "Automation", href: "#automation" },
  { title: "Maintenance", href: "#maintenance" },
  { title: "Consulting", href: "#consulting" },
  { title: "Training", href: "#training" }
];

const industries = [
  { title: "Oil & Gas", href: "#oil-gas" },
  { title: "Manufacturing", href: "#manufacturing" },
  { title: "Energy & Power", href: "#energy" },
  { title: "Construction", href: "#construction" },
  { title: "Transportation", href: "#transportation" },
  { title: "Defense", href: "#defense" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-xl text-primary">Company</h3>
                  <p className="text-sm text-gray-400">Solutions & Services</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading provider of innovative engineering solutions, manufacturing excellence, 
                and comprehensive services for over 30 years. We help businesses thrive through 
                cutting-edge technology and expert consultation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Industrial Drive</p>
                  <p className="text-gray-300">Houston, TX 77001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@company.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@company.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button size="icon" variant="outline" className="border-gray-600 text-gray-300 hover:text-primary hover:border-primary">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-gray-600 text-gray-300 hover:text-primary hover:border-primary">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-gray-600 text-gray-300 hover:text-primary hover:border-primary">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-gray-600 text-gray-300 hover:text-primary hover:border-primary">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href={industry.href} 
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {industry.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-lg mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 Company Solutions & Services. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="#sitemap" className="text-gray-400 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}