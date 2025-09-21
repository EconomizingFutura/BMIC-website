"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import yoe from "./figma/images/yoe.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VideoThumbnail } from "./figma/images";

export function HeroSection() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  const onNavigateToContact = () => router.push("/contact");

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
                we deliver specialized solutions in thermal insulation and
                ducting systems, tailored to meet the demands of modern
                industrial and commercial infrastructures. With over three
                decades of experience, our services are designed to improve
                energy efficiency, temperature control, and acoustic comfort
                across facilities.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                "ISO 9001:2015 Certified",
                "30+ Years of Technical Expertise",
                "End-to-End Project Execution",
                "24/7 Customer Support",
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
                onClick={onNavigateToContact}
                size="lg"
                className="bg-primary hover:bg-green-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group hover:text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative"> Get a Quote</span>
                <ArrowRight className="ml-2 h-5 relative w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  window.open("https://wa.me/9566122235", "_blank");
                }}
                className="!bg-green-600 !text-white !border-green-600 hover:bg-green-700"
              >
                WhatsApp Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl text-primary">500+</div>
                <div className="text-sm text-gray-600">
                  Projects Delivered <br /> Successfully
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">98%</div>
                <div className="text-sm text-gray-600">
                  Client Satisfaction & Repeat Business
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">30+</div>
                <div className="text-sm text-gray-600">
                  Years of Industry <br /> Experience
                </div>
              </div>
            </div>
          </div>

          <div className="relative ">
            <div className="z-10 absolute -right-4 -top-12 md:-top-16 lg:-top-[5.5rem] h-32 w-32 md:h-full md:w-full md:max-w-36 md:max-h-36">
              <Image
                alt="30+Experience"
                src={yoe}
                className="h-full w-full object-contain"
              />
            </div>

            <Card className="relative overflow-hidden shadow-xl">
              {!isPlaying ? (
                <>
                  {/* Thumbnail */}
                  <Image
                    src={VideoThumbnail}
                    alt="Industrial facility"
                    className="w-full h-96 border border-green-500 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div
                      onClick={() => setIsPlaying(true)}
                      className="bg-white rounded-lg p-4 shadow-lg cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-white ml-1" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Watch our</p>
                          <p className="text-primary font-semibold">Company Overview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube Player */
                <div className="w-full h-96">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/kuZ-6jd82Go?autoplay=1&rel=0"
                    title="Company Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
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
