"use client";
import { Card, CardContent } from "../../components/ui/card";
// import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  subscribe: boolean;
}

type ContactFormErrors = {
  [K in keyof Omit<ContactFormData, "subscribe">]?: string;
};
const contactOptions = [
  {
    icon: <Phone className="h-6 w-6 text-primary " />,
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    details: [
      { type: "phone", value: "+91 9876543210" },
      { type: "phone", value: "+91 9876543211" },
    ],
    note: "Mon-Fri: 9:00 AM – 6:00 PM IST",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary " />,
    title: "Email Us",
    description: "Send us your project details and requirements",
    details: [
      { type: "email", value: "info@company.com" },
      { type: "email", value: "sales@company.com" },
    ],
    note: "Response within 24 hours",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary " />,
    title: "Visit Our Office",
    description: "Schedule a meeting at our headquarters",
    details: [
      { type: "address", value: "123 Industrial Park, Sector 15" },
      { type: "address", value: "Gurgaon, Haryana 122001" },
    ],
    note: "By appointment only",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    subscribe: false,
  });

  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox" && "checked" in e.target
        ? (e.target as HTMLInputElement).checked
        : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): ContactFormErrors => {
    const errors: ContactFormErrors = {};

    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email address.";

    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone must be 10 digits.";

    if (!formData.message.trim())
      errors.message = "Project details are required.";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    console.log("Form submitted successfully", errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully", formData);
      // Call API or show toast
    }
  };

  const router = useRouter();
  const onBackToHome = () => router.push("/home");

  return (
    <div className="min-h-screen">
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
              Contact <span className="text-primary">Our Experts</span>
            </h1>
            <p className="md:text-xl text-[16px] text-[#4A5565] max-w-5xl mx-auto">
              Ready to discuss your industrial insulation, cold storage, or HVAC
              project? Our team of experts is here to provide customized
              solutions for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 order-2 lg:order-1">
              {contactOptions.map((option) => (
                <Card
                  key={option.title}
                  className="p-6 border border-[#0000001A] bg-white"
                >
                  <div className="flex items-start gap-2  space-x-4">
                    <div className="bg-[#E8F5EA] md:p-3 p-2 rounded-full">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="text-[16px] text-[#101828] font-semibold mb-2">
                        {option.title}
                      </h3>
                      <p className="text-[#4A5565] text-[14px]">
                        {option.description}
                      </p>
                      {option.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-primary font-medium   my-1"
                        >
                          {detail.type === "phone" ? (
                            <a href={`tel:${detail.value}`}>{detail.value}</a>
                          ) : detail.type === "email" ? (
                            <a
                              href={`mailto:${detail.value}`}
                              className="text-primary hover:underline"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            detail.value
                          )}
                        </p>
                      ))}

                      <p className="text-[12.5px] text-[#6A7282] my-2">
                        {option.note}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <Card className="shadow-xl !border !border-[#9340401a]">
                <CardContent className="p-8 ">
                  <div className="grid grid-cols-1 gap-[7px] mb-4 ">
                    <h3 className="text-2xl text-[#101828] font-semibold ">
                      Send Us a Message
                    </h3>
                    <p className="text-[#4A5565] my-2">
                      Fill out the form below and we&lsquo;ll get back to you
                      within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm gap-1.5 flex text-gray-700 mb-2 ">
                          <User className="h-[14px] text-primary w-[14px]" />{" "}
                          Full Name *
                        </label>
                        {/* <Input
                          placeholder="Enter your full name"
                          className="!bg-[#F3F3F5] border !rounded-[6.75px] !border-[#D1D5DC]"
                        /> */}

                        <Input
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`!bg-[#F3F3F5] border !rounded-[6.75px] !border-[#D1D5DC] ${
                            formErrors.name ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs">
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm gap-1.5 flex text-gray-700 mb-2 ">
                          <Mail className="h-[14px] text-primary w-[14px]" />{" "}
                          Email Address *
                        </label>

                        <Input
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`!bg-[#F3F3F5] border !rounded-[6.75px] !border-[#D1D5DC] ${
                            formErrors.email ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm gap-1.5 flex text-gray-700 mb-2 ">
                          <Phone className="h-[14px] text-primary w-[14px]" />{" "}
                          Phone Number *
                        </label>

                        <Input
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`!bg-[#F3F3F5] border !rounded-[6.75px] !border-[#D1D5DC] ${
                            formErrors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-xs">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm gap-1.5 flex text-gray-700 mb-2 ">
                          <Building2 className="h-[14px] text-primary w-[14px]" />{" "}
                          Company Name
                        </label>

                        <Input
                          name="company"
                          placeholder="Enter company name"
                          value={formData.company}
                          onChange={handleChange}
                          className={`!bg-[#F3F3F5] border !rounded-[6.75px] !border-[#D1D5DC] ${
                            formErrors.company ? "border-red-500" : ""
                          }`}
                        />
                        {formErrors.company && (
                          <p className="text-red-500 text-xs">
                            {formErrors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-700 mb-2 block">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select a service</option>
                        <option value="Thermal Insulation">
                          Thermal Insulation
                        </option>
                        <option value="Cold Storage Solutions">
                          Cold Storage Solutions
                        </option>
                        <option value="HVAC & Ducting">HVAC & Ducting</option>
                        <option value="Other">Other</option>
                      </select>

                      {formErrors.service && (
                        <p className="text-red-500 text-xs">
                          {formErrors.service}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm gap-1.5 flex text-gray-700 mb-2 ">
                        <MessageSquare className="h-[14px] text-primary w-[14px]" />
                        Project Details *
                      </label>

                      <Textarea
                        name="message"
                        placeholder="Please describe your project requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`min-h-32 border !border-[#D1D5DC] !bg-[#F3F3F5] ${
                          formErrors.message ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-xs">
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center  space-x-2 ">
                      <Checkbox
                        id="subscribe"
                        className=" border border-[#767676]"
                      />
                      <p className="text-sm text-[#4A5565]">
                        Subscribe to our newsletter for industry updates and
                        technical insights
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-[10px]">
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button className="w-full text-primary border border-primary bg-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Request Call Back
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20  bg-[#F9FAFB]">
        <div className="container mx-auto  px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Find Our
              <span className="text-primary"> Location </span>
            </h2>
            <p className="text-[20px] text-[#4A5565] max-w-5xl mx-auto">
              Visit us at our headquarters or schedule a site visit for your
              project
            </p>
          </div>
        </div>
        <div className="mt-12 container px-4 mx-auto ">
          <div className="w-full rounded-[8.75px] max-h-[336px] h-full overflow-hidden aspect-video">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28441.112662923042!2d80.20089954143259!3d13.007816757111497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267709aa40a7d%3A0xca348695fc512750!2sGuindy%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1753256037778!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
