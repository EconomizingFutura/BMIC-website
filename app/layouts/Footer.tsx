import { Button } from "../../components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white">C</span>
              </div>
              <div>
                <h3 className="text-lg text-white">Company</h3>
                <p className="text-sm text-gray-400">Solutions & Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of innovative engineering solutions,
              manufacturing excellence, and comprehensive services for over 30
              years. We help businesses thrive through cutting- edge technology
              and expert consultation.
            </p>
            <div className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-[#B9F8CF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-normal text-sm leading-6">
                      123 Industrial Park, Sector 15
                    </p>
                    <p className="text-gray-300 font-normal text-sm leading-6">
                      Gurgaon, Haryana 122001
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#B9F8CF]" />
                  <p className="text-gray-300 font-normal text-sm leading-6">
                    +91 9876543210
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#B9F8CF]" />
                  <p className="text-gray-300 font-normal text-sm leading-6">
                    info@company.com
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-[#B9F8CF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-normal text-sm leading-6">
                      Mon-Fri: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-300 font-normal text-sm leading-6">
                      Sat: 9:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-300 font-normal text-sm leading-6">
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4  ">
              <h4 className="text-lg text-white">Follow Us</h4>
              <div className=" flex gap-4 text-sm">
                <a
                  href="#"
                  className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2 rounded-md"
                >
                  <Facebook className="h-[14px] w-[14px]" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2  rounded-md"
                >
                  <Twitter className="h-[14px] w-[14px]" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2 rounded-md"
                >
                  <Linkedin className="h-[14px] w-[14px]" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2 rounded-md"
                >
                  <Instagram className="h-[14px] w-[14px] " />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Thermal Insulation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cold Storage Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  HVAC & Ducting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Energy Efficiency
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Industrial Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="text-lg text-white">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Pharmaceutical
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Food Processing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Petrochemical
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Power Generation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Data Centers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Healthcare
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  News & Updates
                </a>
              </li>
            </ul>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for industry insights and technical
              updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Company Solutions & Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
