import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description:
      "Certified quality management system ensuring consistent delivery of products and services.",
    validUntil: "2025",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    description:
      "Environmental management system certification demonstrating our commitment to sustainability.",
    validUntil: "2025",
    color: "bg-green-500",
  },
  {
    icon: Shield,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    description:
      "Workplace safety management system ensuring the health and safety of all personnel.",
    validUntil: "2025",
    color: "bg-red-500",
  },
  {
    icon: Award,
    title: "API Q1",
    subtitle: "Oil & Gas Quality",
    description:
      "American Petroleum Institute quality management system for oil and gas industry.",
    validUntil: "2024",
    color: "bg-purple-500",
  },
];

const achievements = [
  {
    icon: Star,
    title: "Industry Excellence Award",
    year: "2023",
    organization: "Manufacturing Association",
  },
  {
    icon: CheckCircle,
    title: "Safety Performance Award",
    year: "2023",
    organization: "National Safety Council",
  },
  {
    icon: Award,
    title: "Innovation in Engineering",
    year: "2022",
    organization: "Engineering Society",
  },
  {
    icon: Star,
    title: "Sustainability Leadership",
    year: "2022",
    organization: "Green Business Council",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold lg:text-5xl text-gray-900 mb-4">
            <span className="text-primary">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is recognized through industry
            certifications and awards that validate our quality and safety
            standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center  border-[#0000001A] transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <cert.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm mb-3">{cert.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <Badge variant="outline" className="text-xs">
                  Valid until {cert.validUntil}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-accent/50 rounded-2xl p-8">
          <h3 className="text-2xl text-center text-gray-900 mb-8">
            Recent Awards & Recognition
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-sm  transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h4 className="text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-primary mb-1">
                    {achievement.year}
                  </p>
                  <p className="text-xs text-gray-600">
                    {achievement.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl text-primary mb-2">30+</div>
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">15+</div>
            <div className="text-gray-600">Industry Certifications</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
