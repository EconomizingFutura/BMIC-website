import "../globals.css";
import WhatsAnimate from "@/components/WhatsAnimate";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Bharath Modern Insulation Company",
  description:
    "EMIC delivers specialized solutions in thermal insulation and ducting systems, tailored to meet the demands of modern industrial and commercial infrastructures. With over three decades of experience, our services are designed to improve energy efficiency, temperature control, and acoustic comfort across facilities.",
  icons: {
    icon: "/favicon.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <CTASection />
        <Footer />
        <WhatsAnimate />
      </body>
    </html>
  );
}
