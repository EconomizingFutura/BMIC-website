"use client";

import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Filter, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface BlogPageProps {
  onBackToHome: () => void;
}

type BlogCategory = 'all' | 'thermal-insulation' | 'cold-storage' | 'hvac-ducting';

export function BlogPage({ onBackToHome }: BlogPageProps) {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>('all');

  const blogPosts = [
    {
      id: 1,
      title: "Latest Trends in Pharmaceutical Cold Storage",
      category: "cold-storage" as BlogCategory,
      excerpt: "Explore cutting-edge technologies for pharmaceutical cold storage facilities.",
      image: "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "High-Temperature Pipe Insulation Best Practices",
      category: "thermal-insulation" as BlogCategory,
      excerpt: "A comprehensive guide to selecting insulation materials for industrial applications.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Engineer Rajesh Kumar",
      date: "2024-01-12",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Energy Efficiency in HVAC Systems",
      category: "hvac-ducting" as BlogCategory,
      excerpt: "How smart ducting design reduces operational costs in commercial buildings.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Architect Meera Patel",
      date: "2024-01-10",
      readTime: "10 min read"
    }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

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
              Industry Insights
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Technical <span className="text-primary">Blog & Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and best practices in industrial 
              insulation, cold storage, and HVAC systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-primary" />
            <span className="text-sm text-gray-600">Filter by Category:</span>
            {[
              { value: 'all', label: 'All Articles' },
              { value: 'thermal-insulation', label: 'Thermal Insulation' },
              { value: 'cold-storage', label: 'Cold Storage' },
              { value: 'hvac-ducting', label: 'HVAC & Ducting' }
            ].map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                onClick={() => setActiveFilter(option.value as BlogCategory)}
                className={activeFilter === option.value ? "bg-primary text-white" : "border-primary/30 text-primary"}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white">
                    Read Article
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