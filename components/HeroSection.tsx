import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import yoe from "./figma/images/yoe.svg";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#c9dcce] via-[#fffff] to-[#fffff] py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-8 ">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                Professional <span className="text-primary">Solutions</span>{" "}
                <br /> for Your Business Needs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We deliver innovative engineering solutions, manufacturing
                excellence, and comprehensive services to help your business
                thrive in today&lsquo;s competitive market.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                "ISO 9001:2015 Certified Quality",
                "24/7 Customer Support",
                "30+ Years of Experience",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-green-600 text-white border-green-600 hover:bg-green-700"
              >
                WhatsApp Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl text-primary">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">30+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative ">
            <div className="absolute -right-4 -top-12 md:-top-16 lg:-top-[5.5rem] h-32 w-32 md:h-full md:w-full md:max-w-36 md:max-h-36">
              <Image
                alt="30+Experience"
                src={yoe}
                className="h-full w-full object-contain"
              />
            </div>

            <Card className="overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industrial facility"
                className="w-full  h-96 border border-green-500 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Watch our</p>
                      <p className="text-primary">Company Overview</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
