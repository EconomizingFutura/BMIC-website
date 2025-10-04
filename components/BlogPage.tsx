import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Filter,
  Calendar,
  User,
  Clock,
  Tag,
  ArrowRight,
  Thermometer,
  Snowflake,
  Wind,
  Factory,
  Zap,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

type BlogCategory =
  | "all"
  | "thermal-insulation"
  | "cold-storage"
  | "hvac-ducting"
  | "industrial-solutions"
  | "energy-efficiency"
  | "regulatory-compliance";

interface BlogPost {
  id: number;
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Latest Trends in Pharmaceutical Cold Storage: Maintaining Drug Efficacy in 2024",
    category: "cold-storage",
    excerpt:
      "Explore the cutting-edge technologies and best practices for pharmaceutical cold storage facilities that ensure drug stability and regulatory compliance.",
    content:
      "The pharmaceutical industry continues to evolve with new storage requirements...",
    image:
      "https://images.unsplash.com/photo-1576091160549-57d4ac34bfad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Priya Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: [
      "Pharmaceuticals",
      "Cold Chain",
      "Temperature Control",
      "Compliance",
    ],
    featured: true,
  },
  {
    id: 2,
    title:
      "High-Temperature Pipe Insulation: Materials and Best Practices for Industrial Applications",
    category: "thermal-insulation",
    excerpt:
      "A comprehensive guide to selecting the right insulation materials for high-temperature industrial piping systems, including petrochemical and power generation facilities.",
    content:
      "Industrial facilities operating at high temperatures require specialized insulation solutions...",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Engineer Rajesh Kumar",
    date: "2024-01-12",
    readTime: "12 min read",
    tags: ["High Temperature", "Pipe Insulation", "Industrial", "Materials"],
    featured: false,
  },
  {
    id: 3,
    title:
      "Energy Efficiency in HVAC Systems: How Smart Ducting Design Reduces Operational Costs",
    category: "hvac-ducting",
    excerpt:
      "Discover how modern HVAC ducting design and smart controls can significantly reduce energy consumption in commercial and industrial buildings.",
    content: "Modern HVAC systems are becoming increasingly sophisticated...",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Architect Meera Patel",
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["HVAC", "Energy Efficiency", "Smart Controls", "Commercial"],
    featured: true,
  },
  {
    id: 4,
    title:
      "Food Processing Industry: Maintaining Cold Chain Integrity from Farm to Fork",
    category: "cold-storage",
    excerpt:
      "Learn about the critical role of cold storage in food processing, from initial storage to final distribution, ensuring food safety and quality.",
    content:
      "The food processing industry relies heavily on maintaining precise temperature control...",
    image:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Food Technologist Amit Singh",
    date: "2024-01-08",
    readTime: "7 min read",
    tags: ["Food Processing", "Cold Chain", "Quality Control", "Safety"],
    featured: false,
  },
  {
    id: 5,
    title:
      "Regulatory Compliance in Industrial Insulation: Meeting International Standards",
    category: "regulatory-compliance",
    excerpt:
      "Understanding the complex landscape of international regulations for industrial insulation, including fire safety, environmental, and health standards.",
    content:
      "Navigating the regulatory landscape for industrial insulation can be complex...",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Compliance Expert Sarah Johnson",
    date: "2024-01-05",
    readTime: "15 min read",
    tags: ["Regulations", "Standards", "Compliance", "Safety"],
    featured: false,
  },
  {
    id: 6,
    title:
      "Sustainable Insulation Solutions: Reducing Carbon Footprint in Industrial Applications",
    category: "energy-efficiency",
    excerpt:
      "Explore eco-friendly insulation materials and installation practices that help industries reduce their environmental impact while maintaining performance.",
    content:
      "Sustainability is becoming a key driver in industrial insulation selection...",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sustainability Consultant Lisa Chen",
    date: "2024-01-03",
    readTime: "9 min read",
    tags: [
      "Sustainability",
      "Green Building",
      "Carbon Footprint",
      "Eco-friendly",
    ],
    featured: true,
  },
  {
    id: 7,
    title:
      "Data Center Cooling: Precision Temperature Control for High-Density Computing",
    category: "cold-storage",
    excerpt:
      "Advanced cooling strategies for modern data centers, including liquid cooling, precision air conditioning, and energy recovery systems.",
    content: "Data centers require precise temperature and humidity control...",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "IT Infrastructure Specialist Mike Rodriguez",
    date: "2024-01-01",
    readTime: "11 min read",
    tags: ["Data Centers", "Precision Cooling", "IT Infrastructure", "Energy"],
    featured: false,
  },
  {
    id: 8,
    title:
      "Industrial Steam System Insulation: Maximizing Efficiency and Safety",
    category: "industrial-solutions",
    excerpt:
      "Best practices for insulating steam systems in industrial facilities, focusing on energy conservation, personnel safety, and system longevity.",
    content:
      "Steam systems are critical components in many industrial processes...",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Process Engineer David Kim",
    date: "2023-12-28",
    readTime: "13 min read",
    tags: ["Steam Systems", "Industrial Process", "Safety", "Efficiency"],
    featured: false,
  },
  {
    id: 9,
    title:
      "Hospital HVAC Systems: Critical Design Considerations for Patient Safety",
    category: "hvac-ducting",
    excerpt:
      "Specialized HVAC requirements for healthcare facilities, including infection control, emergency systems, and energy efficiency considerations.",
    content:
      "Healthcare facilities have unique HVAC requirements that directly impact patient care...",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Healthcare Engineer Dr. Rachel Green",
    date: "2023-12-25",
    readTime: "14 min read",
    tags: [
      "Healthcare",
      "Infection Control",
      "Patient Safety",
      "Critical Systems",
    ],
    featured: true,
  },
];

const filterOptions = [
  {
    value: "all",
    label: "All Articles",
    icon: <Factory className="h-4 w-4" />,
    count: blogPosts.length,
  },
  {
    value: "thermal-insulation",
    label: "Thermal Insulation",
    icon: <Thermometer className="h-4 w-4" />,
    count: blogPosts.filter((p) => p.category === "thermal-insulation").length,
  },
  {
    value: "cold-storage",
    label: "Cold Storage",
    icon: <Snowflake className="h-4 w-4" />,
    count: blogPosts.filter((p) => p.category === "cold-storage").length,
  },
  {
    value: "hvac-ducting",
    label: "HVAC & Ducting",
    icon: <Wind className="h-4 w-4" />,
    count: blogPosts.filter((p) => p.category === "hvac-ducting").length,
  },
  {
    value: "industrial-solutions",
    label: "Industrial Solutions",
    icon: <Factory className="h-4 w-4" />,
    count: blogPosts.filter((p) => p.category === "industrial-solutions")
      .length,
  },
  {
    value: "energy-efficiency",
    label: "Energy Efficiency",
    icon: <Zap className="h-4 w-4" />,
    count: blogPosts.filter((p) => p.category === "energy-efficiency").length,
  },
  {
    value: "regulatory-compliance",
    label: "Regulatory & Compliance",
    icon: <Shield className="h-4 w-4" />,
    count: blogPosts.filter((p) => p.category === "regulatory-compliance")
      .length,
  },
];

interface BlogPageProps {
  onBackToHome: () => void;
}

export function BlogPage({ onBackToHome }: BlogPageProps) {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("all");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts =
    activeFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const getCategoryColor = (category: BlogCategory) => {
    switch (category) {
      case "thermal-insulation":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "cold-storage":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "hvac-ducting":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "industrial-solutions":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "energy-efficiency":
        return "bg-green-100 text-green-700 border-green-200";
      case "regulatory-compliance":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getCategoryIcon = (category: BlogCategory) => {
    switch (category) {
      case "thermal-insulation":
        return <Thermometer className="h-4 w-4" />;
      case "cold-storage":
        return <Snowflake className="h-4 w-4" />;
      case "hvac-ducting":
        return <Wind className="h-4 w-4" />;
      case "industrial-solutions":
        return <Factory className="h-4 w-4" />;
      case "energy-efficiency":
        return <Zap className="h-4 w-4" />;
      case "regulatory-compliance":
        return <Shield className="h-4 w-4" />;
      default:
        return <Factory className="h-4 w-4" />;
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen">
        {/* Blog Post Detail View */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <Button
              variant="outline"
              onClick={() => setSelectedPost(null)}
              className="mb-4 hover:bg-primary hover:text-white transition-colors border-primary/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Article Header */}
            <div className="text-center mb-12">
              <Badge
                className={`${getCategoryColor(
                  selectedPost.category
                )} border mb-4`}
              >
                {getCategoryIcon(selectedPost.category)}
                <span className="ml-2 capitalize">
                  {selectedPost.category.replace("-", " ")}
                </span>
              </Badge>
              <h1 className="text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(selectedPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}

            <div className="mb-12 relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {selectedPost.excerpt}
              </p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  {selectedPost.content} Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>

                <h2 className="text-2xl text-gray-900 mt-8 mb-4">
                  Key Considerations
                </h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                <ul className="space-y-2 ml-6">
                  <li>• Temperature control and monitoring systems</li>
                  <li>• Energy efficiency optimization</li>
                  <li>• Regulatory compliance requirements</li>
                  <li>• Maintenance and operational procedures</li>
                  <li>• Cost-benefit analysis and ROI</li>
                </ul>

                <h2 className="text-2xl text-gray-900 mt-8 mb-4">
                  Industry Impact
                </h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>

            {/* Article Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-60 right-32 w-24 h-24 bg-primary/10 rounded-lg rotate-45 animate-bounce delay-100" />
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-primary/15 rotate-12 animate-pulse delay-200" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/8 to-accent/15 rounded-full animate-bounce delay-300" />

          {/* Grid pattern for technical look */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  {i % 4 === 0 && (
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-8 hover:bg-primary hover:text-white transition-colors shadow-lg border-primary/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Industry Insights & Knowledge
            </Badge>
            <h1 className="text-4xl lg:text-6xl text-gray-900 mb-6">
              Technical{" "}
              <span className="text-primary relative">
                Blog & Resources
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, technologies, and best
              practices in industrial insulation, cold storage, HVAC systems,
              and energy efficiency solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600">Technical Articles</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">6</div>
                <div className="text-sm text-gray-600">Service Categories</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Industry Experts</div>
              </Card>
              <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-primary/20">
                <div className="text-2xl text-primary mb-1">Monthly</div>
                <div className="text-sm text-gray-600">Updates</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="h-5 w-5 text-primary" />
              <span className="text-sm text-gray-600">Filter by Category:</span>
            </div>
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                onClick={() => setActiveFilter(option.value as BlogCategory)}
                className={`${
                  activeFilter === option.value
                    ? "bg-primary text-white shadow-lg"
                    : "border-primary/30 text-primary hover:bg-primary hover:text-white"
                } transition-all duration-300 text-sm`}
              >
                {option.icon}
                <span className="ml-2">{option.label}</span>
                <Badge variant="secondary" className="ml-2 bg-white/20">
                  {option.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-gray-900 mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-white border-yellow-400">
                        Featured
                      </Badge>
                    </div>

                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${getCategoryColor(post.category)} border`}
                      >
                        {getCategoryIcon(post.category)}
                        <span className="ml-1 capitalize">
                          {post.category.replace("-", " ")}
                        </span>
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg text-gray-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => setSelectedPost(post)}
                        className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all duration-300"
                      >
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {regularPosts.length > 0 && (
            <>
              <h2 className="text-2xl text-gray-900 mb-8 text-center">
                {activeFilter === "all"
                  ? "All Articles"
                  : `${
                      filterOptions.find((f) => f.value === activeFilter)?.label
                    } Articles`}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`${getCategoryColor(
                            post.category
                          )} border`}
                        >
                          {getCategoryIcon(post.category)}
                          <span className="ml-1 capitalize">
                            {post.category.replace("-", " ")}
                          </span>
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <h3 className="text-lg text-gray-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <Button
                          onClick={() => setSelectedPost(post)}
                          variant="outline"
                          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <Factory className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">
                Try selecting a different category to see more articles.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
