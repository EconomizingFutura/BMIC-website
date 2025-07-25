import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Ready to Start Your{" "}
            <span className="text-green-200">Next Project?</span>
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with our experts today. We&apos;re here to help you
            find the perfect solution for your business needs with a free
            consultation and competitive quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <h4 className="mb-2">WhatsApp Us</h4>
              <p className="text-sm text-white/80 mb-4">
                Quick response guaranteed
              </p>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-600 w-full"
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h4 className="mb-2">Call Us</h4>
              <p className="text-sm text-white/80 mb-4">Speak to an expert</p>
              <Button
                size="sm"
                variant="outline"
                className="border-white hover:text-white text-white w-full"
              >
                +1 (555) 123-4567
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white ">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="mb-2">Email Us</h4>
              <p className="text-sm text-white/80 mb-4">Detailed inquiry</p>
              <Button
                size="sm"
                variant="outline"
                className="border-white hover:text-white text-white w-full"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom stats */}
        <div className="text-center bg-white/10 rounded-2xl p-8">
          <h3 className="text-xl mb-6">Why Choose Us?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
            <div>
              <div className="text-2xl mb-2">&lt;24hrs</div>
              <div className="text-sm opacity-90">Response Time</div>
            </div>
            <div>
              <div className="text-2xl mb-2">30+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
