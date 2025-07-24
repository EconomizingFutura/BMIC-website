import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Phone, Mail, Menu, ChevronDown, ShieldCheck } from "lucide-react";
import BMIC_LOGO from "@/components/figma/images/BMIC_LOGO.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onNavigateToAbout?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToPharma?: () => void;
  onNavigateToProjects?: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToContact?: () => void;
}

export function Header({
  onNavigateToAbout,
  onNavigateToHome,
  onNavigateToServices,
  onNavigateToPharma,
  onNavigateToProjects,
  onNavigateToBlog,
  onNavigateToContact,
}: HeaderProps) {
  const solutions = [
    {
      title: "Insulation Solutions",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "Cold Storage Solutions",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "HVAC / Ducting Solutions",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "Soundproofing Solutions",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
  ];

  const industries = [
    {
      title: "Pharma",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "Food & Beverage",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      title: "Cold Chain Logistics",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
  ];

  return (
    <header className=" top-0 z-50 bg-white shadow-sm relative overflow-hidden ">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Grid pattern similar to ServicesPage */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border-r border-primary/10 h-full" />
            ))}
          </div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-2 left-1/4 w-6 h-6 border border-primary/20 rounded-full animate-pulse" />
        <div
          className="absolute top-4 right-1/3 w-4 h-4 bg-primary/10 rounded-lg rotate-45 animate-bounce delay-100"
          style={{ animationDuration: "3s" }}
        />
        <div className="absolute bottom-2 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse delay-200" />
        <div
          className="absolute top-1/2 right-1/4 w-5 h-5 border border-primary/15 rounded-lg rotate-12 animate-spin delay-300"
          style={{ animationDuration: "8s" }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-xl" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-lg" />
      </div>

      {/* Top contact bar with enhanced visuals */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-2 relative overflow-hidden">
        {/* Background pattern for top bar */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-8 h-8 border border-white/20 rounded-full animate-pulse" />
          <div className="absolute top-1 right-20 w-6 h-6 bg-white/10 rounded-lg rotate-45" />
          <div
            className="absolute bottom-0 left-1/3 w-4 h-4 border border-white/15 rounded-lg animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>

        <div className=" mx-auto  lg:px-24 px-4 flex md:flex-row flex-col justify-between items-center relative">
          <div className="flex items-center space-x-2 ml-auto md:ml-0   md:space-x-4">
            <div className="flex items-center space-x-1 md:space-x-2 hover:bg-white/10 md:px-2 py-1 rounded-md transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-[13px] md:text-[14px]">
                +1 (555) 123-4567
              </span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2 hover:bg-white/10 md:px-2 py-1 rounded-md transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-[13px] md:text-[14px]">
                info@company.com
              </span>
            </div>
          </div>
          <div className="flex items-center text-[13px] md:text-[14px] ml-auto md:ml-0 space-x-2">
            <span className="">Follow Us:</span>
            <div className="flex space-x-2">
              <a
                href="#"
                className="hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:bg-white/10 px-2 py-1 rounded-md transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation with enhanced styling */}
      <nav className=" mx-auto  px-2 lg:px-24 sm:px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <button
            onClick={onNavigateToHome}
            className="flex  items-center space-x-2 hover:opacity-80 transition-all duration-300 group relative"
          >
            {/* Enhanced logo with background effect */}
            <div className="relative ">
              <div className="md:w-24 md:h-12 h-6 w-12 rounded-lg flex items-center justify-center ">
                <Image src={BMIC_LOGO} alt="Logo" fill />
              </div>
              {/* Floating indicator */}
              <div className="absolute hidden md:block -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            </div>
            <div className="">
              <h1 className="whitespace-nowrap md:text-2xl text-[12px] sm:text-[13px] text-primary font-bold">
                Bharath Modern Insulation Company
              </h1>
            </div>
          </button>
          <Menu className="h-6 w-6 lg:hidden" />

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-6 space-x-6 relative">
            {/* Background decoration for nav */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <a
              href="#home"
              className="hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Home
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:text-primary font-medium transition-colors relative px-3 rounded-md flex gap-1 py-0.5 justify-center items-center hover:bg-primary/5 focus:outline-none">
                  Solutions <ChevronDown size={2} className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="z-[1000] bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px]"
                align="end"
              >
                <div className="max-w-sm flex flex-col bg-white p-2 space-y-6">
                  {solutions.map((item, index) => (
                    <DropdownMenuItem
                      className=" !hover:bg-white"
                      key={index}
                      asChild
                    >
                      <button
                        onClick={onNavigateToServices}
                        className="flex w-full text-left cursor-pointer items-start space-x-4 data-[highlighted]:bg-transparent"
                      >
                        <div className="bg-[#0059191A] p-2.5 rounded-full">
                          <ShieldCheck
                            size={24}
                            className="text-primary !h-7 !w-7"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-900 flex items-center">
                            {item.title}
                            <span className="ml-1 text-xl">→</span>
                          </h3>
                          <p className="text-gray-500 text-start text-sm">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <button
              onClick={onNavigateToPharma}
              className="hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              
            </button> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:text-primary font-medium transition-colors relative px-3 rounded-md flex gap-1 py-0.5 justify-center items-center hover:bg-primary/5 focus:outline-none">
                  Industries <ChevronDown size={2} className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="z-[1000] bg-white border border-gray-200 shadow-lg rounded-md min-w-[200px]"
                align="end"
              >
                <div className="max-w-sm flex flex-col bg-white p-2 space-y-6">
                  {industries.map((item, index) => (
                    <DropdownMenuItem
                      className=" !hover:bg-white"
                      key={index}
                      asChild
                    >
                      <button
                        onClick={onNavigateToPharma}
                        className="flex w-full text-left cursor-pointer items-start space-x-4 data-[highlighted]:bg-transparent"
                      >
                        <div className="bg-[#0059191A] p-2.5 rounded-full">
                          <ShieldCheck
                            size={24}
                            className="text-primary !h-7 !w-7"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-gray-900 flex items-center">
                            {item.title}
                            <span className="ml-1 text-xl">→</span>
                          </h3>
                          <p className="text-gray-500 text-start text-sm">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={onNavigateToProjects}
              className="hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Gallery
            </button>

            <button
              onClick={onNavigateToAbout}
              className="hover:text-primary font-medium transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5 whitespace-nowrap"
            >
              About Us
            </button>
            <Button
              onClick={onNavigateToContact}
              className="bg-primary hover:bg-green-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative"> Contact Us</span>
            </Button>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </nav>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
    </header>
  );
}
