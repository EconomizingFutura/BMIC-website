import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Their engineering expertise and attention to detail exceeded our expectations. The project was delivered on time and within budget.",
    author: "Anisha",
    position: "Project Manager",
    company: "Proventus",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    content:
      "Outstanding service and technical support. Their team's professionalism and expertise made our complex project a success.",
    author: "Gurumurthy Meiyappan",
    position: "Faciliate Manager",
    company: "Perfetti Van",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    content:
      "Reliable, professional, and innovative solutions. They've been our trusted partner for multiple projects over the years.",
    author: "Anand Kumar",
    position: "Manager",
    company: "Forech India (P) Limited.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export const clientLogos = [
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=TechCorp",
  },
  {
    name: "GreenEnergy",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=GreenEnergy",
  },
  {
    name: "Urban Dev",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Urban+Dev",
  },
  {
    name: "Maritime Inc",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Maritime",
  },
  {
    name: "Ocean Energy",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Ocean+Energy",
  },
  {
    name: "Defense Corp",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Defense+Corp",
  },
  {
    name: "Global Logistics",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Global+Log",
  },
  {
    name: "Industrial Solutions2",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions3",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions4",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions5",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions55",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions6",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions7",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions8",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions86",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions9",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
  {
    name: "Industrial Solutions1",
    logo: "https://via.placeholder.com/120x60/005919/FFFFFF?text=Industrial",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&lsquo;t just take our word for it. Here&lsquo;s what our valued
            clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className=" border border-[#0000001A] transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <p className="text-gray-700 leading-relaxed italic">
                    &#34;{testimonial.content}&ldquo;
                  </p>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        {/* <div className="text-center">
          <h3 className="text-xl text-gray-900 mb-8">Trusted by Industry Leaders</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Trust Indicators */}
        {/* <div className="mt-16 bg-white rounded-2xl p-8 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl text-primary mb-2">500+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">98%</div>
            <div className="text-gray-600">Client Retention Rate</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
