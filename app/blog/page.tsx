"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface BlogPageProps {
  onBackToHome: () => void;
}

type BlogCategory =
  | "all"
  | "thermal-insulation"
  | "cold-storage"
  | "hvac-ducting";

export function BlogPage({ onBackToHome }: BlogPageProps) {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("all");

  const blogPosts = [
    {
      id: 1,
      title: "Maintaining Drug Efficacy in 2024",
      category: "cold-storage" as BlogCategory,
      excerpt:
        "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability",
      image:
        "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Maintaining Drug Efficacy in 2024",
      category: "thermal-insulation" as BlogCategory,
      excerpt:
        "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Engineer Rajesh Kumar",
      date: "2024-01-12",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Energy Efficiency in HVAC Systems",
      category: "hvac-ducting" as BlogCategory,
      excerpt:
        "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Architect Meera Patel",
      date: "2024-01-10",
      readTime: "10 min read",
    },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-20%  from-[#c9dcce]  via-[#c9dcce]  to-[#fffff] to-70% py-16 ">
        <div className="container mx-auto px-4 relative">
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-10 text-[#0A0A0A] hover:text-[#0A0A0A] border !border-[#0000001A] !bg-white shadow-md hidden md:inline-flex "
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="md:text-center text-start mb-12">
            <h1 className="text-4xl lg:text-[42px] font-semibold text-gray-900 mb-6">
              Technical <span className="text-primary">Blog & Resources</span>
            </h1>
            <p className="md:text-xl text-[16px] text-[#4A5565] max-w-5xl mx-auto">
              Stay updated with the latest trends, technologies, and best
              practices in industrial insulation, cold storage, HVAC systems,
              and energy efficiency solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pt-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <Filter className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-gray-600">Filter by Category:</span>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                { value: "all", label: "All Articles" },
                { value: "thermal-insulation", label: "Thermal Insulation" },
                { value: "cold-storage", label: "Cold Storage" },
                { value: "hvac-ducting", label: "HVAC & Ducting" },
              ].map((option) => (
                <Button
                  key={option.value}
                  variant={
                    activeFilter === option.value ? "default" : "outline"
                  }
                  onClick={() => setActiveFilter(option.value as BlogCategory)}
                  className={
                    activeFilter === option.value
                      ? "!bg-primary text-white !border-primary/30 !border"
                      : "!border-primary/30 !border text-primary"
                  }
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-2 border-[#00591933]"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#DBEAFE] border-[#BEDBFF] border rounded-[6.75px] text-[#1447E6] ">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg text-[#101828] font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full !bg-primary border-primary/30 text-white hover:bg-primary hover:text-white"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
