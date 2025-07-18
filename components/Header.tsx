import { Button } from "./ui/button";
import { Phone, Mail, Menu } from "lucide-react";

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
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm  overflow-hidden">
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

        <div className="container mx-auto px-4 flex justify-between items-center relative">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 hover:bg-white/10 px-2 py-1 rounded-md transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-white/10 px-2 py-1 rounded-md transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@company.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline">Follow Us:</span>
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
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <button
            onClick={onNavigateToHome}
            className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group relative"
          >
            {/* Enhanced logo with background effect */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white">C</span>
              </div>
              {/* Floating indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                Company
              </h1>
              <p className="text-sm text-muted-foreground">
                Solutions & Services
              </p>
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 relative">
            {/* Background decoration for nav */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <a
              href="#home"
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Home
            </a>
            <button
              onClick={onNavigateToServices}
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Services
            </button>
            <button
              onClick={onNavigateToPharma}
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Industries
            </button>
            <button
              onClick={onNavigateToProjects}
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Projects
            </button>
            <button
              onClick={onNavigateToBlog}
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Blog
            </button>
            <button
              onClick={onNavigateToAbout}
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              About
            </button>
            <button
              onClick={onNavigateToContact}
              className="hover:text-primary transition-colors relative px-3 py-2 rounded-md hover:bg-primary/5"
            >
              Contact
            </button>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex items-center space-x-4 relative">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get a Quote</span>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">WhatsApp Us</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-primary/10 transition-colors relative"
            >
              <Menu className="h-6 w-6" />
              {/* Mobile menu indicator */}
              <div className="absolute top-1 right-1 w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
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
