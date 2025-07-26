"use client";
import Image from "next/image";
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
import BMIC_FOOTER from "@/components/figma/images/BMIC_FOOTER.svg";
import EFLOGO from "@/components/figma/images/EFLOGO.svg";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export const Footer: React.FC = () => {
  const router = useRouter();
  const onNavigateToAbout = () => router.push("/about");
  const onNavigateToPharma = () => router.push("/pharma");
  const onNavigateToProjects = () => router.push("/projects");
  const onNavigateToInsulation = () => router.push("/insulation");
  const onNavigateToColdStorage = () => router.push("/cold-storage-solutions");
  const onNavigateToDucting = () => router.push("/ducting-solutions");
  const onNavigateToSound = () => router.push("/sound-proofing-solutions");
  const onNavigateToFood = () => router.push("/food-beverage");
  const onNavigateToColdChain = () => router.push("/cold-chain-logistics");
  const onNavigateToBlog = () => router.push("/blog");

  return (
    <footer className="bg-gray-900 text-[#D1D5DC]">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="relative ">
                <div className="md:w-24 md:h-12 h-6 w-12 rounded-lg flex items-center bg-[#101828] justify-center ">
                  <Image
                    src={BMIC_FOOTER}
                    onClick={() => router.push("/")}
                    alt="Logo"
                    fill
                  />
                </div>
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
                <a className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2 rounded-md">
                  <Facebook className="h-[14px] w-[14px]" />
                </a>
                <a className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2  rounded-md">
                  <Twitter className="h-[14px] w-[14px]" />
                </a>
                <a className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2 rounded-md">
                  <Linkedin className="h-[14px] w-[14px]" />
                </a>
                <a className="text-gray-400 h-8 w-8 flex justify-center items-center border-[#4A5565] border-2 rounded-md">
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
                  onClick={onNavigateToInsulation}
                  className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                >
                  Insulation
                </a>
              </li>
              <li>
                <a
                  onClick={onNavigateToColdStorage}
                  className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                >
                  Cold Storage
                </a>
              </li>
              <li>
                <a
                  onClick={onNavigateToDucting}
                  className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                >
                  HVAC / Ducting
                </a>
              </li>
              <li>
                <a
                  onClick={onNavigateToSound}
                  className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                >
                  Soundproofing
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
                  onClick={onNavigateToPharma}
                  className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                >
                  Pharma
                </a>
              </li>
              <li>
                <a
                  onClick={onNavigateToFood}
                  className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                >
                  Food & Beverage
                </a>
              </li>
              <li>
                <a
                  onClick={onNavigateToColdChain}
                  className="text-gray-300  hover:text-primary transition-colors"
                >
                  Cold Chain Logistics
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors">
                  IT & Data Centers
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors">
                  Warehousing
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors">
                  Construction & Infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="space-y-4">
              <h4 className="text-lg text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    onClick={() => onNavigateToAbout()}
                    className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-primary transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-primary transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => onNavigateToProjects()}
                    className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => onNavigateToBlog()}
                    className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-primary transition-colors">
                    News & Updates
                  </a>
                </li>
              </ul>
            </div>

            <h4 className="text-lg text-white">Stay Updated</h4>
            <div>
              <Input
                className="border border-[#4A5565] bg-[#1E2939] placeholder:text-[#99A1AF]"
                placeholder="Your Email"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Subscribe
            </Button>
            <h4 className="text-lg text-white">Powered by</h4>
            <Image
              onClick={() =>
                (window.location.href = "https://www.economizingfutura.com/")
              }
              src={EFLOGO}
              alt="EF-logo"
            />
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-gray-700 pt-8 mb-8">
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
        </div> */}

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
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
